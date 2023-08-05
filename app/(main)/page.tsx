import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      <h1 className="text-6xl font-bold">Hi, I'm Jason</h1>
      <h2 className="text-2xl">Frontend Software Engineer</h2>
      <h3 className="text-2xl">
        Read more about me <Link href="/about">here</Link> or get in touch with
        me <Link href="/contact">here</Link>
      </h3>
    </div>
  );
}