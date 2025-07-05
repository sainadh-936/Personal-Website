import Head from "next/head";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";

type Project = {
  title: string;
  role: string;
  duration: string;
  techStack: string[];
  description: string[];
};

const projects: Project[] = [
  {
    title: "Variant Curation Service",
    role: "SDE, Strand Life Sciences",
    duration: "Feb 2024 – Present",
    techStack: ["Next.js", "MUI", "Node.js", "MongoDB"],
    description: [
      "Developed the VIQ Scoring Wizard to automate variant classification using SOP guidelines.",
      "Built a custom JSON rule-based curation engine to assess variant pathogenicity.",
      "Designed dynamic UI components, modular backend APIs, and schema migrations for evolving rules.",
      "Optimized MongoDB indexing to support real-time variant retrieval and penetrance modeling.",
    ],
  },
  {
    title: "Disease Allele Frequency",
    role: "SDE, Strand Life Sciences",
    duration: "Aug 2023 – Feb 2024",
    techStack: ["Next.js", "MUI", "Node.js", "AWS Athena"],
    description: [
      "Created an automated DAF platform to analyze transcript-level variant frequencies.",
      "Integrated gnomAD, ClinVar, and internal databases for large-scale data analysis.",
      "Engineered scalable backend APIs and parsing logic for ClinVar and gnomAD VEP annotations.",
      "Improved performance with variant filtering pipelines for accurate DAF calculations.",
    ],
  },
  {
    title: "Genome Sequencing & Color Blindness Analysis",
    role: "SDE, Strand Life Sciences",
    duration: "Jul – Aug 2023",
    techStack: ["Python", "Genomics", "BWT", "Suffix Trees"],
    description: [
      "Implemented custom DNA read alignment algorithms using Suffix Trees and BWT.",
      "Reduced alignment time per read to under 1 second using optimized data structures.",
      "Analyzed over 3 million reads to identify genetic anomalies related to color blindness.",
      "Simulated theoretical mutation mosaics and supported X-linked inheritance theories.",
    ],
  },
  {
    title: "Article Similarity Index",
    role: "Intern, Strand Life Sciences",
    duration: "May – Jul 2022",
    techStack: ["React", "Redux", "MUI", "Flask", "NetworkX"],
    description: [
      "Built a search platform to return top 20 articles ranked by phenotype relevance.",
      "Improved similarity scoring logic inspired by PMC6128307 for higher accuracy.",
      "Optimized caching and graph traversal on large biomedical datasets.",
      "Developed a responsive UI with multi-phenotype support and relevance-based ranking.",
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-main-gradient">
      <Head>
        <title>Projects | Sainadh Jammigumpala</title>
        <meta
          name="description"
          content="Projects I've worked on at Strand Life Sciences and during internships."
        />
      </Head>
      <main
        style={{
          margin: "0 auto",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 className="text-4xl font-bold mb-10 text-black w-full text-center">
          Projects
        </h1>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <section
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <h2 className="text-2xl font-semibold text-black mb-1 flex-1">
                {project.title}
              </h2>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{project.role}</span>
                <span className="mx-2">|</span>
                <span>{project.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3 text-black">
                {project.techStack.map((tech) => (
                  <p
                    key={tech}
                    className="bg-blue-50 text-black px-2 py-1 rounded-full text-xs font-medium border border-blue-100"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <Link
          href="/"
          className="text-2xl flex items-center justify-center gap-2 mt-10 text-black w-full"
          aria-label="Go back to home"
        >
          <ArrowLeftOutlined style={{ fontSize: "2rem" }} />
          <p className="text-sm">Go back</p>
        </Link>
      </main>
    </div>
  );
}
