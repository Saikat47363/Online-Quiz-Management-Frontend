"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
 
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
 
export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();
 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
 
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }
 
    if (!form.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
 
    try {
      const res = await axios.post("http://localhost:8080/admin/login", {
        email: form.email,
        password: form.password,
      });
 
      console.log(" Login Success:", res.data);
      localStorage.setItem("token", res.data.access_token);
 
      alert("Login successful!");
      router.push("/dashboard");
    } catch (err) {
      const error = err as AxiosError<any>;
      const errorData = error.response?.data;
 
      console.error(" Login Error:", errorData || error.message);
      alert(errorData?.message || "Login failed. Please check your credentials.");
    }
  };
 
  return (
<div style={{ maxWidth: "400px", margin: "auto" }}>
<h2
        style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px" }}
>
        Login
</h2>
<form onSubmit={handleSubmit}>
<FormInput
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
 
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
 
        <Button text="Login" type="submit" variant="primary" />
</form>
</div>
  );
}