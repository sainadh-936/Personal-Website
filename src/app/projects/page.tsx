import React from "react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Projects - Coming soon...</h1>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Go Back
      </Link>
    </div>
  );
}
