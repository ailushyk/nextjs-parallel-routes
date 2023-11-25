import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <nav>
        <Link href={'/dashboard'}>Dashboard</Link>
        <Link href={'/component'}>Dashboard</Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </main>
  )
}
