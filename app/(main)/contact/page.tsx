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

export default function Contact() {
  return (
    <div className="flex flex-col gap-2 h-full">
      <h1 className="text-6xl font-bold">Contact</h1>
      <hr></hr>
      <div className="flex flex-col text-lg gap-5">
        <section>
          Interested in hiring me or have an idea to pitch? I'm currently open
          to work as a frontend developer and looking for opportunities to
          diversify my portfolio. Let's get in touch and discuss your project
          ideas.
        </section>
        <ul className="list-disc list-inside">
          <li>
            <Link href="mailto:jayywong92@gmail.com">Email</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/wayson/">LinkedIn</Link>
          </li>
          <li>
            <Link href="http://jason-wong.me/meeting">Calendly</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
