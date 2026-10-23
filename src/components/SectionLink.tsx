import type { ComponentPropsWithoutRef, MouseEvent } from 'react';

type SectionLinkProps = ComponentPropsWithoutRef<'a'> & {
  href: string;
};

export default function SectionLink({
  href,
  onClick,
  ...props
}: SectionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (props.target && props.target !== '_self')
    ) {
      return;
    }

    const section = href.startsWith('#')
      ? document.getElementById(href.slice(1))
      : null;

    if (section) {
      event.preventDefault();
      section.scrollIntoView({ block: 'start' });
    }
  };

  return <a {...props} href={href} onClick={handleClick} />;
}
