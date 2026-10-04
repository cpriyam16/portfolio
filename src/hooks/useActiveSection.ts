import { useEffect, useMemo, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const validSectionIds = useMemo(() => {
    return ["hero", ...sectionIds];
  }, [sectionIds]);

  useEffect(() => {
    const sections = validSectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const visibleSections = new Map<string, number>();

    const updateFromVisibleSections = () => {
      if (visibleSections.size === 0) {
        const scrollTop = window.scrollY;
        const viewportMid = scrollTop + window.innerHeight * 0.35;
        let fallbackSection = validSectionIds[0];

        for (const section of sections) {
          if (viewportMid >= section.offsetTop) {
            fallbackSection = section.id;
          }
        }

        const pageBottom = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (pageBottom >= documentHeight - 8) {
          fallbackSection = validSectionIds[validSectionIds.length - 1];
        }

        setActiveSection(fallbackSection);
        return;
      }

      let bestSectionId = validSectionIds[0];
      let bestRatio = 0;

      validSectionIds.forEach((id) => {
        const ratio = visibleSections.get(id) ?? 0;
        if (ratio >= bestRatio) {
          bestRatio = ratio;
          bestSectionId = id;
        }
      });

      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (pageBottom >= documentHeight - 8) {
        bestSectionId = validSectionIds[validSectionIds.length - 1];
      }

      setActiveSection(bestSectionId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;

          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        });

        updateFromVisibleSections();
      },
      {
        root: null,
        rootMargin: "-10% 0px -20% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.65, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      updateFromVisibleSections();
    };

    const handleResize = () => {
      updateFromVisibleSections();
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [validSectionIds]);

  return activeSection;
}