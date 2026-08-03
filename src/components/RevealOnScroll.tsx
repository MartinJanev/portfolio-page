import { useEffect, useRef, type PropsWithChildren } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export const RevealOnScroll = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) node.classList.add("visible");
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
