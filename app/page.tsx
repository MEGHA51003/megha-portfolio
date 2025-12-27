"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-semibold leading-tight mb-6">
            Megha B S
            <span className="block text-blue-400 text-4xl mt-2">
              Data & Business Insights Professional
            </span>
          </h1>

          <p className="text-slate-400 leading-relaxed max-w-xl mb-8">
            Finance and data analyst skilled in financial analysis, KPI modelling,
            stakeholder sentiment intelligence, and multi-source analytics using
            Python, SQL, Excel, and Power BI.
          </p>

          <div className="flex gap-4">
            <a
              href="mailto:meghabsunil@gmail.com"
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
            >
              Get in Touch
            </a>

            <a
              href="https://linkedin.com/in/meghabs51"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
            >
              View LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Analytics"
            className="object-cover w-full h-full"
          />
        </motion.div>

      </section>
      {/* CORE COMPETENCIES */}
<section className="max-w-7xl mx-auto px-6 py-24">
  <h2 className="text-3xl font-semibold mb-12">
    Core Competencies
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Card 1 */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-xl font-medium mb-4 text-blue-400">
        Analytics & Financial Intelligence
      </h3>
      <ul className="text-slate-400 space-y-2">
        <li>Financial Modelling & Ratio Analysis</li>
        <li>Market & Customer Research</li>
        <li>KPI Frameworks & Business Insights</li>
        <li>Sentiment Analysis</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-xl font-medium mb-4 text-blue-400">
        Business & Strategy
      </h3>
      <ul className="text-slate-400 space-y-2">
        <li>Problem Structuring & Analytical Thinking</li>
        <li>Stakeholder Analysis</li>
        <li>Strategic Communication & Data Storytelling</li>
        <li>Leadership & Team Collaboration</li>
      </ul>
    </div>

    {/* Card 3 */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-xl font-medium mb-4 text-blue-400">
        Tools & Technologies
      </h3>
      <ul className="text-slate-400 space-y-2">
        <li>Python, SQL, Advanced Excel</li>
        <li>Power BI</li>
        <li>Exploratory Data Analysis</li>
        <li>Python Automation & AI Workflows</li>
      </ul>
    </div>

  </div>
</section>
{/* PROFESSIONAL EXPERIENCE */}
<section className="max-w-6xl mx-auto px-6 py-24">
  <h2 className="text-3xl font-semibold mb-16">
    Professional Experience
  </h2>

  <div className="relative border-l border-slate-800 pl-8 space-y-12">

    {/* Experience 1 */}
    <div className="relative">
     <span className="absolute -left-[20px] top-1.5 w-4 h-4 bg-blue-500 rounded-full"></span>

      <h3 className="text-xl font-medium">
        Market Research Intern
      </h3>
      <p className="text-slate-400 text-sm mb-2">
        ValueAdd Research & Analytics · Remote · Jul 2025 – Nov 2025
      </p>
      <ul className="text-slate-400 list-disc ml-5 space-y-1">
        <li>Conducted market surveys and customer behavior analysis using Excel.</li>
        <li>Identified demographic trends to support research-driven insights.</li>
      </ul>
    </div>

    {/* Experience 2 */}
    <div className="relative">
      <span className="absolute -left-[20px] top-1.5 w-4 h-4 bg-blue-500 rounded-full"></span>

      <h3 className="text-xl font-medium">
        Entrepreneurship Lead
      </h3>
      <p className="text-slate-400 text-sm mb-2">
        µLearn Community · 2023 – 2025
      </p>
      <ul className="text-slate-400 list-disc ml-5 space-y-1">
        <li>Led entrepreneurship initiatives, workshops, and mentoring sessions.</li>
        <li>Mentored 150+ students, promoting innovation and business thinking.</li>
      </ul>
    </div>

    {/* Experience 3 */}
    <div className="relative">
      <span className="absolute -left-[20px] top-1.5 w-4 h-4 bg-blue-500 rounded-full"></span>

      <h3 className="text-xl font-medium">
        Project Management Virtual Experience
      </h3>
      <p className="text-slate-400 text-sm mb-2">
        Accenture North America · Dec 2024
      </p>
      <ul className="text-slate-400 list-disc ml-5 space-y-1">
        <li>Completed product strategy simulation covering research and prioritization.</li>
        <li>Delivered structured project presentation demonstrating analytical thinking.</li>
      </ul>
    </div>

    {/* Experience 4 */}
    <div className="relative">
      <span className="absolute -left-[20px] top-1.5 w-4 h-4 bg-blue-500 rounded-full"></span>

      <h3 className="text-xl font-medium">
        Excel for Business Virtual Experience
      </h3>
      <p className="text-slate-400 text-sm mb-2">
        Goldman Sachs · Jul 2024
      </p>
      <ul className="text-slate-400 list-disc ml-5 space-y-1">
        <li>Applied advanced Excel functions to solve business problems.</li>
        <li>Streamlined reporting workflows using data-driven techniques.</li>
      </ul>
    </div>

    {/* Experience 5 */}
    <div className="relative">
     <span className="absolute -left-[20px] top-1.5 w-4 h-4 bg-blue-500 rounded-full"></span>

      <h3 className="text-xl font-medium">
        Data Analytics Virtual Experience
      </h3>
      <p className="text-slate-400 text-sm mb-2">
        Accenture North America · Jun 2024
      </p>
      <ul className="text-slate-400 list-disc ml-5 space-y-1">
        <li>Analyzed datasets to identify trends and actionable insights.</li>
        <li>Presented findings using PowerPoint and recorded walkthroughs.</li>
      </ul>
    </div>

  </div>
</section>
{/* FEATURED PROJECTS */}
<section className="max-w-7xl mx-auto px-6 py-24">
  <h2 className="text-3xl font-semibold mb-12">
    Featured Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Project 1 */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
      <h3 className="text-xl font-medium mb-3">
        Advanced Financial Insights Platform
      </h3>
      <p className="text-slate-400 mb-4">
        Developing a multi-factor financial analytics platform combining company
        fundamentals, ratio models, and sentiment signals to generate investment insights.
      </p>
      <p className="text-sm text-slate-500 mb-4">
        Python · SQL · Financial Modeling · Sentiment Analysis
      </p>
      
    </div>

    {/* Project 2 */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
      <h3 className="text-xl font-medium mb-3">
        Automated Certificate Generator
      </h3>
      <p className="text-slate-400 mb-4">
        Built a Python automation tool that generates certificates from structured data,
        reducing manual effort and eliminating errors.
      </p>
      <p className="text-sm text-slate-500 mb-4">
        Python · OpenCV · Automation · Excel
      </p>
      <a
    href="https://github.com/MEGHA51003/certimate"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-auto pt-4 text-blue-400 hover:underline"
  >

        View Project →
      </a>
    </div>

    {/* Project 3 */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
      <h3 className="text-xl font-medium mb-3">
        Retail Sales Analytics Dashboard
      </h3>
      <p className="text-slate-400 mb-4">
        Analyzed 500+ transactions to uncover sales trends and customer patterns,
        delivering actionable business insights through dashboards.
      </p>
      <p className="text-sm text-slate-500 mb-4">
        Excel · Power BI · Data Analysis
      </p>
      <a
    href="https://github.com/MEGHA51003/retail-sales-analytics"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-auto pt-4 text-blue-400 hover:underline"
  >
        View Project →
      </a>
    </div>
    {/* Project 4 */}
<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
  <h3 className="text-xl font-medium mb-3">
    CampusNexus – Web-based College Management Platform
  </h3>

  <p className="text-slate-400 mb-4">
    Built a web platform to manage student attendance, marks, and activity
    records. Designed a functional, user-friendly interface using basic
    front-end technologies.
  </p>

  <p className="text-sm text-slate-500 mb-4">
    HTML · CSS · JavaScript · Excel
  </p>

 <a
    href="https://github.com/MEGHA51003/CampusNexus"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-blue-400 hover:underline"
  >
    View Project →
  </a>
</div>


  </div>
</section>
{/* CERTIFICATIONS */}
<section className="max-w-7xl mx-auto px-6 py-24">
  <h2 className="text-3xl font-semibold mb-12">
    Certifications
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-lg font-medium mb-2">
        Google AI Agent Intensive
      </h3>
      <p className="text-slate-400 text-sm">
        Google & Kaggle
      </p>
      <a
    href="/certificates/google-ai-agent.png"
    target="_blank"
    className="text-sm text-blue-400 hover:underline"
  >
    View Certificate →
  </a>
    </div>
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-lg font-medium mb-2">
        One Million Prompters
      </h3>
      <p className="text-slate-400 text-sm">
        Dubai Future Foundation (DFF)
      </p>
      <a
    href="/certificates/One-million.pdf"
    target="_blank"
    className="text-sm text-blue-400 hover:underline"
  >
    View Certificate →
  </a>
      
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-lg font-medium mb-2">
        Data Science Foundations
      </h3>
      <p className="text-slate-400 text-sm">
        IIT Madras
      </p>
      <a
    href="/certificates/iit-data-science.pdf"
    target="_blank"
    className="text-sm text-blue-400 hover:underline"
  >
    View Certificate →
  </a>
      
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-lg font-medium mb-2">
        Prompt Engineering
      </h3>
      <p className="text-slate-400 text-sm">
        Infosys Springboard
      </p>
      
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-lg font-medium mb-2">
        Project Management Virtual Experience
      </h3>
      <p className="text-slate-400 text-sm">
        Accenture · Forage
      </p>

    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-lg font-medium mb-2">
        Data Analytics Virtual Experience
      </h3>
      <p className="text-slate-400 text-sm">
        Accenture · Forage
      </p>
      <a
    href="/certificates/accenture-data-analytics.pdf"
    target="_blank"
    className="text-sm text-blue-400 hover:underline"
  >
    View Certificate →
  </a>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-lg font-medium mb-2">
        Excel Skills for Business
      </h3>
      <p className="text-slate-400 text-sm">
        Goldman Sachs · Forage
      </p>
    </div>

  </div>
</section>
{/* EDUCATION */}
<section className="max-w-6xl mx-auto px-6 py-24">
  <h2 className="text-3xl font-semibold mb-12">
    Education
  </h2>

  <div className="space-y-8">

    {/* Degree */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-xl font-medium">
        B.Tech – Computer Science & Engineering
      </h3>
      <p className="text-slate-400">
        Minor: Electronics & Communication Engineering
      </p>
      <p className="text-slate-400 text-sm mt-1">
        LBS Institute of Technology for Women, Thiruvananthapuram
      </p>
      <p className="text-slate-500 text-sm mt-2">
        2021 – 2025 · CGPA: 7.43 / 10
      </p>
    </div>

    {/* Higher Secondary */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-xl font-medium">
        Higher Secondary Education (PCMB)
      </h3>
      <p className="text-slate-400 text-sm mt-1">
        Nirmala Bhavan Higher Secondary School, Thiruvananthapuram
      </p>
      <p className="text-slate-500 text-sm mt-2">
        2019 – 2021 · Percentage: 98%
      </p>
    </div>

    {/* Secondary School */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-xl font-medium">
        Secondary School Education
      </h3>
      <p className="text-slate-400 text-sm mt-1">
        Nirmala Bhavan Higher Secondary School, Thiruvananthapuram
      </p>
      <p className="text-slate-500 text-sm mt-2">
        2018 – 2019 · Percentage: 99%
      </p>
    </div>

  </div>
</section>
{/* LANGUAGES */}
<section className="max-w-6xl mx-auto px-6 py-24">
  <h2 className="text-3xl font-semibold mb-12">
    Languages
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
      <h3 className="text-lg font-medium">
        Malayalam
      </h3>
      <p className="text-slate-400 text-sm mt-1">
        Native
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
      <h3 className="text-lg font-medium">
        English
      </h3>
      <p className="text-slate-400 text-sm mt-1">
        Fluent
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
      <h3 className="text-lg font-medium">
        Hindi
      </h3>
      <p className="text-slate-400 text-sm mt-1">
        Intermediate
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
      <h3 className="text-lg font-medium">
        German
      </h3>
      <p className="text-slate-400 text-sm mt-1">
        Basic (A1)
      </p>
    </div>

  </div>
</section>
{/* CONTACT */}
<section className="max-w-6xl mx-auto px-6 py-24">
  <h2 className="text-3xl font-semibold mb-6">
    Let’s Connect
  </h2>

  <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed">
    Passionate about business strategy, analytics, and transforming complex
    data into actionable insights. Open to analyst roles, research
    opportunities, and impactful collaborations.
  </p>

  <div className="flex flex-wrap gap-4">

    <a
      href="mailto:meghabsunil@gmail.com"
      className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
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


    {/* Resume (optional – we’ll add file next) */}
    <a
      href="/Megha_BS_CV_DBA.pdf"
      target="_blank"
      className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
    >
      View CV
    </a>

  </div>
</section>








    </main>
  );
}
