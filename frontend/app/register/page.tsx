"use client";
 
import { useState } from "react";
import axios from "axios";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
 
export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    gender: "",
    phoneNumber: "",
  });
 
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState("");
 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
 
    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z ]+$/.test(form.name)) {
      newErrors.name = "Name must contain only letters.";
    }
 
    if (!form.age) {
      newErrors.age = "Age is required.";
    } else if (!/^[0-9]+$/.test(form.age)) {
      newErrors.age = "Age must be a number.";
    } else if (parseInt(form.age) < 18) {
      newErrors.age = "You must be at least 18 years old.";
    }
 
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }
 
    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
 
    if (!form.gender) {
      newErrors.gender = "Gender is required.";
    } else if (
      !["male", "female", "other"].includes(form.gender.toLowerCase())
    ) {
      newErrors.gender = "Gender must be Male, Female, or Other.";
    }
 
    if (!form.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^(?:\+88|88)?(01[3-9]\d{8})$/.test(form.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid Bangladeshi phone number.";
    }
 
    return newErrors;
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    const newErrors = validate();
 
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
 
    try {
      await axios.post("http://localhost:8080/admin/register", form);
      setSuccess(" Registration successful!");
      setForm({
        name: "",
        age: "",
        email: "",
        password: "",
        gender: "",
        phoneNumber: "",
      });
      setErrors({});
    } catch (error) {
      setSuccess(" Error: Could not register.");
    }
  };
 
  return (
<div style={{ maxWidth: "400px", margin: "50px auto" }}>
<h2 style={{ textAlign: "center" }}>Register</h2>
<form onSubmit={handleSubmit}>
<FormInput
          label="Name"
          name="name"
          value={form.name}
          error={errors.name}
          onChange={handleChange}
        />
<FormInput
          label="Age"
          name="age"
          value={form.age}
          error={errors.age}
          onChange={handleChange}
        />
<FormInput
          label="Email"
          name="email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={handleChange}
        />
<FormInput
          label="Password"
          name="password"
          type="password"
          value={form.password}
          error={errors.password}
          onChange={handleChange}
        />
<FormInput
          label="Gender"
          name="gender"
          type="select"
          value={form.gender}
          error={errors.gender}
          options={["Male", "Female", "Other"]}
          onChange={handleChange}
        />
<FormInput
          label="Phone Number"
          name="phoneNumber"
          value={form.phoneNumber}
          error={errors.phoneNumber}
          onChange={handleChange}
        />
 
        <Button text="Register" type="submit" variant="primary" />
</form>
      {success && (
<p
          style={{
            color: success.startsWith("❌") ? "red" : "green",
            marginTop: "10px",
          }}
>
          {success}
</p>
      )}
</div>
  );
}