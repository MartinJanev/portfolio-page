import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  id: string;
  /** Legacy centered heading, still used by Contact. */
  title?: ReactNode;
  /** Richer heading block (see ui/SectionHeader); takes precedence over title. */
  header?: ReactNode;
  width?: "default" | "wide";
}

export default function Section({
  id,
  title,
  header,
  width = "default",
  children,
}: Props) {
  return (
    <section id={id} className="scroll-mt-28 py-24 flex justify-center">
      <div
        className={`w-full px-4 ${width === "wide" ? "max-w-6xl" : "max-w-5xl"}`}
      >
        {header ??
          (title && (
            <h2 className="text-center text-5xl font-bold mb-10 bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              {title}
            </h2>
          ))}
        {children}
      </div>
    </section>
  );
}
