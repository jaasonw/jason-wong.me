import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

config.autoAddCss = false;

export const metadata = {
  title: "Jason's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const width = "max-w-5xl";
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col items-center h-screen mx-10 bg-slate-100 dark:bg-slate-900 dark:text-slate-300">
        <nav className="flex justify-center w-full h-24">
          <div
            className={`flex items-center justify-end h-full w-full ${width}`}
          >
            <div className="flex items-center gap-5 ">
              <Link href="/" className="no-underline">
                Home
              </Link>
              <Link href="https://blog.jason-wong.me" className="no-underline">
                Blog
              </Link>
              <Link href="/about" className="no-underline">
                About
              </Link>
              <Link href="/projects" className="no-underline">
                Projects
              </Link>
              <Link href="/contact" className="no-underline">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <div className={`flex flex-col justify-center h-full w-full ${width}`}>
          {children}
        </div>
        <footer className="flex flex-col items-center justify-center w-full h-24 gap-2 text-center">
          <section className="flex justify-center w-full gap-10">
            <Link href="https://github.com/jaasonw">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </Link>
            <Link href="https://linkedin.com/in/wayson">
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
            </Link>
            <Link href="mailto:jayywong92@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </Link>
            <Link href="https://jason-wong.me/donate">
              <FontAwesomeIcon icon={faCoffee} size="xl" />
            </Link>
          </section>
          <p className="text-gray-600 dark:text-gray-400">© 2023 Jason Wong</p>
        </footer>
      </body>
    </html>
  );
}
