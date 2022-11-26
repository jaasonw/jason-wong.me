import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FadeInOnScroll } from "./FadeInOnScroll";
import ctl from "@netlify/classnames-template-literals";

function ContactButton({ icon, text, link }) {
  const buttonClasses = ctl(`
    py-2.5
    px-4
    m-2
    text-ghostwhite
    bg-blue-700
    hover:bg-blue-800
    rounded-md
    text-sm
    font-bold
  `);
  return (
    <a className={buttonClasses} href={link}>
      {icon} {text}
    </a>
  );
}

export default function Contact() {
  return (
    <section className="flex justify-center w-full p-6 bg-azure text-ghostwhite">
      <FadeInOnScroll>
        <section className="text-xl max-w-7xl text-center">
          <h1 className="font-heading font-medium text-4xl text-amber">
            Contact me
          </h1>
          Interested in hiring me or have an idea to pitch? I&apos;m currently
          open to work as a frontend developer and looking for opportunities to
          diversify my portfolio. Let&apos;s get in touch and discuss your
          project ideas.
          <br></br>
          <br></br>
          <ContactButton
            icon={<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>}
            text="LinkedIn"
            link="https://www.linkedin.com/in/wayson/"
          ></ContactButton>
          <ContactButton
            icon={<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>}
            text="Github"
            link="https://github.com/jaasonw"
          ></ContactButton>
          <ContactButton
            icon={<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>}
            text="Email"
            link="mailto:jayywong92@gmail.com"
          ></ContactButton>
          <ContactButton
            icon={<FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>}
            text="Resume"
            link="https://jaasonw.github.io/files/resume.pdf"
          ></ContactButton>
          <br></br>
          <br></br>
          Designed and built by Jason Wong
          <br></br>
          Copyright 2022
          <br></br>
          Built with{" "}
          <a className="text-amber hover:underline" href="https://nextjs.org/">
            Next.js
          </a>{" "}
          &{" "}
          <a
            className="text-amber hover:underline"
            href="https://tailwindcss.com/"
          >
            TailwindCSS
          </a>{" "}
        </section>
      </FadeInOnScroll>
    </section>
  );
}
