import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
