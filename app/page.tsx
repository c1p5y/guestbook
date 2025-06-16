import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center">
      <Link className="font-bold hover:text-cyan-600 min-w-3/10 text-center" href="/guestbook">GuestBook Page</Link>
    
      </div>
    </main>
  );
}
