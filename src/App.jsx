import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Opel Fragrance",
    description:
      "Opel Fragrance is a luxury perfume e-commerce website with premium product browsing, secure backend flows, and smooth shopping UX.",
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
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Voice App (Text to Speech)",
    description:
      "A modern text-to-speech app with English and Urdu support, Google OAuth auth, protected routes, and TXT/PDF/DOCX export options.",
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
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Resume Analyzer",
    description:
      "Upload resume, get ATS role-based analysis, score, smart suggestions, and a detailed dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://ai-resume-analyzer-frontend-ten.vercel.app/",
    github: "https://github.com/UmarShah-00/ai-resume-analyzer-frontend.git",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Noor Quran",
    description:
      "A complete MERN stack Quran platform with Surah-wise and Juz (Para)-wise reading, plus Urdu and English translation support.",
    tech: [
      "MERN Stack",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    live: "https://noor-quran-nine.vercel.app",
    github: "https://github.com/UmarShah-00/NoorQuran.git",
    image:"heros.png"  },
  {
    title: "CineVerse Movie App",
    description:
      "A Next.js movie app using TMDB API. Browse Hollywood, Bollywood and Punjabi movies with trailers, ratings, and search.",
    tech: [
      "Next.js",
      "TypeScript",
      "TMDB API",
      "React",
      "CSS Modules",
      "Framer Motion",
    ],
    live: "https://movie-app-olive-beta.vercel.app",
    github: "https://github.com/UmarShah-00/movie-app.git",
    image: "/hero.png",
  },
];

export default function ProjectShowcase() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-12 md:mb-14"
        >
          <p className="inline-flex rounded-full border border-amber-300/35 bg-amber-300/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-amber-200">
            Portfolio Highlights
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Project <span className="text-amber-300">Showcase</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            A collection of featured full-stack and frontend builds with clean
            UI, scalable architecture, and real user-focused functionality.
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group grid overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/55 shadow-[0_18px_55px_-24px_rgba(0,0,0,0.9)] backdrop-blur md:grid-cols-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 md:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-xs font-semibold text-white">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <h2 className="mb-3 text-2xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="mb-5 leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={`${project.title}-${tech}`}
                        className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-sm text-amber-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-300 px-5 py-2 font-medium text-slate-900 transition hover:bg-amber-200"
                  >
                    Live <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800 px-5 py-2 text-slate-100 transition hover:bg-slate-700"
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
