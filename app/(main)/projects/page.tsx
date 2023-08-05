import Link from "next/link";

function SkillBadge({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="px-2 py-1 text-sm font-semibold text-slate-100 rounded-md"
    >
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col gap-2 h-full">
      <h1 className="text-6xl font-bold">Projects</h1>
      <hr></hr>
      <div className="flex flex-col text-lg gap-5">
        <section>WIP</section>
      </div>
    </div>
  );
}
