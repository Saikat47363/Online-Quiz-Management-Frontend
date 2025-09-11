"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ background: "#83068cff", color: "white", padding: "10px 20px", display: "flex", justifyContent: "space-between" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>Online Quiz System</h1>
      <nav>
        <Link href="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
        <Link href="/login" style={{ margin: "0 10px", color: "white" }}>Login</Link>
        <Link href="/register" style={{ margin: "0 10px", color: "white" }}>Register</Link>
        <Link href="/dashboard" style={{ margin: "0 10px", color: "white" }}>Dashboard</Link>
      </nav>
    </header>
  );
}
