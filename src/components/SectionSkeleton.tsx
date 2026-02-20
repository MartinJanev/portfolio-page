interface SectionSkeletonProps {
  title: string;
}

export function SectionSkeleton({ title }: SectionSkeletonProps) {
  return (
    <section
      className="scroll-mt-28 py-24 flex justify-center"
      aria-busy="true"
    >
      <div className="w-full max-w-5xl px-4 animate-pulse">
        <div
          className="h-10 w-48 mx-auto mb-8 rounded"
          style={{ backgroundColor: "var(--card-hover)" }}
          aria-label={`${title} loading`}
        />
        <div className="space-y-4">
          <div
            className="h-4 w-full rounded"
            style={{ backgroundColor: "var(--card-hover)" }}
          />
          <div
            className="h-4 w-11/12 rounded"
            style={{ backgroundColor: "var(--card-hover)" }}
          />
          <div
            className="h-4 w-10/12 rounded"
            style={{ backgroundColor: "var(--card-hover)" }}
          />
        </div>
      </div>
    </section>
  );
}
