import HomeComponent from "@/components/HomeComponent/HomeComponent";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-20 grid gap-4">
      <span>Enter a name, then navigate to About page</span>
      <HomeComponent></HomeComponent>
      <Link href="/about" className="bg-zinc-200 w-fit py-1 px-3 rounded hover:bg-zinc-100 hover:cursor-pointer border border-zinc-400">
        To About Page
      </Link>
    </main>
  );
}
