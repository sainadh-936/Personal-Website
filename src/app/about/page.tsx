import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Head from "next/head";

export default function AboutPage() {
  return (
    <div className="bg-main-gradient flex flex-col items-center justify-center min-h-screen relative text-black">
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <Link
          href="/"
          className="text-2xl flex items-center gap-2 mb-8"
          aria-label="Go back to home"
        >
          <ArrowLeftOutlined style={{ fontSize: "2rem" }} />
          <p className="text-sm">Go back</p>
        </Link>
        <Head>
          <title>About Me | Sainadh Jammigumpala</title>
          <meta
            name="description"
            content="Software Engineer focused on full-stack development, bioinformatics, and scalable systems."
          />
        </Head>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About Me</h1>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          I&apos;m <strong>Sainadh Jammigumpala</strong>, a full-stack software
          engineer with a strong foundation in computer science and a passion
          for solving impactful problems at the intersection of technology and
          biology. I graduated from the{" "}
          <strong>National Institute of Technology, Calicut</strong> with a
          BTech in Computer Science and Engineering, where I maintained a CGPA
          of 8.54 and focused on core subjects like Data Structures, Algorithms,
          Operating Systems, and Databases.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "1rem" }}>
          Currently, I work at <strong>Strand Life Sciences</strong> as a
          Software Development Engineer. My experience spans across building
          rule-based variant curation systems, automating disease allele
          frequency calculations, and designing performant bioinformatics tools
          that operate on genomic data at scale. I&apos;ve led initiatives
          involving <strong>Next.js, Node.js, MongoDB, AWS Athena</strong>, and
          bioinformatics algorithms such as <strong>BWT</strong> and{" "}
          <strong>Suffix Trees</strong>.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "1rem" }}>
          I enjoy architecting scalable systems and crafting intuitive UIs.
          I&apos;m also actively exploring advances in genomics, healthcare, and
          AI. When I&apos;m not coding, you&apos;ll find me solving algorithmic
          problems — I&apos;ve solved over 600 problems across platforms like{" "}
          <strong>Leetcode</strong>, <strong>Codeforces</strong>, and{" "}
          <strong>GFG</strong>. I&apos;m also a part of the{" "}
          <strong>Engineering Leadership Program</strong>, where I lead a team
          of developers to build high-impact software solutions.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "1rem" }}>
          I&apos;m always looking for challenging opportunities to grow as an
          engineer and contribute to real-world problem-solving.
        </p>
      </main>
    </div>
  );
}
