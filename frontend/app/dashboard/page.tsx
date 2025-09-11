"use client";
import Link from "next/link";

export default function Dashboard() {
  const teachers = [
    { id: 1, name: "Alice", subject: "Math" },
    { id: 2, name: "Bob", subject: "Science" },
  ];

  return (
    <div>
      <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "15px" }}>Dashboard</h2>
      <ul>
        {teachers.map((t) => (
          <li key={t.id} style={{ marginBottom: "10px" }}>
            <Link href={`/dashboard/${t.id}`} style={{ color: "#3aa40cff", textDecoration: "underline" }}>
              {t.name} ({t.subject})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
