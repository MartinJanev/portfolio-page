import {
  useEffect,
  useRef,
  type ElementType,
  type PropsWithChildren,
} from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface Props extends PropsWithChildren {
  className?: string;
  as?: ElementType;
}

/**
 * Reveals its direct children in sequence using a single IntersectionObserver.
 * The stagger itself is CSS (see .reveal-stagger in index.css) so children are
 * neither wrapped nor cloned — grid utilities on the cards keep working.
 */
export function RevealList({
  children,
  className = "",
  as: Element = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) node.classList.add("visible");
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <Element className={className}>{children}</Element>;
  }

  return (
    <Element ref={ref} className={`reveal-stagger ${className}`}>
      {children}
    </Element>
  );
}
