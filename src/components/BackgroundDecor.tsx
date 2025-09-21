export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(34,197,94,.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(10,10,10,.7))]" />
      <div className="absolute inset-0 opacity-15 [mask-image:radial-gradient(ellipse_65%_50%_at_50%_10%,black,transparent_70%)] bg-[linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:38px_38px]" />
    </div>
  );
}
