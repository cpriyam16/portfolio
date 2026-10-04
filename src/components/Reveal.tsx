import type { PropsWithChildren } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Reveal({ children }: PropsWithChildren) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'reveal-visible' : ''}`}
    >
      {children}
    </div>
  );
}