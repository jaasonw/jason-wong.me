import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center h-[72vh]">
      <h1 className="text-6xl font-bold">hi, i'm jason</h1>
      <h2 className="text-2xl">aspiring baker, wip ccna</h2>
      <h3 className="text-2xl">
        check out some of what i do <Link href="/work" className="underline hover:text-blue-500 underline-offset-4">here</Link> or get in touch with
        me <Link href="/contact">here</Link>
      </h3>
    </div>
  );
}