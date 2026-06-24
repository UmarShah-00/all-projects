import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Menu,
  Sparkles,
} from "lucide-react";

const profileImage = "hf.png";

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
    title: "Hospital Management System",
    description:
      "A full JavaScript hospital management system covering OPD, IPD, laboratory, pharmacy, X-ray, ultrasound, store and inventory, billing, reports, payroll, attendance, and role-based section permissions.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "JavaScript", "JWT"],
    live: "https://hmsuvs.com/",
    github: "https://github.com/adziyodevz/HMS-frontend",
    image: "/image6.png",
    credentials: [
      { label: "Username", value: "superadmin" },
      { label: "Password", value: "superadmin123" },
    ],
  },
  {
    title: "Alkaram Plast ERP",
    description:
      "A MERN ERP system for Alkaram Plast with admin login, business operations management, organized records, and a responsive dashboard experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS"],
    live: "https://alkaramplast.vercel.app/login",
    github: "https://github.com/UmarShah-00/alkaramplast",
    image: "/image7.png",
    credentials: [
      { label: "Username", value: "admin@erp.com" },
      { label: "Password", value: "admin@erp.com" },
    ],
  },
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

const cursorSmokePuffs = Array.from({ length: 18 });

const heroCodeLines = ["78%", "54%", "88%", "42%", "68%", "59%"];

