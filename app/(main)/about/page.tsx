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

export default function About() {
  const skills = {
    React: "#61dbfb",
    NextJS: "#000000",
    Svelte: "#ff3e00",
    TypeScript: "#007acc",
    JavaScript: "#f0db4f",
    HTML: "#e34c26",
    CSS: "#2965f1",
    TailwindCSS: "#38b2ac",
    Python: "#3776ab",
    Flask: "#000000",
    Postgres: "#336791",
    Docker: "#2496ed",
    Firebase: "#ffca28",
    "Amazon Web Services": "#232f3e",
    "Google Cloud": "#4285f4",
  };
  return (
    <div className="flex flex-col gap-2 h-full">
      <h1 className="text-6xl font-bold">About</h1>
      <hr></hr>
      <div className="flex flex-col text-lg gap-5">
        <section>
          I'm Jason, I recently graduated from Cal State Fullerton with a
          Bachelors in Computer Science and Minor in mathematics.
          <br></br>
          <br></br>
          I'm a frontend software engineer with a passion for building beautiful
          and intuitive user interfaces. During my time in university, I spent 2
          years as an active developer and board member for a few organizations
          on campus. The first of which is the{" "}
          <Link href="https://acmcsuf.com" target="_blank">
            largest computer science club
          </Link>{" "}
          on campus with an active community of over a thousand members where I
          developed features on our website like our{" "}
          <Link href="https://acmcsuf.com/blog" target="_blank">
            blogging platform
          </Link>{" "}
          and our{" "}
          <Link
            href="https://acmcsuf.com/events"
            className="underline hover:text-blue-500 underline-offset-4"
            target="_blank"
          >
            events listing
          </Link>{" "}
          that synchronizes with Google Calendar. The second of which is our
          school's{" "}
          <Link href="https://tuffyhacks.com/" target="_blank">
            second annual hackathon
          </Link>{" "}
          where I developed our online platform which featured a landing page to
          advertise the event to students globally and a dashboard for attendees
          to view their acceptance status, notifications, and schedules for the
          event.
          <br></br>
          <br></br>
          Last summer, I joined{" "}
          <Link href="https://amazon.com/" target="_blank">
            Amazon
          </Link>{" "}
          as a Software Development Intern for the Customer Interests team where
          I developed internal tooling to create datasets that integrate with
          the team's data pipeline to train recommenders that help serve Amazon
          shoppers with better product recommendations.
        </section>
        <div>
          <Link href="/resume">Resume</Link>
        </div>
        <h2 className="text-2xl font-bold">Skills</h2>
        <section className="flex flex-wrap gap-2">
          {Object.keys(skills).map((skill) => (
            <SkillBadge key={skill} color={(skills as any)[skill]}>
              {skill}
            </SkillBadge>
          ))}
        </section>
      </div>
    </div>
  );
}
