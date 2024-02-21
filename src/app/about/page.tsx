import AboutComponent from "@/components/AboutComponent/AboutComponent";
import Link from "next/link";

export default function About() {
  return (
    <main className="p-20 grid gap-4">
      <AboutComponent></AboutComponent>
      <Link href="/" className="bg-zinc-200 w-fit py-1 px-3 rounded hover:bg-zinc-100 hover:cursor-pointer border border-zinc-400">
        Go Back
      </Link>
    </main>
  );
}
