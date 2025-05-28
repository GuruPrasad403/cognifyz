import React, { useState } from "react";
import type { JSX,FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function Form(): JSX.Element {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    course: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    course: "",
  });

  const validate = (): boolean => {
    const newErrors = {
      name: formData.name.trim() === "" ? "Name is required" : "",
      username: /^[a-zA-Z0-9_]{4,15}$/.test(formData.username)
        ? ""
        : "4-15 characters, only letters, numbers, and underscores",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "Invalid email format",
      password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(formData.password)
        ? ""
        : "Must be 8+ chars, 1 uppercase, 1 number, 1 special char",
      course: formData.course.trim() === "" ? "Course is required" : "",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
     navigate("/submit")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col px-10 py-5 shadow-2xl gap-5 w-[400px]">
          <h1 className="text-4xl uppercase py-4 font-semibold text-left">
            Registration
          </h1>

          {["name", "username", "email", "password", "course"].map((field) => (
            <div key={field} className="flex flex-col gap-1">
              <label htmlFor={field} className="text-xl font-semibold capitalize">
                {field === "course" ? "Course" : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                id={field}
                className={`border outline-none px-2 py-1 ${
                  errors[field as keyof typeof errors] ? "border-red-500" : "border-gray-300"
                }`}
                placeholder={`Enter your ${field}`}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
              />
              {errors[field as keyof typeof errors] && (
                <span className="text-sm text-red-500">
                  {errors[field as keyof typeof errors]}
                </span>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="bg-black text-white text-center text-xl py-2 hover:bg-gray-800"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default React.memo(Form);
