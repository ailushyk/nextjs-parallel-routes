import Link from "next/link";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <nav className="flex gap-2 text-neutral-600">
        <Link href="/dashboard" className="hover:text-neutral-400 transition">
          Dashboard
        </Link>
        <Link href="/components" className="hover:text-neutral-400 transition">
          Components
        </Link>
        <Link href="/about" className="hover:text-neutral-400 transition">
          About
        </Link>
      </nav>
    </Container>
  );
}
