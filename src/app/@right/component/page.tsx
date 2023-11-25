import { Container } from "@/components/container";
import Link from "next/link";

export default function ComponentPage() {
  return (
    <div>
      <h1>Component</h1>
      <div className="flex-1">content</div>
      <ul>
        <li>
          <Link href="/component/1">1</Link>
        </li>
        <li>
          <Link href="/component/2">2</Link>
        </li>
        <li>
          <Link href="/component/3">3</Link>
        </li>
        <li>
          <Link href="/component/4">4</Link>
        </li>
      </ul>
    </div>
  );
}
