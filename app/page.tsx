"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const TEAL = "#0d9488";
const TEAL_LIGHT = "#14b8a6";
const TEAL_DIM = "rgba(13,148,136,0.15)";
const BG = "#050c18";
const CARD = "rgba(255,255,255,0.03)";
const BORDER = "rgba(255,255,255,0.07)";
const BORDER_HOVER = "rgba(13,148,136,0.4)";

export default function NandanaPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -80]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouse);

    const ids = ["home","about","skills","projects","experience","certifications","education","contact"];
    const obs = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActiveSection(id); }, { threshold: 0.4 });
      o.observe(el);
      return o;
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
      obs.forEach(o => o?.disconnect());
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <div style={{ background: BG, color: "#e2e8f0", fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── Cursor glow ── */}
      <div className="fixed pointer-events-none z-0"
        style={{
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13,148,136,0.05) 0%, transparent 65%)",
          left: mousePos.x - 350, top: mousePos.y - 350,
          transition: "left 0.4s ease, top 0.4s ease",
        }} />

      {/* ── Subtle grid ── */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(13,148,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* ══════════════════════════════════════════
          TOP NAVIGATION
      ══════════════════════════════════════════ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,12,24,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? `1px solid ${BORDER}` : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-sm font-bold text-white tracking-tight" style={{ letterSpacing: "-0.02em" }}>
            Nandana<span style={{ color: TEAL_LIGHT }}>.</span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative px-3 py-1.5 text-xs font-medium transition-colors duration-200 rounded-md"
                style={{ color: activeSection === link.id ? "#fff" : "#64748b" }}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md"
                    style={{ background: TEAL_DIM, border: `1px solid rgba(13,148,136,0.25)` }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative uppercase tracking-widest" style={{ fontSize: "10px" }}>{link.label}</span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-4 py-2 rounded-lg text-xs font-semibold"
            style={{ background: TEAL_LIGHT, color: BG }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.nav>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <motion.section
        id="home"
        ref={heroRef}
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative min-h-screen flex items-center"
      >
        {/* Glow orbs */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(13,148,136,0.12), transparent)" }} />
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07), transparent)" }} />

        <div className="max-w-6xl mx-auto px-8 w-full pt-24">
          <div className="max-w-3xl">

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-10"
              style={{ background: TEAL_DIM, border: `1px solid rgba(13,148,136,0.3)`, color: "#5eead4" }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: TEAL_LIGHT, display: "block" }}
              />
              Available for Full-Time Opportunities · Kerala, India
            </motion.div>

            {/* Name — letter by letter */}
            <div className="mb-4">
              <h1 className="font-bold text-white" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                {"Nandana N Nair".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.025, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Animated subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-lg font-medium mb-6"
              style={{ color: TEAL_LIGHT }}
            >
              Data Scientist · GenAI Developer · Blockchain & IoT Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="text-base leading-relaxed mb-10 max-w-2xl"
              style={{ color: "#64748b" }}
            >
              Computer Science graduate with hands-on experience in machine learning,
              generative AI, blockchain systems, and IoT solutions. Turning data into
              intelligent solutions that solve real-world problems.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {["Python", "Machine Learning", "GenAI", "LLM", "Blockchain", "IoT", "Power BI", "SQL"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + i * 0.05 }}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.18)", color: "#5eead4" }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl font-semibold text-sm transition-all"
                style={{ background: TEAL_LIGHT, color: BG }}>
                Get in Touch
              </motion.a>
              <motion.a href="#projects" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl font-medium text-sm"
                style={{ border: `1px solid rgba(13,148,136,0.35)`, color: TEAL_LIGHT }}>
                View Projects
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/nandana-n-nair-774627258/" target="_blank"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl font-medium text-sm"
                style={{ border: `1px solid ${BORDER}`, color: "#94a3b8" }}>
                LinkedIn
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex gap-10 mt-14 pt-10"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              {[{ num: "8.32", label: "CGPA" }, { num: "3", label: "Projects" }, { num: "4+", label: "Certifications" }, { num: "2", label: "Internships" }].map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + i * 0.08 }}>
                  <p className="text-2xl font-bold text-white">{s.num}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#475569" }}>{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
            style={{ borderColor: "rgba(13,148,136,0.3)" }}
          >
            <div className="w-0.5 h-2 rounded-full" style={{ background: TEAL_LIGHT }} />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ══════════════════════════════════════════
          CONTENT SECTIONS
      ══════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-8">

        {/* Section label component */}
        {(() => {
          const SectionLabel = ({ label }: { label: string }) => (
            <motion.div {...fadeUp()} className="flex items-center gap-4 mb-12">
              <div className="w-10 h-px" style={{ background: TEAL_LIGHT }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: TEAL_LIGHT }}>{label}</span>
              <div className="flex-1 h-px" style={{ background: BORDER }} />
            </motion.div>
          );

          return (
            <>
              {/* ── ABOUT ── */}
              <section id="about" className="py-24">
                <SectionLabel label="About" />
                <div className="grid md:grid-cols-2 gap-16">
                  <motion.div {...fadeUp(0.1)}>
                    <div className="space-y-5 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                      <p>
                        I'm a Computer Science Engineering graduate from LBS Institute of Technology for Women,
                        Thiruvananthapuram, with a strong foundation in Python, SQL, machine learning, and data analytics.
                      </p>
                      <p>
                        My work spans the frontier of technology — from building a GenAI disease prediction system
                        using Large Language Models, to developing a blockchain-based donation tracking platform,
                        and creating an IoT-powered smart water and energy management prototype.
                      </p>
                      <p>
                        I'm passionate about applying technology to solve real-world problems and eager to
                        begin a professional career in IT, data, or software-focused roles.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-3">
                    {[
                      { icon: "🤖", title: "Generative AI", sub: "LLM · FastAPI · Ollama" },
                      { icon: "⛓️", title: "Blockchain", sub: "Consensus · Web3" },
                      { icon: "📡", title: "IoT Systems", sub: "Arduino · Raspberry Pi" },
                      { icon: "📊", title: "Data Science", sub: "ML · Power BI · Python" },
                    ].map((card) => (
                      <motion.div key={card.title}
                        whileHover={{ y: -4, borderColor: BORDER_HOVER }}
                        className="p-5 rounded-2xl transition-all duration-300 cursor-default"
                        style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                        <span className="text-2xl mb-3 block">{card.icon}</span>
                        <p className="text-sm font-semibold text-white">{card.title}</p>
                        <p className="text-xs mt-1" style={{ color: "#475569" }}>{card.sub}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>

              {/* ── SKILLS ── */}
              <section id="skills" className="py-24" style={{ borderTop: `1px solid ${BORDER}` }}>
                <SectionLabel label="Skills" />
                <div className="space-y-10">
                  {[
                    { category: "Programming & Data", items: ["Python", "SQL", "Machine Learning", "TensorFlow", "Data Analytics"] },
                    { category: "AI & Emerging Tech", items: ["GenAI", "LLM", "Blockchain", "IoT", "FastAPI", "Ollama"] },
                    { category: "Tools & Platforms", items: ["Power BI", "Tableau", "Flask", "Arduino", "Raspberry Pi", "HTML", "CSS"] },
                  ].map((group, i) => (
                    <motion.div key={i} {...fadeUp(i * 0.1)}>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#475569" }}>{group.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <motion.span key={item}
                            whileHover={{ scale: 1.05, borderColor: BORDER_HOVER, color: "#5eead4" }}
                            className="px-4 py-2 rounded-lg text-sm font-medium cursor-default transition-all duration-200"
                            style={{ background: CARD, border: `1px solid ${BORDER}`, color: "#cbd5e1" }}>
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* ── PROJECTS ── */}
              <section id="projects" className="py-24" style={{ borderTop: `1px solid ${BORDER}` }}>
                <SectionLabel label="Projects" />
                <div className="space-y-5">
                  {[
                    {
                      icon: "🤖",
                      title: "GenAI Disease Prediction System",
                      period: "Jan 2026",
                      desc: "Built a GenAI-based web application that predicts possible diseases from user-entered symptoms using a Large Language Model. Developed a FastAPI backend integrated with Ollama for real-time AI inference. Designed a simple login and chat-based frontend.",
                      tags: ["GenAI", "FastAPI", "Ollama", "LLM", "Python"],
                      link: "https://github.com/n1a2n3d4a-a",
                      featured: true,
                    },
                    {
                      icon: "⛓️",
                      title: "Donation Tracking System Using Blockchain",
                      period: "Apr 2024",
                      desc: "Designed and developed a blockchain-based system to ensure transparency and traceability of donations. Built a web interface using HTML, CSS, JavaScript, Flask, and SQL. Implemented a blockchain consensus mechanism to enhance trust and data integrity.",
                      tags: ["Blockchain", "HTML", "CSS", "JavaScript", "Flask", "SQL"],
                      link: "https://github.com/n1a2n3d4a-a",
                      featured: false,
                    },
                    {
                      icon: "📡",
                      title: "Intelligent Water & Energy Management",
                      period: "Apr 2025",
                      desc: "Developed an IoT-based hardware prototype using Arduino Nano and Raspberry Pi. Integrated sensors for water quality monitoring, leakage detection, and object detection. Automated water pumping to improve energy efficiency and optimize water usage.",
                      tags: ["IoT", "Arduino", "Raspberry Pi", "Python", "Sensors"],
                      link: "https://github.com/n1a2n3d4a-a",
                      featured: false,
                    },
                  ].map((project, i) => (
                    <motion.a
                      key={i}
                      href={project.link}
                      target="_blank"
                      {...fadeUp(i * 0.1)}
                      whileHover={{ x: 6, borderColor: BORDER_HOVER }}
                      className="flex gap-5 p-6 rounded-2xl transition-all duration-300 cursor-pointer block"
                      style={{
                        background: project.featured ? "rgba(13,148,136,0.06)" : CARD,
                        border: project.featured ? `1px solid rgba(13,148,136,0.25)` : `1px solid ${BORDER}`,
                      }}
                    >
                      <span className="text-2xl mt-0.5 shrink-0">{project.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-white">{project.title}</h3>
                            {project.featured && (
                              <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                                style={{ background: TEAL_DIM, color: TEAL_LIGHT }}>★ Featured</span>
                            )}
                          </div>
                          <span className="text-xs font-mono shrink-0 ml-4" style={{ color: "#475569" }}>{project.period}</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>{project.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2.5 py-1 rounded-lg font-medium"
                              style={{ background: "rgba(13,148,136,0.08)", color: "#5eead4", border: "1px solid rgba(13,148,136,0.12)" }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </section>

              {/* ── EXPERIENCE ── */}
              <section id="experience" className="py-24" style={{ borderTop: `1px solid ${BORDER}` }}>
                <SectionLabel label="Experience" />
                <div className="space-y-5">
                  {[
                    {
                      role: "Data Science with Gen-AI Intern",
                      org: "RP2 Private Limited",
                      location: "Kochi",
                      period: "Jun 2025 – Oct 2025",
                      points: [
                        "Worked on data analysis and introductory machine learning tasks using Python.",
                        "Gained practical exposure to generative AI concepts and real-world data workflows.",
                      ],
                    },
                    {
                      role: "Associate – CS Phone (Level 1)",
                      org: "Sutherland Global Services",
                      location: "Kochi",
                      period: "Nov 2025 – Jan 2026",
                      points: [
                        "Handled client queries efficiently while maintaining service quality and compliance standards.",
                        "Raised and managed service tickets to ensure timely resolution of client issues and proper follow-up.",
                      ],
                    },
                  ].map((exp, i) => (
                    <motion.div key={i} {...fadeUp(i * 0.1)}
                      whileHover={{ x: 4, borderColor: BORDER_HOVER }}
                      className="p-6 rounded-2xl transition-all duration-300"
                      style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-white">{exp.role}</h3>
                          <p className="text-sm mt-0.5 font-medium" style={{ color: TEAL_LIGHT }}>{exp.org} · {exp.location}</p>
                        </div>
                        <span className="text-xs font-mono px-3 py-1.5 rounded-lg shrink-0 ml-4"
                          style={{ background: TEAL_DIM, color: "#5eead4", border: "1px solid rgba(13,148,136,0.2)" }}>
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2 pl-4" style={{ borderLeft: `2px solid rgba(13,148,136,0.2)` }}>
                        {exp.points.map((p) => (
                          <li key={p} className="text-sm pl-4 leading-relaxed" style={{ color: "#64748b" }}>{p}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* ── CERTIFICATIONS ── */}
              <section id="certifications" className="py-24" style={{ borderTop: `1px solid ${BORDER}` }}>
                <SectionLabel label="Certifications" />
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "The Joy of Computing using Python", org: "NPTEL — IIT Madras", period: "Jan – Apr 2024", score: "60%" },
                    { title: "Data Analytics and Visualization", org: "Accenture North America — Forage", period: "January 2025" },
                    { title: "An Introduction to Gen AI", org: "Infosys Springboard", period: "December 2024" },
                    { title: "Ethical Hacking with AI", org: "Internshala Trainings", period: "Feb 2026", badge: "Ongoing" },
                  ].map((cert, i) => (
                    <motion.div key={i} {...fadeUp(i * 0.08)}
                      whileHover={{ y: -3, borderColor: BORDER_HOVER }}
                      className="p-5 rounded-2xl transition-all duration-300"
                      style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-white">{cert.title}</p>
                          <p className="text-xs mt-1" style={{ color: "#475569" }}>{cert.org}</p>
                          <p className="text-xs mt-1 font-mono" style={{ color: "#334155" }}>{cert.period}</p>
                        </div>
                        <div className="ml-4 shrink-0">
                          {cert.score && (
                            <span className="text-xs font-bold px-2.5 py-1.5 rounded-lg block text-center"
                              style={{ background: TEAL_DIM, color: TEAL_LIGHT }}>
                              {cert.score}
                            </span>
                          )}
                          {cert.badge && (
                            <span className="text-xs px-2.5 py-1.5 rounded-lg block text-center"
                              style={{ background: "rgba(251,191,36,0.08)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)" }}>
                              {cert.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* ── EDUCATION ── */}
              <section id="education" className="py-24" style={{ borderTop: `1px solid ${BORDER}` }}>
                <SectionLabel label="Education" />
                <div className="space-y-4">
                  {[
                    { degree: "Bachelor of Technology — Computer Science & Engineering", school: "LBS Institute of Technology for Women, Thiruvananthapuram", period: "2021 – 2025", grade: "CGPA: 8.32 / 10" },
                    { degree: "CBSE — Class XII", school: "Shanthiniketan School", period: "2021", grade: "96%" },
                    { degree: "CBSE — Class X", school: "Shanthiniketan School", period: "2019", grade: "96%" },
                  ].map((edu, i) => (
                    <motion.div key={i} {...fadeUp(i * 0.1)}
                      whileHover={{ x: 4, borderColor: BORDER_HOVER }}
                      className="flex justify-between items-center p-6 rounded-2xl transition-all duration-300"
                      style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                      <div>
                        <p className="font-semibold text-white">{edu.degree}</p>
                        <p className="text-sm mt-1" style={{ color: "#475569" }}>{edu.school}</p>
                      </div>
                      <div className="text-right shrink-0 ml-8">
                        <p className="font-bold" style={{ color: TEAL_LIGHT }}>{edu.grade}</p>
                        <p className="text-xs font-mono mt-0.5" style={{ color: "#334155" }}>{edu.period}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* ── CONTACT ── */}
              <section id="contact" className="py-24" style={{ borderTop: `1px solid ${BORDER}` }}>
                <SectionLabel label="Contact" />
                <motion.div {...fadeUp()}
                  className="p-12 rounded-3xl text-center relative overflow-hidden"
                  style={{ background: "rgba(13,148,136,0.04)", border: `1px solid rgba(13,148,136,0.18)` }}>

                  {/* Background glow */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, rgba(13,148,136,0.06) 0%, transparent 70%)" }} />

                  <div className="relative z-10">
                    <motion.div {...fadeUp(0.1)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                      style={{ background: TEAL_DIM, border: `1px solid rgba(13,148,136,0.25)`, color: "#5eead4" }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: TEAL_LIGHT, display: "block" }} />
                      Open to opportunities
                    </motion.div>

                    <motion.h2 {...fadeUp(0.15)} className="text-4xl font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
                      Let's Work Together
                    </motion.h2>

                    <motion.p {...fadeUp(0.2)} className="text-sm leading-relaxed max-w-lg mx-auto mb-3" style={{ color: "#64748b" }}>
                      Open to Data Science, GenAI development, and software engineering roles.
                      Available immediately for full-time positions and collaborative projects.
                    </motion.p>

                    <motion.p {...fadeUp(0.25)} className="text-sm font-medium mb-10" style={{ color: TEAL_LIGHT }}>
                      📍 Kerala, India · Available Immediately
                    </motion.p>

                    <motion.div {...fadeUp(0.3)} className="flex flex-wrap justify-center gap-4 mb-10">
                      <motion.a href="mailto:nnairnandana@gmail.com"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                        className="px-8 py-3.5 rounded-xl font-semibold text-sm"
                        style={{ background: TEAL_LIGHT, color: BG }}>
                        nnairnandana@gmail.com
                      </motion.a>
                      <motion.a href="https://www.linkedin.com/in/nandana-n-nair-774627258/" target="_blank"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                        className="px-8 py-3.5 rounded-xl font-medium text-sm"
                        style={{ border: `1px solid rgba(13,148,136,0.35)`, color: TEAL_LIGHT }}>
                        LinkedIn Profile
                      </motion.a>
                      <motion.a href="https://github.com/n1a2n3d4a-a" target="_blank"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                        className="px-8 py-3.5 rounded-xl font-medium text-sm"
                        style={{ border: `1px solid ${BORDER}`, color: "#94a3b8" }}>
                        GitHub
                      </motion.a>
                      <motion.a href="tel:+917907446601"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                        className="px-8 py-3.5 rounded-xl font-medium text-sm"
                        style={{ border: `1px solid ${BORDER}`, color: "#94a3b8" }}>
                        +91 7907446601
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </section>
            </>
          );
        })()}

      </div>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-8 py-8 flex justify-between items-center text-xs"
        style={{ borderTop: `1px solid ${BORDER}`, color: "#334155" }}>
        <p>© 2026 Nandana N Nair</p>
        <p style={{ color: "#1e293b" }}>Kerala, India</p>
      </footer>

    </div>
  );
}
