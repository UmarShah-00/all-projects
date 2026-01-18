import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Opel Fragrance",
    description:
      "Opel Fragrance is a luxury perfume e-commerce website showcasing premium scents with elegant UI, secure backend, and seamless shopping experience.",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Stripe",
      "Tailwind CSS",
    ],
    live: "https://opel-fragrance.vercel.app/",
    github: "https://github.com/UmarShah-00/opel-fragrance.git",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
  },
  {
    title: "Voice App (Text to Speech)",
    description:
      "A modern Text-to-Speech web application with English & Urdu support, Google OAuth authentication, protected routes, and text export features (TXT, PDF, DOCX). Built with full MERN stack and deployed on Railway & Vercel.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Google OAuth",
      "JWT",
      "Tailwind CSS",
      "Framer Motion",
    ],
    live: "https://voice-app-frontend.vercel.app",
    github: "https://github.com/UmarShah-00/voice-app-frontend.git",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  },
  {
    title: "Resume Analyzer",
    description:
      "Upload resume, get ATS role-based analysis, score, smart suggestions, and a detailed dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://ai-resume-analyzer-frontend-ten.vercel.app/",
    github: "https://github.com/UmarShah-00/ai-resume-analyzer-frontend.git",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  // ✅ Movie App Project Added
  {
    title: "CineVerse Movie App",
    description:
      "A Next.js movie app using TMDB API. Browse Hollywood, Bollywood & Punjabi movies with trailers, ratings, and search functionality. Full responsive UI for web and mobile.",
    tech: ["Next.js", "TypeScript", "TMDB API", "React", "CSS Modules", "Framer Motion"],
    live: "https://movie-app-olive-beta.vercel.app",
    github: "https://github.com/UmarShah-00/movie-app.git",
    image: "/hero.png", // Hero image from your project
  },
];

export default function ProjectShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-14">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-[#C9A24D]">Showcase</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A collection of my featured full-stack and frontend projects —
            crafted with clean code, modern UI, and real-world functionality.
          </p>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid md:grid-cols-2 gap-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>

                  <p className="text-gray-400 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-[#C9A24D]/10 text-[#C9A24D]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#C9A24D] text-black font-medium hover:opacity-90 transition"
                  >
                    Live <ExternalLink size={18} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
                  >
                    Code <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
