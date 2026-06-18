import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Menu,
  Sparkles,
} from "lucide-react";

const profileImage = "/ChatGPT Image Dec 22, 2025, 12_45_55 PM.png";

const technologies = [
  { name: "JavaScript", label: "JS", color: "from-yellow-300 to-yellow-500" },
  { name: "Tailwind CSS", label: "~", color: "from-sky-300 to-cyan-500" },
  { name: "React", label: "R", color: "from-cyan-300 to-blue-500" },
  { name: "Next.js", label: "N", color: "from-white to-slate-400" },
  { name: "TypeScript", label: "TS", color: "from-blue-400 to-sky-600" },
  { name: "Node.js", label: "JS", color: "from-lime-400 to-green-600" },
  { name: "Express", label: "ex", color: "from-slate-200 to-slate-500" },
  { name: "MongoDB", label: "M", color: "from-emerald-300 to-green-700" },
  { name: "GitHub", label: "GH", color: "from-white to-slate-500" },
  { name: "Laravel", label: "L", color: "from-red-400 to-orange-600" },
  { name: "Bootstrap", label: "B", color: "from-violet-400 to-purple-700" },
  { name: "Firebase", label: "F", color: "from-orange-300 to-amber-600" },
  { name: "Vercel", label: "▲", color: "from-white to-slate-500" },
];

const technologyIcons = {
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  Vercel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
};

const invertedTechnologyIcons = new Set(["Next.js", "Express", "GitHub", "Vercel"]);

const projects = [
  {
    title: "Opal Fragrance",
    description:
      "A luxury perfume e-commerce website with premium product browsing, smooth shopping UX, and secure backend flows.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    live: "https://opel-fragrance.vercel.app/",
    github: "https://github.com/UmarShah-00/opel-fragrance.git",
    image: "/image1.png",
  },
  {
    title: "Voice App",
    description:
      "A text-to-speech app with English and Urdu support, Google OAuth, protected routes, and document export options.",
    tech: ["React", "TypeScript", "Vite", "Node.js", "MongoDB"],
    live: "https://voice-app-frontend.vercel.app",
    github: "https://github.com/UmarShah-00/voice-app-frontend.git",
    image: "/image2.png",
  },
  {
    title: "Resume Analyzer",
    description:
      "An AI resume analyzer with ATS scoring, role-based feedback, smart suggestions, and a detailed dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://ai-resume-analyzer-frontend-ten.vercel.app/",
    github: "https://github.com/UmarShah-00/ai-resume-analyzer-frontend.git",
    image: "/image3.png",
  },
  {
    title: "Noor Quran",
    description:
      "A MERN Quran platform with Surah-wise and Juz-wise reading plus Urdu and English translation support.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    live: "https://noor-quran-nine.vercel.app",
    github: "https://github.com/UmarShah-00/NoorQuran.git",
    image: "/image4.png",
  },
  {
    title: "CineVerse Movie App",
    description:
      "A Next.js movie app using TMDB API with trailers, ratings, search, and Hollywood, Bollywood, Punjabi browsing.",
    tech: ["Next.js", "TypeScript", "TMDB API", "React"],
    live: "https://movie-app-olive-beta.vercel.app",
    github: "https://github.com/UmarShah-00/movie-app.git",
    image: "/image5.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const particleStyles = Array.from({ length: 118 }, (_, index) => ({
  "--size": `${3 + (index % 6)}px`,
  "--x": `${Math.sin(index * 1.34) * (116 + (index % 8) * 9)}px`,
  "--y": `${Math.cos(index * 1.08) * (96 + (index % 7) * 8)}px`,
  "--delay": `${index * 0.045}s`,
  "--duration": `${3.8 + (index % 7) * 0.34}s`,
}));

