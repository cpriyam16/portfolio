import { useEffect, useRef } from 'react';

export default function MouseAurora() {
  const auroraRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const aurora = auroraRef.current;
    if (!aurora) return;

    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let isVisible = false;

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      aurora.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!isVisible) {
        aurora.style.opacity = "1";
        isVisible = true;
      }
    };

    const handleMouseLeave = () => {
      aurora.style.opacity = "0";
      isVisible = false;
    };

    const handleMouseEnter = () => {
      aurora.style.opacity = "1";
      isVisible = true;
    };

    frameRef.current = window.requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className="mouse-aurora" aria-hidden="true">
      <div ref={auroraRef} className="mouse-aurora-inner" />
    </div>
  );
}