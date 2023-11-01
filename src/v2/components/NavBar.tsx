import Link from "next/link";
import { ModeToggle } from "$lib/v2/shadcn/ui/mode-toggle";

export default function NavBar({ className }: { className: string }) {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    // {
    //   name: "Blog",
    //   link: "https://blog.jason-wong.me",
    // },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="flex justify-center w-screen h-24">
      <div
        className={`flex items-center justify-end h-full w-full ${className}`}
      >
        <div className="flex items-center gap-5">
          {links.map((l) => {
            return (
              <Link href={l.link} className="no-underline" key={l.link}>
                {l.name}
              </Link>
            );
          })}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
