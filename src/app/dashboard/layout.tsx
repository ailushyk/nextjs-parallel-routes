import React from "react";
import { Container } from "@/components/container";

export default async function DashboardLayout({
  children, // left,
  // right,
}: {
  children: React.ReactNode;
  // left: React.ReactNode;
  // right: React.ReactNode;
}) {
  return (
    <Container>
      <header>
        <h1 className="text-center">Dashboard LAYOUT</h1>
        {children}
      </header>
    </Container>
  );
}