function CursorTrail() {
  const cursorRef = useRef(null);
  const smokeRefs = useRef([]);

  useEffect(() => {
    const cursor = { x: -100, y: -100 };
    const target = { x: -100, y: -100 };
    const particles = Array.from({ length: 34 }, () => ({
      x: -100,
      y: -100,
      vx: 0,
      vy: 0,
      opacity: 0,
      scale: 1,
      angle: 0,
    }));
    const lastPoint = { x: -100, y: -100 };
    const direction = { x: 1, y: 0 };
    let particleIndex = 0;
    let lastMoveTime = 0;
    let hasPointerMoved = false;
    let animationFrame = 0;

    const handlePointerMove = (event) => {
      const deltaX = event.clientX - lastPoint.x;
      const deltaY = event.clientY - lastPoint.y;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance > 1) {
        direction.x = deltaX / distance;
        direction.y = deltaY / distance;
      }

      target.x = event.clientX;
      target.y = event.clientY;
      lastMoveTime = performance.now();
      hasPointerMoved = true;

      for (let count = 0; count < 3; count += 1) {
        const particle = particles[particleIndex];
        const sidePush = (count - 1) * 12;
        const speed = Math.min(5.4, 1.8 + distance * 0.035);

        particle.x = event.clientX + direction.x * (14 + count * 8) - direction.y * sidePush;
        particle.y = event.clientY + direction.y * (14 + count * 8) + direction.x * sidePush;
        particle.vx = direction.x * speed - direction.y * (count - 1) * 0.42;
        particle.vy = direction.y * speed + direction.x * (count - 1) * 0.42;
        particle.opacity = 0.78;
        particle.scale = 0.76 + count * 0.18;
        particle.angle = Math.atan2(direction.y, direction.x) * (180 / Math.PI);
        particleIndex = (particleIndex + 1) % particles.length;
      }

      lastPoint.x = event.clientX;
      lastPoint.y = event.clientY;
    };

    const renderTrail = () => {
      const now = performance.now();
      const movementOpacity = Math.max(0, 1 - (now - lastMoveTime) / 420);

      cursor.x += (target.x - cursor.x) * 0.34;
      cursor.y += (target.y - cursor.y) * 0.34;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`;
        cursorRef.current.style.opacity = hasPointerMoved ? "1" : "0";
      }

      particles.forEach((particle, index) => {
        const smoke = smokeRefs.current[index];
        if (!smoke) {
          return;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.92;
        particle.vy *= 0.92;
        particle.opacity *= 0.9;
        particle.scale += 0.012;

        smoke.style.opacity = `${Math.min(particle.opacity, movementOpacity * 0.85)}`;
        smoke.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0) translate(-50%, -50%) rotate(${particle.angle}deg) scale(${particle.scale})`;
      });

      animationFrame = requestAnimationFrame(renderTrail);
    };

    window.addEventListener("pointermove", handlePointerMove);
    animationFrame = requestAnimationFrame(renderTrail);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {Array.from({ length: 34 }).map((_, index) => (
        <span
          key={index}
          ref={(element) => {
            smokeRefs.current[index] = element;
          }}
          className="absolute left-0 top-0 h-16 w-48 rounded-full opacity-0 will-change-transform"
          style={{
            background:
              "radial-gradient(circle at 45% 50%, rgba(216, 180, 254, 0.72), rgba(147, 51, 234, 0.68) 36%, rgba(88, 28, 135, 0.48) 62%, transparent 80%)",
            filter: "blur(20px)",
            mixBlendMode: "screen",
          }}
        />
      ))}
      <span
        ref={cursorRef}
        className="absolute left-0 top-0 h-5 w-5 rounded-full border border-violet-100 bg-violet-500 opacity-0 shadow-[0_0_34px_rgba(126,34,206,1)] will-change-transform"
        style={{
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

function HeroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="relative mx-auto flex aspect-square w-full max-w-[540px] items-center justify-center"
    >
      <div className="absolute inset-12 rounded-full bg-purple-700/15 blur-3xl" />
      <div className="hero-particle-field">
        {particleStyles.map((style, index) => (
          <span key={index} style={style} />
        ))}
      </div>
      <div className="hero-crystal">
        <span className="hero-crystal-face face-one" />
        <span className="hero-crystal-face face-two" />
        <span className="hero-crystal-face face-three" />
        <span className="hero-crystal-face face-four" />
      </div>
    </motion.div>
  );
}

