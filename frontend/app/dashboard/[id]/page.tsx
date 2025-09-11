"use client";
import { useParams } from "next/navigation";

export default function TeacherDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "15px" }}>Teacher Details</h2>
      <p>Dynamic Route Example: Teacher ID = {id}</p>
    </div>
  );
}