function CursorTrail() {
  const cursorRef = useRef(null);
  const haloRef = useRef(null);
  const smokeRefs = useRef([]);

  useEffect(() => {
    const target = { x: -100, y: -100 };
    const lastPoint = { x: -100, y: -100 };
    let hasPointerMoved = false;
    let animationFrame = 0;
    let isFrameQueued = false;
    let puffIndex = 0;
    let lastPuffTime = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    if (prefersReducedMotion.matches || coarsePointer.matches) {
      return undefined;
    }

    const renderCursor = () => {
      const transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;

      if (cursorRef.current) {
        cursorRef.current.style.transform = transform;
        cursorRef.current.style.opacity = hasPointerMoved ? "1" : "0";
      }

      if (haloRef.current) {
        haloRef.current.style.transform = transform;
        haloRef.current.style.opacity = hasPointerMoved ? "1" : "0";
      }

      isFrameQueued = false;
    };

    const handlePointerMove = (event) => {
      const now = performance.now();
      const deltaX = event.clientX - lastPoint.x;
      const deltaY = event.clientY - lastPoint.y;
      const distance = Math.hypot(deltaX, deltaY);

      target.x = event.clientX;
      target.y = event.clientY;
      hasPointerMoved = true;

      if (distance > 6 && now - lastPuffTime > 18) {
        const puff = smokeRefs.current[puffIndex];
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        const strength = Math.min(46, Math.max(18, distance * 0.42));
        const unitX = distance > 0 ? deltaX / distance : 0;
        const unitY = distance > 0 ? deltaY / distance : 0;
        const startX = event.clientX - unitX * 12;
        const startY = event.clientY - unitY * 12;
        const endX = startX - unitX * strength;
        const endY = startY - unitY * strength;
        const puffScale = Math.min(1.16, 0.72 + distance * 0.006);
        const startScale = puffScale * 0.42;
        const midScale = puffScale * 0.82;
        const endScale = puffScale * 1.35;

        if (puff) {
          puff.style.setProperty("--start-x", `${startX}px`);
          puff.style.setProperty("--start-y", `${startY}px`);
          puff.style.setProperty("--end-x", `${endX}px`);
          puff.style.setProperty("--end-y", `${endY}px`);
          puff.style.setProperty("--smoke-angle", `${angle}deg`);
          puff.style.setProperty("--smoke-start-scale", `${startScale}`);
          puff.style.setProperty("--smoke-mid-scale", `${midScale}`);
          puff.style.setProperty("--smoke-end-scale", `${endScale}`);
          puff.style.animation = "none";
          void puff.offsetWidth;
          puff.style.animation = "cursorSmokeFade 900ms ease-out forwards";
        }

        puffIndex = (puffIndex + 1) % cursorSmokePuffs.length;
        lastPuffTime = now;
        lastPoint.x = event.clientX;
        lastPoint.y = event.clientY;
      }

      if (!isFrameQueued) {
        isFrameQueued = true;
        animationFrame = requestAnimationFrame(renderCursor);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {cursorSmokePuffs.map((_, index) => (
        <span
          key={index}
          ref={(element) => {
            smokeRefs.current[index] = element;
          }}
          className="cursor-smoke-puff"
        />
      ))}
      <span
        ref={haloRef}
        className="absolute left-0 top-0 h-10 w-10 rounded-full border border-purple-300/45 bg-purple-500/10 opacity-0 transition-opacity duration-150 will-change-transform"
        style={{
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      />
      <span
        ref={cursorRef}
        className="absolute left-0 top-0 h-3 w-3 rounded-full bg-violet-300 opacity-0 shadow-[0_0_18px_rgba(196,181,253,0.85)] transition-opacity duration-150 will-change-transform"
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
      initial={{ opacity: 0, scale: 0.88, rotate: -6 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="relative mx-auto flex aspect-square w-full max-w-[540px] items-center justify-center overflow-visible"
    >
      <div className="hero-right-animation">
        <span className="hero-ring hero-ring-one" />
        <span className="hero-ring hero-ring-two" />
        <span className="hero-energy-line hero-energy-line-one" />
        <span className="hero-energy-line hero-energy-line-two" />

        <div className="hero-code-card">
          <div className="hero-code-header">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-code-body">
            {heroCodeLines.map((width, index) => (
              <span
                key={`${width}-${index}`}
                className="hero-code-line"
                style={{
                  "--line-width": width,
                  "--line-delay": `${index * 0.18}s`,
                }}
              />
            ))}
          </div>
        </div>

        <span className="hero-orbit-dot hero-orbit-dot-one" />
        <span className="hero-orbit-dot hero-orbit-dot-two" />
        <span className="hero-orbit-dot hero-orbit-dot-three" />
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

        .cursor-smoke-puff {
          position: absolute;
          left: 0;
          top: 0;
          width: 138px;
          height: 54px;
          border-radius: 999px;
          opacity: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 24% 50%, rgba(250, 245, 255, 0.82), rgba(216, 180, 254, 0.48) 18%, transparent 42%),
            radial-gradient(ellipse at 52% 52%, rgba(168, 85, 247, 0.48), rgba(126, 34, 206, 0.3) 38%, transparent 72%),
            radial-gradient(ellipse at 82% 48%, rgba(76, 29, 149, 0.34), transparent 68%);
          filter: blur(13px);
          mix-blend-mode: screen;
          will-change: transform, opacity;
        }

        .banner-purple-stage {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background:
            linear-gradient(115deg, rgba(126, 34, 206, 0.2), transparent 32%),
            radial-gradient(circle at 78% 26%, rgba(168, 85, 247, 0.28), transparent 29%),
            radial-gradient(circle at 12% 78%, rgba(76, 29, 149, 0.28), transparent 34%);
        }

        .banner-purple-stage::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.78));
        }

        .banner-grid {
          position: absolute;
          inset: -20%;
          background-image:
            linear-gradient(rgba(168, 85, 247, 0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.14) 1px, transparent 1px);
          background-size: 62px 62px;
          mask-image: radial-gradient(circle at 55% 42%, black, transparent 68%);
          opacity: 0.38;
          transform: perspective(900px) rotateX(58deg) translateY(-10%);
          animation: bannerGridFlow 16s linear infinite;
        }

        .banner-glow-sweep {
          position: absolute;
          inset: -24% -38%;
          background: linear-gradient(105deg, transparent 36%, rgba(216, 180, 254, 0.22) 48%, rgba(126, 34, 206, 0.22) 55%, transparent 68%);
          filter: blur(22px);
          opacity: 0.72;
          transform: translateX(-28%) rotate(2deg);
          animation: bannerGlowSweep 8s ease-in-out infinite;
        }

        .banner-ribbon {
          position: absolute;
          width: 58rem;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(216, 180, 254, 0.88), rgba(126, 34, 206, 0.64), transparent);
          filter: drop-shadow(0 0 18px rgba(168, 85, 247, 0.82));
          opacity: 0.68;
          animation: bannerRibbonFloat 9s ease-in-out infinite;
        }

        .banner-ribbon-one {
          left: -14rem;
          top: 31%;
          transform: rotate(10deg);
        }

        .banner-ribbon-two {
          right: -18rem;
          top: 63%;
          animation-delay: -3s;
          transform: rotate(-13deg);
        }

        .banner-spark {
          position: absolute;
          width: 9px;
          height: 9px;
          border: 1px solid rgba(216, 180, 254, 0.78);
          background: rgba(168, 85, 247, 0.26);
          box-shadow: 0 0 18px rgba(168, 85, 247, 0.8);
          transform: rotate(45deg);
          animation: bannerSparkFloat 6.8s ease-in-out infinite;
        }

        .banner-spark-one {
          left: 11%;
          top: 36%;
        }

        .banner-spark-two {
          left: 45%;
          top: 20%;
          animation-delay: -2.4s;
        }

        .banner-spark-three {
          right: 18%;
          bottom: 22%;
          animation-delay: -4.1s;
        }

        .banner-title-glow {
          background: linear-gradient(90deg, #ffffff 0%, #f5f3ff 38%, #c084fc 70%, #ffffff 100%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: bannerTitleGlow 5.6s ease-in-out infinite;
          filter: drop-shadow(0 0 26px rgba(126, 34, 206, 0.36));
        }

        .hero-right-animation {
          position: relative;
          display: grid;
          width: min(82vw, 500px);
          aspect-ratio: 1;
          place-items: center;
          isolation: isolate;
        }

        .hero-right-animation::before {
          content: "";
          position: absolute;
          inset: 14%;
          border-radius: 32px;
          background:
            linear-gradient(135deg, rgba(126, 34, 206, 0.18), rgba(168, 85, 247, 0.04)),
            radial-gradient(circle at 50% 50%, rgba(216, 180, 254, 0.4), rgba(126, 34, 206, 0.18) 34%, transparent 68%);
          filter: blur(18px);
          opacity: 0.9;
          animation: heroPanelAura 5.8s ease-in-out infinite;
        }

        .hero-ring {
          position: absolute;
          border: 1px solid rgba(216, 180, 254, 0.34);
          border-radius: 36px;
          box-shadow:
            inset 0 0 32px rgba(126, 34, 206, 0.22),
            0 0 34px rgba(168, 85, 247, 0.22);
        }

        .hero-ring-one {
          inset: 13%;
          transform: rotate(12deg);
          animation: heroRingOne 9s ease-in-out infinite;
        }

        .hero-ring-two {
          inset: 22% 9%;
          transform: rotate(-18deg);
          animation: heroRingTwo 7.4s ease-in-out infinite;
        }

        .hero-energy-line {
          position: absolute;
          width: 118%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(216, 180, 254, 0.9), rgba(126, 34, 206, 0.78), transparent);
          filter: drop-shadow(0 0 16px rgba(168, 85, 247, 0.82));
          opacity: 0.64;
        }

        .hero-energy-line-one {
          transform: rotate(-16deg) translateY(-88px);
          animation: heroEnergyOne 6.2s ease-in-out infinite;
        }

        .hero-energy-line-two {
          transform: rotate(15deg) translateY(98px);
          animation: heroEnergyTwo 7.2s ease-in-out infinite;
        }

        .hero-code-card {
          position: relative;
          z-index: 1;
          width: min(82%, 360px);
          border: 1px solid rgba(216, 180, 254, 0.38);
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(8, 2, 18, 0.94), rgba(38, 8, 65, 0.76));
          box-shadow:
            0 24px 80px rgba(0, 0, 0, 0.46),
            0 0 58px rgba(126, 34, 206, 0.36);
          overflow: hidden;
          transform: rotate(-3deg);
          animation: heroCardFloat 5.8s ease-in-out infinite;
          backdrop-filter: blur(16px);
        }

        .hero-code-header {
          display: flex;
          gap: 8px;
          border-bottom: 1px solid rgba(168, 85, 247, 0.22);
          padding: 15px 18px;
          background: rgba(0, 0, 0, 0.28);
        }

        .hero-code-header span {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(216, 180, 254, 0.9);
          box-shadow: 0 0 14px rgba(216, 180, 254, 0.72);
        }

        .hero-code-body {
          display: grid;
          gap: 14px;
          padding: 28px 24px 32px;
        }

        .hero-code-line {
          width: var(--line-width);
          height: 12px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(216, 180, 254, 0.94), rgba(168, 85, 247, 0.7), rgba(76, 29, 149, 0.28));
          box-shadow: 0 0 18px rgba(168, 85, 247, 0.44);
          transform-origin: left center;
          animation: heroCodeLine 2.6s ease-in-out infinite;
          animation-delay: var(--line-delay);
        }

        .hero-orbit-dot {
          position: absolute;
          z-index: 2;
          width: 18px;
          height: 18px;
          border: 1px solid rgba(216, 180, 254, 0.72);
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(250, 245, 255, 0.95), rgba(216, 180, 254, 0.74) 32%, rgba(126, 34, 206, 0.26) 68%);
          box-shadow:
            0 0 16px rgba(216, 180, 254, 0.92),
            0 0 34px rgba(126, 34, 206, 0.62);
          animation: heroOrbitDot 5.6s ease-in-out infinite;
        }

        .hero-orbit-dot::after {
          content: "";
          position: absolute;
          inset: -12px;
          border-radius: inherit;
          border: 1px solid rgba(168, 85, 247, 0.18);
        }

        .hero-orbit-dot-one {
          left: 6%;
          top: 22%;
        }

        .hero-orbit-dot-two {
          right: 4%;
          top: 33%;
          animation-delay: -1.8s;
        }

        .hero-orbit-dot-three {
          bottom: 17%;
          left: 25%;
          animation-delay: -3.2s;
        }

        .hero-smoke-aura {
          position: relative;
          width: min(76vw, 470px);
          height: min(70vw, 430px);
          border-radius: 999px;
          isolation: isolate;
          animation: heroSmokeBreath 6.4s ease-in-out infinite;
          filter: drop-shadow(0 0 44px rgba(168, 85, 247, 0.54));
        }

        .hero-smoke-layer,
        .hero-smoke-core {
          position: absolute;
          inset: 10%;
          border-radius: 999px;
          mix-blend-mode: screen;
          will-change: transform, opacity;
        }

        .hero-smoke-layer {
          background:
            radial-gradient(ellipse at 30% 42%, rgba(255, 255, 255, 0.44), transparent 13%),
            radial-gradient(ellipse at 48% 50%, rgba(216, 180, 254, 0.62), rgba(168, 85, 247, 0.42) 30%, rgba(76, 29, 149, 0.24) 58%, transparent 76%);
          filter: blur(24px);
          opacity: 0.82;
          animation: heroSmokeDrift 9s ease-in-out infinite;
        }

        .hero-smoke-core {
          inset: 23%;
          background:
            radial-gradient(ellipse at 40% 42%, rgba(250, 245, 255, 0.82), rgba(216, 180, 254, 0.54) 21%, rgba(168, 85, 247, 0.28) 54%, transparent 76%);
          filter: blur(16px);
          opacity: 0.8;
          animation: heroSmokePulse 4.2s ease-in-out infinite;
        }

        .layer-one {
          transform: translate3d(-26px, -18px, 0) scale(1.08);
        }

        .layer-two {
          inset: 18% 4% 12% 24%;
          opacity: 0.72;
          animation-delay: -1.8s;
          transform: translate3d(38px, 14px, 0) scale(0.92);
        }

        .layer-three {
          inset: 8% 18% 26% 2%;
          opacity: 0.64;
          animation-delay: -3.2s;
          transform: translate3d(-44px, 34px, 0) scale(0.86);
        }

        .layer-four {
          inset: 28% 20% 6% 16%;
          opacity: 0.56;
          animation-delay: -4.4s;
          transform: translate3d(12px, 52px, 0) scale(0.78);
        }

        @keyframes cursorSmokeFade {
          0% {
            opacity: 0;
            transform: translate3d(var(--start-x), var(--start-y), 0) translate(-50%, -50%) rotate(var(--smoke-angle)) scale(var(--smoke-start-scale), 0.52);
          }

          18% {
            opacity: 0.72;
            transform: translate3d(var(--start-x), var(--start-y), 0) translate(-50%, -50%) rotate(var(--smoke-angle)) scale(var(--smoke-mid-scale), 0.72);
          }

          100% {
            opacity: 0;
            transform: translate3d(var(--end-x), var(--end-y), 0) translate(-50%, -50%) rotate(var(--smoke-angle)) scale(var(--smoke-end-scale), 1.08);
          }
        }

        @keyframes bannerGridFlow {
          0% {
            transform: perspective(900px) rotateX(58deg) translate3d(0, -10%, 0);
          }

          100% {
            transform: perspective(900px) rotateX(58deg) translate3d(62px, calc(-10% + 62px), 0);
          }
        }

        @keyframes bannerGlowSweep {
          0%, 100% {
            opacity: 0.44;
            transform: translateX(-34%) rotate(2deg);
          }

          50% {
            opacity: 0.82;
            transform: translateX(18%) rotate(2deg);
          }
        }

        @keyframes bannerRibbonFloat {
          0%, 100% {
            opacity: 0.42;
            translate: 0 0;
          }

          50% {
            opacity: 0.9;
            translate: 38px -22px;
          }
        }

        @keyframes bannerSparkFloat {
          0%, 100% {
            opacity: 0.34;
            translate: 0 0;
            scale: 0.82;
          }

          50% {
            opacity: 1;
            translate: 18px -24px;
            scale: 1.08;
          }
        }

        @keyframes bannerTitleGlow {
          0%, 100% {
            background-position: 0% center;
          }

          50% {
            background-position: 100% center;
          }
        }

        @keyframes heroPanelAura {
          0%, 100% {
            opacity: 0.72;
            transform: scale(0.94) rotate(-2deg);
          }

          50% {
            opacity: 1;
            transform: scale(1.06) rotate(3deg);
          }
        }

        @keyframes heroRingOne {
          0%, 100% {
            transform: rotate(12deg) scale(0.98);
          }

          50% {
            transform: rotate(25deg) scale(1.04);
          }
        }

        @keyframes heroRingTwo {
          0%, 100% {
            transform: rotate(-18deg) scale(1.02);
          }

          50% {
            transform: rotate(-32deg) scale(0.96);
          }
        }

        @keyframes heroEnergyOne {
          0%, 100% {
            opacity: 0.34;
            transform: rotate(-16deg) translate3d(-36px, -88px, 0);
          }

          50% {
            opacity: 0.86;
            transform: rotate(-16deg) translate3d(36px, -70px, 0);
          }
        }

        @keyframes heroEnergyTwo {
          0%, 100% {
            opacity: 0.28;
            transform: rotate(15deg) translate3d(38px, 98px, 0);
          }

          50% {
            opacity: 0.78;
            transform: rotate(15deg) translate3d(-32px, 78px, 0);
          }
        }

        @keyframes heroCardFloat {
          0%, 100% {
            transform: rotate(-3deg) translateY(0);
          }

          50% {
            transform: rotate(2deg) translateY(-18px);
          }
        }

        @keyframes heroCodeLine {
          0%, 100% {
            opacity: 0.52;
            transform: scaleX(0.7);
          }

          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes heroOrbitDot {
          0%, 100% {
            opacity: 0.54;
            transform: translate3d(0, 0, 0) scale(0.82);
          }

          50% {
            opacity: 1;
            transform: translate3d(14px, -18px, 0) scale(1.12);
          }
        }

        @keyframes heroSmokeBreath {
          0%, 100% {
            transform: rotate(-7deg) scale(0.94);
          }

          50% {
            transform: rotate(5deg) scale(1.04);
          }
        }

        @keyframes heroSmokeDrift {
          0%, 100% {
            opacity: 0.74;
          }

          50% {
            opacity: 0.94;
            transform: translate3d(18px, -18px, 0) scale(1.04);
          }
        }

        @keyframes heroSmokePulse {
          0%, 100% {
            transform: scale(0.86);
            opacity: 0.68;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.96;
          }
        }
      `}</style>
      <CursorTrail />
      <div className="pointer-events-none fixed inset-0 z-0 bg-black" />

      <section className="relative z-10 flex min-h-screen flex-col overflow-hidden border-b border-purple-500/30">
        <div className="banner-purple-stage pointer-events-none" aria-hidden="true">
          <span className="banner-grid" />
          <span className="banner-glow-sweep" />
          <span className="banner-ribbon banner-ribbon-one" />
          <span className="banner-ribbon banner-ribbon-two" />
          <span className="banner-spark banner-spark-one" />
          <span className="banner-spark banner-spark-two" />
          <span className="banner-spark banner-spark-three" />
        </div>

        <nav className="relative mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-5xl items-center justify-between rounded-full border border-purple-700/50 bg-black/55 px-4 py-3 shadow-[0_0_36px_rgba(126,34,206,0.26)] backdrop-blur md:mt-5 md:w-[88%] md:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-3 md:gap-4">
            <img
              src={profileImage}
              alt="Syed Umar"
              className="h-12 w-12 shrink-0 rounded-full border border-purple-400/60 object-cover object-top md:h-16 md:w-16"
            />
            <span className="truncate text-xl font-bold text-violet-100 drop-shadow-[0_0_10px_rgba(216,180,254,0.95)] sm:text-2xl md:text-3xl">
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
          className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 px-5 py-12 sm:py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:px-8"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-purple-400/35 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
              <Sparkles size={16} />
              Full Stack Developer
            </p>
            <h1 className="banner-title-glow max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl md:text-7xl">
              Creative Web Development Wizard
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
              Helping brands and businesses build pixel-perfect front-end
              experiences with powerful back-end functionality.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 sm:gap-5">
              <a
                href="#projects"
                className="rounded-md border border-purple-500 bg-purple-500/20 px-5 py-3 font-semibold text-white transition hover:bg-purple-500/35 sm:px-6"
              >
                View Projects
              </a>
              <a
                href="mailto:syedumar@example.com"
                className="rounded-md border border-purple-500 px-5 py-3 font-semibold text-purple-200 transition hover:bg-purple-500/15 sm:px-6"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <HeroAnimation />
        </div>
      </section>

      <section id="about" className="relative z-10 border-b border-purple-500/20 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-6xl px-5 md:px-8"
        >
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            About Me
          </h2>
          <div className="mt-7 space-y-6 text-base leading-8 text-slate-400 md:mt-9 md:text-xl md:leading-9">
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

      <section id="tech" className="relative z-10 border-b border-purple-500/20 py-16 md:py-20">
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

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 md:gap-8 lg:grid-cols-4">
            {technologies
              .filter((tech) => tech.name !== "Firebase")
              .map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group flex min-h-36 flex-col items-center justify-center rounded-lg border border-purple-800/55 bg-black/45 p-5 text-center shadow-[0_0_24px_rgba(88,28,135,0.12)] transition hover:-translate-y-1 hover:border-purple-400/70 hover:shadow-[0_0_28px_rgba(168,85,247,0.24)] md:min-h-40 md:p-6"
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

      <section id="projects" className="relative isolate z-20 overflow-hidden bg-black py-16 md:py-20">
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

          <div className="grid gap-x-8 gap-y-10 md:gap-y-16 lg:grid-cols-2 lg:gap-y-24">
            {projects.map((project, index) => {
              const isResumeProject = index === 3;
              const isNoorProject = index === 4;
              const isCineVerseProject = index === 5;
              const isFeaturedProject = index <= 6;
              const isImageFirst = index % 2 === 0;

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
                    isFeaturedProject
                      ? `border-purple-900/45 lg:col-span-2 lg:grid ${
                          isImageFirst
                            ? "lg:grid-cols-[1.35fr_0.9fr]"
                            : "lg:grid-cols-[0.9fr_1.35fr]"
                        } lg:items-center`
                      : "border-purple-900/55"
                  }`}
                >
                  {isFeaturedProject && isImageFirst ? (
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

                      <div className="flex flex-col justify-center p-5 sm:p-7 md:p-10 lg:p-12">
                        <h3 className="text-2xl font-black leading-tight text-violet-100 sm:text-3xl md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 md:mt-5 md:text-lg md:leading-8">
                          {project.description}
                        </p>
                        {project.credentials ? (
                          <div className="mt-5 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                            {project.credentials.map((item) => (
                              <span
                                key={item.label}
                                className="rounded-md border border-purple-500/25 bg-purple-500/10 px-3 py-2"
                              >
                                <strong className="text-purple-100">{item.label}:</strong>{" "}
                                {item.value}
                              </span>
                            ))}
                          </div>
                        ) : null}
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
                  ) : isFeaturedProject ? (
                    <>
                      <div className="flex flex-col justify-center p-5 sm:p-7 md:p-10 lg:p-12">
                        <h3 className="text-2xl font-black leading-tight text-violet-100 sm:text-3xl md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 md:mt-5 md:text-lg md:leading-8">
                          {project.description}
                        </p>
                        {project.credentials ? (
                          <div className="mt-5 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                            {project.credentials.map((item) => (
                              <span
                                key={item.label}
                                className="rounded-md border border-purple-500/25 bg-purple-500/10 px-3 py-2"
                              >
                                <strong className="text-purple-100">{item.label}:</strong>{" "}
                                {item.value}
                              </span>
                            ))}
                          </div>
                        ) : null}
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

                      <div className="flex flex-col justify-center p-5 sm:p-7 md:p-10 lg:p-12">
                        <h3 className="text-2xl font-black leading-tight text-violet-100 sm:text-3xl md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 md:mt-5 md:text-lg md:leading-8">
                          {project.description}
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
                      <div className="flex flex-col justify-center p-5 sm:p-7 md:p-10 lg:p-12">
                        <h3 className="text-2xl font-black leading-tight text-violet-100 sm:text-3xl md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 md:mt-5 md:text-lg md:leading-8">
                          {project.description}
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

                      <div className="flex flex-col justify-center p-5 sm:p-7 md:p-10 lg:p-12">
                        <h3 className="text-2xl font-black leading-tight text-violet-100 sm:text-3xl md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 md:mt-5 md:text-lg md:leading-8">
                          {project.description}
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

                      <div className="p-5 sm:p-6 md:p-7">
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
                            className="inline-flex items-center gap-2 rounded-md bg-purple-500 px-4 py-2.5 font-semibold text-white transition hover:bg-purple-400 sm:px-5"
                          >
                            Live <ExternalLink size={18} />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-md border border-purple-500/55 px-4 py-2.5 font-semibold text-purple-100 transition hover:bg-purple-500/15 sm:px-5"
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

      <footer className="relative overflow-hidden border-t border-purple-500/20 py-16 md:py-28">
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
            <h2 className="mb-8 text-3xl font-light leading-tight text-white sm:text-4xl md:mb-10 md:text-5xl">
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
                className="h-72 w-full object-cover object-top transition duration-700 hover:scale-105 sm:h-[360px]"
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
