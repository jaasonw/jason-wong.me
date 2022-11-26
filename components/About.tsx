import Link from "next/link";

import { FadeInOnScroll } from "./FadeInOnScroll";

export default function Header() {
  return (
    <section className="flex w-full p-10 justify-center">
      <FadeInOnScroll>
        <section className="text-lg text-center max-w-7xl">
          <h1 className="font-heading font-medium text-azure text-4xl">
            About me
          </h1>
          Hey there, I&apos;m Jason and I&apos;m a Los Angeles based frontend
          developer working towards a Bachelor&apos;s in Computer Science with a
          minor in Mathematics at Cal State Fullerton.
          <br></br>
          <br></br>I started programming in 2013 when I really wanted to make
          mods for Minecraft and continued pursuing it, bringing us to where we
          are now. Since then, I&apos;ve had the opportunity to work at a
          startup and serve as TA at my community college, tutoring/mentoring
          hundreds of students. More recently, I&apos;ve been able to work at a{" "}
          <Link href="https://www.amazon.com/">
            <a className="color-azure hover:underline">large tech company</a>
          </Link>
          , serve as an organizer for{" "}
          <Link href="https://tuffyhacks.com">
            <a className="color-azure hover:underline">TuffyHacks</a>
          </Link>
          , CSUF&apos;s premier hackathon and the second largest in Orange
          County, and as a board member for{" "}
          <Link href="https://acmcsuf.com">
            <a className="color-azure hover:underline">ACM at CSUF</a>
          </Link>
          , the largest tech community on campus.
          {/*           
            Since then,
          I&apos;ve explored many languages and technologies and am always
          learning more, I&apos;ve worked at a startup, and I&apos;ve helped
          plenty of students along their programming journey at my community
          college. I enjoy creating websites from scratch and I love making
          ideas come to life. */}
          <br></br>
          <br></br>
          During my free time I enjoy gaming with friends, taking photos, and
          binge watching animes/kdramas.
          <br></br>
          <br></br>
        </section>
      </FadeInOnScroll>
    </section>
  );
}
