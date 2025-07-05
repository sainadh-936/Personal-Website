import React from "react";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function BlogPage() {
  return (
    <div className="bg-main-gradient flex flex-col items-center min-h-screen text-black p-10">
      <Link
        href="/"
        className="text-2xl flex items-center gap-2 mb-8 text-black"
      >
        <ArrowLeftOutlined style={{ fontSize: "2rem" }} />
        <p className="text-sm">Go back</p>
      </Link>
      <h1 className="text-3xl font-bold">Blog - Coming soon...</h1>
    </div>
  );
}
