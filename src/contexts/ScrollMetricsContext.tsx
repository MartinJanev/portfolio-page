import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ScrollMetrics = {
  scrollY: number;
  progress: number;
  navScrolled: boolean;
  pastAboutHalf: boolean;
};

const ScrollMetricsContext = createContext<ScrollMetrics | null>(null);

function readScrollMetrics(): ScrollMetrics {
  const y = window.scrollY;
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (y / scrollable) * 100 : 0;

  const about = document.getElementById("about");
  const pastAboutHalf = about
    ? y > about.offsetTop + about.offsetHeight / 2
    : false;

  return {
    scrollY: y,
    progress,
    navScrolled: y > 50,
    pastAboutHalf,
  };
}

export function ScrollMetricsProvider({ children }: { children: ReactNode }) {
  const [metrics, setMetrics] = useState<ScrollMetrics>(() =>
    typeof window === "undefined"
      ? { scrollY: 0, progress: 0, navScrolled: false, pastAboutHalf: false }
      : readScrollMetrics(),
  );

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setMetrics(readScrollMetrics()));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const value = useMemo(() => metrics, [metrics]);

  return (
    <ScrollMetricsContext.Provider value={value}>
      {children}
    </ScrollMetricsContext.Provider>
  );
}

export function useScrollMetrics(): ScrollMetrics {
  const context = useContext(ScrollMetricsContext);
  if (!context) {
    throw new Error(
      "useScrollMetrics must be used within ScrollMetricsProvider",
    );
  }
  return context;
}