function LocalTime() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return <span>{time.toLowerCase()}</span>;
}

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <style>{`
        @media (pointer: fine) {
          body,
          a,
          button {
            cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Ccircle cx='14' cy='14' r='8' fill='%237e22ce' fill-opacity='0.95'/%3E%3Ccircle cx='14' cy='14' r='10' fill='none' stroke='%23ddd6fe' stroke-width='1.5'/%3E%3C/svg%3E") 14 14, auto;
          }
        }

        .hero-particle-field {
          position: absolute;
          inset: 18px;
          transform-style: preserve-3d;
          animation: fieldSpin 12s linear infinite;
        }

        .hero-particle-field span {
          position: absolute;
          left: 50%;
          top: 50%;
          width: var(--size);
          height: var(--size);
          border-radius: 999px;
          background: radial-gradient(circle, #f5d0fe 0%, #a855f7 38%, #4c1d95 100%);
          box-shadow: 0 0 18px rgba(168, 85, 247, 0.95), 0 0 36px rgba(88, 28, 135, 0.62);
          transform: translate3d(var(--x), var(--y), 0);
          animation: particleFloat var(--duration) ease-in-out infinite alternate;
          animation-delay: var(--delay);
        }

        .hero-crystal {
          position: relative;
          width: min(62vw, 318px);
          height: min(62vw, 318px);
          transform-style: preserve-3d;
          animation: crystalMove 6.4s ease-in-out infinite;
          filter: drop-shadow(0 0 42px rgba(168, 85, 247, 0.88));
        }

        .hero-crystal::before,
        .hero-crystal::after,
        .hero-crystal-face {
          position: absolute;
          inset: 28px;
          content: "";
          border: 1px solid rgba(243, 232, 255, 0.58);
          background:
            linear-gradient(128deg, rgba(250, 245, 255, 0.78), transparent 31%),
            linear-gradient(42deg, rgba(126, 34, 206, 0.82), rgba(216, 180, 254, 0.42) 42%, rgba(91, 33, 182, 0.78)),
            radial-gradient(circle at 34% 24%, rgba(255, 255, 255, 0.9), transparent 22%);
          clip-path: polygon(50% 0%, 92% 16%, 100% 55%, 77% 92%, 31% 100%, 3% 61%, 12% 20%);
          backdrop-filter: blur(5px);
          box-shadow:
            inset 28px 14px 52px rgba(255, 255, 255, 0.2),
            inset -24px -28px 54px rgba(49, 12, 100, 0.72),
            0 0 48px rgba(168, 85, 247, 0.62);
        }

        .hero-crystal::before {
          transform: rotate(12deg) scale(1.04);
        }

        .hero-crystal::after {
          opacity: 0.7;
          transform: rotate(-18deg) scale(0.8) translateZ(34px);
        }

        .hero-crystal-face {
          opacity: 0.56;
        }

        .face-one {
          transform: rotate(38deg) scale(0.72) translateZ(52px);
        }

        .face-two {
          transform: rotate(-43deg) scale(0.64) translateZ(-35px);
        }

        .face-three {
          transform: rotate(84deg) scale(0.5) translateZ(58px);
        }

        .face-four {
          transform: rotate(-82deg) scale(0.48) translateZ(-52px);
        }

        @keyframes fieldSpin {
          from {
            transform: rotate(0deg) rotateX(0deg);
          }

          to {
            transform: rotate(360deg) rotateX(22deg);
          }
        }

        @keyframes particleFloat {
          from {
            margin-left: -12px;
            margin-top: -12px;
            opacity: 0.62;
          }

          to {
            margin-left: 12px;
            margin-top: 12px;
            opacity: 1;
          }
        }

        @keyframes crystalMove {
          0%, 100% {
            transform: rotateX(55deg) rotateY(-12deg) rotateZ(19deg) scale(0.94);
          }

          50% {
            transform: rotateX(45deg) rotateY(172deg) rotateZ(-10deg) scale(1.05);
          }
        }
      `}</style>
      <CursorTrail />
      <div className="pointer-events-none fixed inset-0 z-0 bg-black" />

      <section className="relative z-10 flex min-h-screen flex-col border-b border-purple-500/30">
        <nav className="mx-auto mt-5 flex w-[88%] max-w-5xl items-center justify-between rounded-full border border-purple-700/50 bg-black/55 px-6 py-3 shadow-[0_0_36px_rgba(126,34,206,0.26)] backdrop-blur">
          <a href="#home" className="flex items-center gap-4">
            <img
              src={profileImage}
              alt="Syed Umar"
              className="h-16 w-16 rounded-full border border-purple-400/60 object-cover object-top"
            />
            <span className="text-2xl font-bold text-violet-100 drop-shadow-[0_0_10px_rgba(216,180,254,0.95)] md:text-3xl">
              Syed Umar
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a className="transition hover:text-purple-300" href="#about">
              About
            </a>
            <a className="transition hover:text-purple-300" href="#tech">
              Technologies
            </a>
            <a className="transition hover:text-purple-300" href="#projects">
              Projects
            </a>
          </div>
          <Menu className="text-purple-300 md:hidden" />
        </nav>

        <div
          id="home"
          className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/35 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
              <Sparkles size={16} />
              Full Stack Developer
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-normal md:text-7xl">
              Creative Web Development Wizard
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
              Helping brands and businesses build pixel-perfect front-end
              experiences with powerful back-end functionality.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#projects"
                className="rounded-md border border-purple-500 bg-purple-500/20 px-6 py-3 font-semibold text-white transition hover:bg-purple-500/35"
              >
                View Projects
              </a>
              <a
                href="mailto:syedumar@example.com"
                className="rounded-md border border-purple-500 px-6 py-3 font-semibold text-purple-200 transition hover:bg-purple-500/15"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <HeroAnimation />
        </div>
      </section>

      <section id="about" className="relative z-10 border-b border-purple-500/20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-6xl px-5 md:px-8"
        >
          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            About Me
          </h2>
          <div className="mt-9 space-y-7 text-lg leading-9 text-slate-400 md:text-xl">
            <p>
              I&apos;m a passionate Full Stack Developer with expertise in modern
              web technologies. My journey in web development has equipped me
              with a strong foundation in both frontend and backend development,
              along with different AI tools, allowing me to create seamless,
              user-centric applications.
            </p>
            <p>
              With a keen eye for design and a love for clean code, I specialize
              in building responsive, performant applications that deliver
              exceptional user experiences. My approach combines technical
              expertise with creative problem-solving to bring ideas to life.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="tech" className="relative z-10 border-b border-purple-500/20 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-black md:text-4xl"
          >
            Technologies I Work With
          </motion.h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {technologies
              .filter((tech) => tech.name !== "Firebase")
              .map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group flex min-h-40 flex-col items-center justify-center rounded-lg border border-purple-800/55 bg-black/45 p-6 text-center shadow-[0_0_24px_rgba(88,28,135,0.12)] transition hover:-translate-y-1 hover:border-purple-400/70 hover:shadow-[0_0_28px_rgba(168,85,247,0.24)]"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center drop-shadow-[0_0_18px_rgba(168,85,247,0.7)] transition duration-700 ease-out group-hover:rotate-[360deg]">
                  <img
                    src={technologyIcons[tech.name]}
                    alt={`${tech.name} icon`}
                    className={`h-16 w-16 object-contain ${
                      invertedTechnologyIcons.has(tech.name)
                        ? "brightness-0 invert"
                        : ""
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-violet-100">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative isolate z-20 overflow-hidden bg-black py-20">
        <div className="absolute inset-0 z-0 bg-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
              Selected Work
            </p>
            <h2 className="text-4xl font-black md:text-6xl">My Projects</h2>
          </motion.div>

          <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-24">
            {projects.map((project, index) => {
              const isPerfumeProject = index === 0;
              const isVoiceProject = index === 1;
              const isResumeProject = index === 2;
              const isNoorProject = index === 3;
              const isCineVerseProject = index === 4;

              return (
                <motion.article
                  key={project.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -90 : 90,
                    y: 18,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group overflow-hidden rounded-lg border bg-black shadow-[0_18px_55px_-28px_rgba(0,0,0,0.95)] ${
                    isPerfumeProject
                      ? "border-purple-900/45 lg:col-span-2 lg:grid lg:grid-cols-[1.35fr_0.9fr] lg:items-center"
                      : isVoiceProject
                        ? "border-purple-900/45 lg:col-span-2 lg:grid lg:grid-cols-[0.9fr_1.35fr] lg:items-center"
                        : isResumeProject
                          ? "border-purple-900/45 lg:col-span-2 lg:grid lg:grid-cols-[1.35fr_0.9fr] lg:items-center"
                          : isNoorProject
                            ? "border-purple-900/45 lg:col-span-2 lg:grid lg:grid-cols-[0.9fr_1.35fr] lg:items-center"
                            : isCineVerseProject
                              ? "border-purple-900/45 lg:col-span-2 lg:grid lg:grid-cols-[1.35fr_0.9fr] lg:items-center"
                      : "border-purple-900/55"
                  }`}
                >
                  {isPerfumeProject ? (
                    <>
                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-950/70 lg:aspect-auto lg:h-full lg:min-h-[360px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15" />
                        <span className="absolute left-5 top-5 rounded-full border border-purple-300/45 bg-black/55 px-3 py-1 text-xs font-bold text-purple-100">
                          Project {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                        <h3 className="text-3xl font-black leading-tight text-violet-100 md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                          A luxury perfume e-commerce experience with premium
                          product browsing, smooth shopping flow, secure checkout,
                          and a polished dark interface for signature fragrances.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={`${project.title}-${tech}`}
                              className="rounded-full border border-purple-500/35 bg-purple-500/10 px-3 py-1 text-sm text-purple-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-8 flex flex-wrap gap-5">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-purple-300 transition hover:text-purple-200"
                          >
                            Wanna Have A Look <ExternalLink size={18} />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-slate-300 transition hover:text-white"
                          >
                            Code <Github size={18} />
                          </a>
                        </div>
                      </div>
                    </>
                  ) : isVoiceProject ? (
                    <>
                      <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                        <h3 className="text-3xl font-black leading-tight text-violet-100 md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                          A clean text-to-speech dashboard with English and Urdu
                          support, Google OAuth, protected routes, and document
                          export options for everyday voice workflows.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={`${project.title}-${tech}`}
                              className="rounded-full border border-purple-500/35 bg-purple-500/10 px-3 py-1 text-sm text-purple-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-8 flex flex-wrap gap-5">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-purple-300 transition hover:text-purple-200"
                          >
                            Wanna Have A Look <ExternalLink size={18} />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-slate-300 transition hover:text-white"
                          >
                            Code <Github size={18} />
                          </a>
                        </div>
                      </div>

                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-950/70 lg:aspect-auto lg:h-full lg:min-h-[360px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-black/15" />
                        <span className="absolute right-5 top-5 rounded-full border border-purple-300/45 bg-black/55 px-3 py-1 text-xs font-bold text-purple-100">
                          Project {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </>
                  ) : isResumeProject ? (
                    <>
                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-950/70 lg:aspect-auto lg:h-full lg:min-h-[360px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15" />
                        <span className="absolute left-5 top-5 rounded-full border border-purple-300/45 bg-black/55 px-3 py-1 text-xs font-bold text-purple-100">
                          Project {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                        <h3 className="text-3xl font-black leading-tight text-violet-100 md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                          An AI resume analyzer with ATS scoring, role-based
                          feedback, smart suggestions, and a detailed dashboard
                          to help candidates improve applications faster.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={`${project.title}-${tech}`}
                              className="rounded-full border border-purple-500/35 bg-purple-500/10 px-3 py-1 text-sm text-purple-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-8 flex flex-wrap gap-5">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-purple-300 transition hover:text-purple-200"
                          >
                            Wanna Have A Look <ExternalLink size={18} />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-slate-300 transition hover:text-white"
                          >
                            Code <Github size={18} />
                          </a>
                        </div>
                      </div>
                    </>
                  ) : isNoorProject ? (
                    <>
                      <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                        <h3 className="text-3xl font-black leading-tight text-violet-100 md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                          A MERN Quran platform with Surah-wise and Juz-wise
                          reading, plus Urdu and English translations in a calm,
                          responsive reading experience.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={`${project.title}-${tech}`}
                              className="rounded-full border border-purple-500/35 bg-purple-500/10 px-3 py-1 text-sm text-purple-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-8 flex flex-wrap gap-5">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-purple-300 transition hover:text-purple-200"
                          >
                            Wanna Have A Look <ExternalLink size={18} />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-slate-300 transition hover:text-white"
                          >
                            Code <Github size={18} />
                          </a>
                        </div>
                      </div>

                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-950/70 lg:aspect-auto lg:h-full lg:min-h-[360px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-black/15" />
                        <span className="absolute right-5 top-5 rounded-full border border-purple-300/45 bg-black/55 px-3 py-1 text-xs font-bold text-purple-100">
                          Project {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </>
                  ) : isCineVerseProject ? (
                    <>
                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-950/70 lg:aspect-auto lg:h-full lg:min-h-[360px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15" />
                        <span className="absolute left-5 top-5 rounded-full border border-purple-300/45 bg-black/55 px-3 py-1 text-xs font-bold text-purple-100">
                          Project {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                        <h3 className="text-3xl font-black leading-tight text-violet-100 md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                          A Next.js movie app using TMDB API with trailers,
                          ratings, search, and Hollywood, Bollywood, Punjabi
                          browsing in a cinematic interface.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={`${project.title}-${tech}`}
                              className="rounded-full border border-purple-500/35 bg-purple-500/10 px-3 py-1 text-sm text-purple-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-8 flex flex-wrap gap-5">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-purple-300 transition hover:text-purple-200"
                          >
                            Wanna Have A Look <ExternalLink size={18} />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-slate-300 transition hover:text-white"
                          >
                            Code <Github size={18} />
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                        <span className="absolute left-4 top-4 rounded-full border border-purple-300/45 bg-black/55 px-3 py-1 text-xs font-bold text-purple-100">
                          Project {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="p-6 md:p-7">
                        <h3 className="text-2xl font-black text-white">
                          {project.title}
                        </h3>
                        <p className="mt-3 leading-7 text-slate-400">
                          {project.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={`${project.title}-${tech}`}
                              className="rounded-full border border-purple-500/35 bg-purple-500/10 px-3 py-1 text-sm text-purple-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-7 flex flex-wrap gap-3">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-md bg-purple-500 px-5 py-2.5 font-semibold text-white transition hover:bg-purple-400"
                          >
                            Live <ExternalLink size={18} />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-md border border-purple-500/55 px-5 py-2.5 font-semibold text-purple-100 transition hover:bg-purple-500/15"
                          >
                            Code <Github size={18} />
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-purple-500/20 py-20 md:py-28">
        <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/35 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="space-y-7">
            <p className="text-sm text-slate-300">From Pakistan with Passion</p>
            <div>
              <p className="text-sm text-slate-400">Local Time</p>
              <p className="mt-2 text-4xl font-light text-slate-300 md:text-5xl">
                <LocalTime />
              </p>
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <p>Got a question?</p>
              <p>
                Email to{" "}
                <a
                  href="mailto:syedumar.mern@gmail.com"
                  className="font-bold text-white transition hover:text-purple-300"
                >
                  syedumar.mern@gmail.com
                </a>
              </p>
              <p>
                Chat via{" "}
                <a
                  href="https://wa.me/923326104679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white transition hover:text-purple-300"
                >
                  Whatsapp
                </a>
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg lg:mx-0">
            <h2 className="mb-10 text-4xl font-light leading-tight text-white md:text-5xl">
              Your friendly neighborhood Web development expert
            </h2>
            <a
              href={profileImage}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-purple-500/25 bg-black/40 shadow-[0_0_34px_rgba(126,34,206,0.18)]"
            >
              <img
                src={profileImage}
                alt="SYED UMAR NAZIR"
                className="h-[360px] w-full object-cover object-top transition duration-700 hover:scale-105"
              />
            </a>
            <div className="mt-7">
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                SYED UMAR NAZIR
              </h3>
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-slate-300">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                Available for Hire
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
