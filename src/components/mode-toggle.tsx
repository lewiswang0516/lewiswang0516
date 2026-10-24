import Link from "next/link";

export function ModeToggle({
  current,
  offset = "bottom-6",
}: {
  current: "ask" | "portfolio";
  offset?: string;
}) {
  const base = "rounded-full px-3.5 py-1.5 transition-colors";
  const active = "bg-sand-5 text-sand-12";
  const idle = "text-sand-11 hover:bg-sand-4 hover:text-sand-12";
  return (
    <div
      className={`border-thin fixed right-5 z-50 inline-flex items-center rounded-full border-sand-6 bg-sand-1 p-1 text-body md:right-8 ${offset}`}
    >
      <Link href="/" className={`${base} ${current === "ask" ? active : idle}`}>
        Ask me
      </Link>
      <Link
        href="/portfolio"
        className={`${base} ${current === "portfolio" ? active : idle}`}
      >
        Portfolio
      </Link>
    </div>
  );
}
