// import projectcard, {
//   project,
// } from "$lib/v2/components/projectcard/projectcard";
// // import projects from "$lib/v2/projects.json";
import Link from "next/link";

export default function works() {
  return (
    <div className="flex flex-col gap-2 h-full">
      <h1 className="text-3xl font-bold">work and experience</h1>
      <div>
        not a resume, resume <Link href="/resume.pdf">here</Link>
      </div>
      <hr></hr>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold">work</h2>
          <ul>
            <li>
              <span className="text-lg font-bold">
                f&a federal credit union
              </span>{" "}
              - systems administrator
            </li>
            <li>
              <span className="text-lg font-bold">amazon</span> - software
              development engineer intern, personalization team
            </li>
            <li>
              <span className="text-lg font-bold">twiine</span> - software
              engineer intern, mobile app development
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">volunteer</h2>
          <ul>
            <li>
              <span className="text-lg font-bold">hack for la</span> - devops &
              software engineer for 311-data
            </li>
            <li>
              <span className="text-lg font-bold">lahacks</span> @ university of
              california, los angeles
            </li>
            <li>
              <span className="text-lg font-bold">
                association for computing machinery
              </span>{" "}
              @ california state university, fullerton
            </li>
            <li>
              <span className="text-lg font-bold">
                fullyhacks (formerly tuffyhacks)
              </span>{" "}
              @ california state university, fullerton
            </li>
            <li>
              <span className="text-lg font-bold">she.codes</span> @ pasadena
              city college
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">teach</h2>
          <ul>
            <li>
              <span className="text-lg font-bold">
                cs 002 - fundamentals of computer science
              </span>{" "}
              - teaching assistant @ pasadena city college
            </li>
            <li>
              <span className="text-lg font-bold">
                cs 003a - object-oriented programming
              </span>{" "}
              - teaching assistant @ pasadena city college
            </li>
            <li>
              <span className="text-lg font-bold">
                cs 008 - data structures{" "}
              </span>{" "}
              - teaching assistant @ pasadena city college
            </li>
            <li>
              <span className="text-lg font-bold">private tutoring</span> - self
              employed
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">learn</h2>
          <ul>
            <li>
              <span className="text-lg font-bold">
                cisco certified network associate (ccna)
              </span>{" "}
              - in progress
            </li>
            <li>
              <span className="text-lg font-bold">
                california state university, fullerton
              </span>{" "}
              - b.s, computer science, minor in mathematics
            </li>
            <li>
              <span className="text-lg font-bold">pasadena city college</span> -
              a.s-t, mathematics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
