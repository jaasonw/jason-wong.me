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
      <h1 className="text-6xl font-bold">contact</h1>
      <hr></hr>
      <div className="flex flex-col text-lg gap-5">
        <section>
          interested in hiring me or have an idea to pitch? currently not
          looking for work but open to hearing your proposals if it fits the
          bill. let's get in touch and discuss your project ideas
        </section>
        <ul className="list-disc list-inside">
          {/* <li>
            <Link href="mailto:jayywong92@gmail.com">email</Link>
          </li> */}
          <li>
            <Link href="https://www.linkedin.com/in/wayson/">linkedin</Link>
          </li>
          <li>
            <Link href="http://jason-wong.me/meeting">calendly</Link>
          </li>
          <li>
            <Link href="http://jason-wong.me/donate">donate</Link>
          </li>
          <li>
            email: hi [at] jasonw [dot] me
          </li>
        </ul>
      </div>
    </div>
  );
}
