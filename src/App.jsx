import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Resume Analyzer",
    description:
      "Upload resume, get ATS Role-based analysis, score, suggestions and dashboard.",
    tech: ["React", "Node", "MongoDB"],
    live: "https://ai-resume-analyzer-frontend-ten.vercel.app/",
    github: "https://github.com/UmarShah-00/ai-resume-analyzer-frontend.git",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            My Project Showcase
          </h1>
          <p className="text-gray-400 max-w-2xl">
            All my practice and deployed projects in one place — clean, organized
            and easy to remember.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group grid md:grid-cols-2 gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-indigo-500/10 text-indigo-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition"
                  >
                    Live <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
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
