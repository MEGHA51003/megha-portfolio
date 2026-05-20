"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">

      {/* ── STICKY NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur border-b border-slate-800 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-blue-400 font-semibold text-lg tracking-tight">
            Megha B S
          </span>
          <div className="hidden md:flex gap-6 text-sm text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:meghabsunil@gmail.com"
            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-sm font-medium"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* ── HERO — full background photo style ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
      >
        {/* Overflow hidden wrapper for animation */}
       <div className="absolute inset-0 overflow-hidden">
  <img
    src="/photo.png"
    alt="Megha"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transformOrigin: "center center",
      animation: "kenburns 8s ease-out forwards"
    }}
  />
</div>
        {/* Overlay — dark left for text, transparent right for face */}
        <div className="absolute inset-0" style={{background: "linear-gradient(to right, #020817 30%, #02081780 55%, #02081730 100%)"}} />

        {/* Subtle bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to International Onsite Roles & Freelance Projects
            </div>

            <p className="text-slate-300 text-lg mb-2">Hi, I am</p>

            <h1 className="text-6xl font-bold leading-tight mb-4 text-white tracking-tight">
              Megha B S
            </h1>

            <h2 className="text-2xl text-blue-400 font-medium mb-6">
              Data & Business Analyst · Freelance Web Developer & Automation Specialist
            </h2>

            <p className="text-slate-300 leading-relaxed max-w-xl mb-8">
              CS graduate combining data analysis, business automation, and
              portfolio web development. I help businesses turn raw data into
              decisions, eliminate manual work with Zapier workflows, and build
              impressive web presences using React & Next.js.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Power BI", "SQL", "Python", "React", "Zapier", "Next.js"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-slate-200 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:meghabsunil@gmail.com"
                className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium"
              >
                Get in Touch
              </a>
              <a
                href="/CV.pdf"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 backdrop-blur-sm transition font-medium"
              >
                View CV
              </a>
              <a
                href="https://linkedin.com/in/meghabs51"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 backdrop-blur-sm transition font-medium"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Relocate badge bottom right */}
        <div className="absolute bottom-8 right-8 z-10 bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-full">
          ✈️ Valid Passport · Ready to Relocate
        </div>
      </section>

      {/* ── FREELANCE SERVICES ── */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
            Freelance Services
          </p>
          <h2 className="text-3xl font-bold mb-12">What I Build For You</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🌐",
              title: "Portfolio Websites",
              desc: "Modern, responsive personal portfolio websites built with React and Next.js. Clean design, fast load times, mobile-first. Perfect for professionals, students, and creatives worldwide.",
              tags: ["React", "Next.js", "HTML/CSS", "JavaScript"],
              cta: "See Client Work ↓",
            },
            {
              icon: "⚡",
              title: "Business Automation",
              desc: "End-to-end Zapier workflows that eliminate manual work. Contact form automation, lead capture, payment reminders, weekly reports — set up once, runs forever.",
              tags: ["Zapier", "Google Sheets", "Gmail", "WhatsApp"],
              cta: "See Automation Project ↓",
            },
            {
              icon: "📊",
              title: "Data Analysis & Dashboards",
              desc: "Turn your messy business data into clean Power BI dashboards that actually make sense. Sales trends, KPI tracking, financial reports — decisions made easy.",
              tags: ["Power BI", "SQL", "Python", "Excel"],
              cta: "See Projects ↓",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition group"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CORE COMPETENCIES ── */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
            Skills
          </p>
          <h2 className="text-3xl font-bold mb-12">Core Competencies</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Analytics & Data Intelligence",
              items: [
                "Financial Modelling & Ratio Analysis",
                "Power BI Dashboards & DAX",
                "KPI Frameworks & Business Insights",
                "Market & Customer Research",
                "Sentiment Analysis",
              ],
            },
            {
              title: "Business & Strategy",
              items: [
                "Business Process Automation",
                "Requirements Gathering",
                "Stakeholder Analysis & Communication",
                "Data Storytelling",
                "Team Coordination & Leadership",
              ],
            },
            {
              title: "Tools & Technologies",
              items: [
                "Power BI · SQL · Python · Excel",
                "React · Next.js · HTML · CSS · JS",
                "Zapier · Google Workspace",
                "Looker Studio · AI Workflows",
                "GitHub · Vercel · Netlify",
              ],
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {card.title}
              </h3>
              <ul className="text-slate-400 space-y-2 text-sm">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
            Work
          </p>
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        </motion.div>

        {/* Client Work — highlighted */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-4">
            ★ Client Work
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500/60 transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Hussain Moideen — CMA Accountant Portfolio
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                  Designed and developed a fully responsive professional portfolio
                  for a Certified Management Accountant based in Dubai, UAE.
                  Clean structure, mobile-first design, live contact form, and
                  professional branding — delivered and deployed.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["HTML", "CSS", "JavaScript", "Netlify"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://hussain-moideen.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 transition rounded-xl text-sm font-medium text-white"
              >
                View Live Site →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Personal Projects */}
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4 mt-10">
          Personal Projects
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Business Automation System",
              desc: "End-to-end Zapier automation — Google Forms → Google Sheets → Gmail notifications. Eliminates manual data entry for client businesses. Built and deployed for real use.",
              tags: ["Zapier", "Google Forms", "Google Sheets", "Gmail"],
              link: null,
            },
            {
              title: "Advanced Financial Insights Platform",
              desc: "Multi-factor financial analytics platform combining company fundamentals, ratio models, and sentiment signals to generate investment insights.",
              tags: ["Python", "SQL", "Financial Modeling", "Sentiment Analysis"],
              link: null,
            },
            {
              title: "Automated Certificate Generator",
              desc: "Python automation tool that generates certificates from structured data, reducing manual effort and eliminating errors completely.",
              tags: ["Python", "OpenCV", "Automation", "Excel"],
              link: "https://github.com/MEGHA51003/certimate",
            },
            {
              title: "Retail Sales Analytics Dashboard",
              desc: "Analyzed 500+ transactions to uncover sales trends and customer patterns, delivering actionable business insights through Power BI dashboards.",
              tags: ["Excel", "Power BI", "Data Analysis"],
              link: "https://github.com/MEGHA51003/retail-sales-analytics",
            },
            {
              title: "CampusNexus — College Management Platform",
              desc: "Web platform to manage student attendance, marks, and activity records. Functional, user-friendly interface with clean front-end design.",
              tags: ["HTML", "CSS", "JavaScript", "Excel"],
              link: "https://github.com/MEGHA51003/CampusNexus",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROFESSIONAL EXPERIENCE ── */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
            Background
          </p>
          <h2 className="text-3xl font-bold mb-16">Professional Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              role: "Freelance Web Developer & Automation Specialist",
              org: "Self Employed · Remote",
              period: "March 2026 – Present",
              points: [
                "Built responsive portfolio websites for professionals using HTML, CSS, JavaScript — live and deployed.",
                "Designed end-to-end business automation systems using Zapier — Google Forms → Sheets → Gmail.",
                "Available for international remote freelance projects globally.",
              ],
            },
            {
              role: "Market Research Intern",
              org: "ValueAdd Research & Analytics · Remote",
              period: "Jul 2025 – Nov 2025",
              points: [
                "Top performer — recognized for quality work and received cash incentives.",
                "Conducted market surveys and customer behavior analysis using Excel.",
                "Identified demographic trends to support research-driven insights.",
              ],
            },
            {
              role: "Entrepreneurship Lead",
              org: "µLearn Community",
              period: "2023 – 2025",
              points: [
                "Led entrepreneurship initiatives, workshops, and mentoring sessions.",
                "Mentored 150+ students, promoting innovation and business thinking.",
                "Sustained leadership for 2 years while managing 67+ member coordination.",
              ],
            },
            {
              role: "Project Management Virtual Experience",
              org: "Accenture North America",
              period: "Dec 2024",
              points: [
                "Completed product strategy simulation covering research and prioritization.",
                "Delivered structured project presentation demonstrating analytical thinking.",
              ],
            },
            {
              role: "Data Analytics Virtual Experience",
              org: "Accenture North America",
              period: "Jun 2024",
              points: [
                "Analyzed datasets to identify trends and actionable insights.",
                "Presented findings using PowerPoint and recorded walkthroughs.",
              ],
            },
          ].map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-6"
            >
              {/* Left: dot + line */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-slate-950 shrink-0 mt-1.5" />
                <div className="w-px flex-1 bg-slate-800 mt-2" />
              </div>
              {/* Right: content */}
              <div className="pb-8">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-slate-400 text-sm mb-3">
                  {exp.org} · {exp.period}
                </p>
                <ul className="text-slate-400 text-sm space-y-1">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-blue-500 shrink-0">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
            Credentials
          </p>
          <h2 className="text-3xl font-bold mb-12">Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Google AI Agent Intensive", org: "Google & Kaggle", link: "/certificates/google-ai-agent.png" },
            { title: "One Million Prompters", org: "Dubai Future Foundation (DFF)", link: "/certificates/One-million.pdf" },
            { title: "AI Fluency: Framework & Foundations", org: "Anthropic · University College Cork", link: null },
            { title: "Data Science Foundations", org: "IIT Madras", link: "/certificates/iit-data-science.pdf" },
            { title: "Prompt Engineering", org: "Infosys Springboard", link: null },
            { title: "Data Analytics Virtual Experience", org: "Accenture · Forage", link: "/certificates/accenture-data-analytics.pdf" },
            { title: "Excel Skills for Business", org: "Goldman Sachs · Forage", link: null },
            { title: "Project Management Virtual Experience", org: "Accenture · Forage", link: null },
          ].map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-2"
            >
              <h3 className="text-base font-semibold">{cert.title}</h3>
              <p className="text-slate-400 text-sm">{cert.org}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  className="text-sm text-blue-400 hover:underline mt-auto"
                >
                  View Certificate →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
            Academic
          </p>
          <h2 className="text-3xl font-bold mb-12">Education</h2>
        </motion.div>

        <div className="space-y-6">
          {[
            {
              degree: "B.Tech – Computer Science & Engineering",
              sub: "Minor: Electronics & Communication Engineering",
              school: "LBS Institute of Technology for Women, Thiruvananthapuram",
              period: "2021 – 2025 · CGPA: 7.43 / 10",
            },
            {
              degree: "Higher Secondary Education (PCMB)",
              sub: null,
              school: "Nirmala Bhavan Higher Secondary School, Thiruvananthapuram",
              period: "2019 – 2021 · 98%",
            },
            {
              degree: "Secondary School Education",
              sub: null,
              school: "Nirmala Bhavan Higher Secondary School, Thiruvananthapuram",
              period: "2018 – 2019 · 99%",
            },
          ].map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              {edu.sub && <p className="text-slate-400 text-sm">{edu.sub}</p>}
              <p className="text-slate-400 text-sm mt-1">{edu.school}</p>
              <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-slate-900 border border-blue-500/20 rounded-3xl p-10 text-center"
        >
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
            Let's Work Together
          </p>
          <h2 className="text-4xl font-bold mb-4">Ready to Connect</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-3 leading-relaxed">
            Open to onsite Data Analyst & Business Analyst roles in UAE, Dubai,
            Gulf, Singapore, and Europe. Available worldwide for remote freelance
            projects — portfolio websites, automation systems, and data dashboards.
          </p>
          <p className="text-emerald-400 text-sm mb-10 font-medium">
            ✈️ Valid passport · Ready to relocate immediately · Available for freelance globally
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:meghabsunil@gmail.com"
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/meghabs51"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MEGHA51003"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
            >
              GitHub
            </a>
            <a
              href="https://medium.com/@meghabsunil"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
            >
              Medium
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
            >
              View CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        © 2026 Megha B S · Trivandrum, India ·{" "}
        <a href="mailto:meghabsunil@gmail.com" className="hover:text-blue-400 transition">
          meghabsunil@gmail.com
        </a>
      </footer>
    </main>
  );
}