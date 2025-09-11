"use client";
 
import React from "react";
 
type Props = {
  label: string;
  type?: string; // text, email, password, number, select
  name: string;
  value: string;
  error?: string;
  options?: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};
 
export default function FormInput({
  label,
  type = "text",
  name,
  value,
  error,
  options,
  onChange,
}: Props) {
  return (
<div style={{ marginBottom: "15px" }}>
<label
        style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}
>
        {label}
</label>
 
      {type === "select" ? (
<select
          name={name}
          value={value}
          onChange={onChange}
          style={{
            padding: "8px",
            width: "100%",
            border: error ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
>
<option value="">-- Select {label} --</option>
          {options?.map((opt) => (
<option key={opt} value={opt.toLowerCase()}>
              {opt}
</option>
          ))}
</select>
      ) : (
<input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          style={{
            padding: "8px",
            width: "100%",
            border: error ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      )}
 
      {error && (
<span style={{ color: "red", fontSize: "12px" }}>{error}</span>
      )}
</div>
  );
}