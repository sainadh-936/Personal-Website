// This is the backend (Nodemailer) contact form version. For the frontend-only (mailto) version, see contact-mailto/page.tsx.
"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";

const backgroundClass = `bg-gradient-to-br from-gray-100 via-white to-gray-200`;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setError("Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong.");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div
      className={`${backgroundClass} flex flex-col items-center justify-center min-h-screen p-10 text-black`}
    >
      <div className="flex flex-row items-center w-full max-w-xl mt-10 mb-8">
        <Link
          href="/"
          className="text-2xl flex items-center gap-2"
          aria-label="Go back to home"
        >
          <ArrowLeftOutlined style={{ fontSize: "2rem" }} />
          <p className="text-sm">Go back</p>
        </Link>
        <h1 className="text-3xl font-bold ml-30">Contact Me</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-lg w-full max-w-xl animate-fade-in"
      >
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black transition"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black transition"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black transition"
            id="message"
            name="message"
            rows={8}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-lg text-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-60"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="mt-4 text-green-600 animate-fade-in">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 animate-fade-in">{error}</p>
        )}
      </form>
    </div>
  );
}

// Add minimal fade-in animation
// In your globals.css or a component style:
// .animate-fade-in { animation: fadeIn 0.5s ease; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
