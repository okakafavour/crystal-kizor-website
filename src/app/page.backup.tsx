"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Ideas", href: "#ideas" },
  { label: "About", href: "#about" },
  { label: "Speaking", href: "#speaking" },
];

const ideaCards = [
  {
    number: "01",
    category: "Architecture & climate",
    title: "Designing for the places we call home.",
    description:
      "Exploring climate-responsive architecture, African cities and the choices that shape the built environment.",
  },
  {
    number: "02",
    category: "Learning & practice",
    title: "A better way to grow as an architect.",
    description:
      "Ideas for building a thoughtful, resilient and meaningful career through The Effective Architect.",
  },
  {
    number: "03",
    category: "Research & perspective",
    title: "Questions that move the work forward.",
    description:
      "Research, writing and conversations connecting design, entrepreneurship, culture and human experience.",
  },
];

const contactPaths = [
  { number: "01", label: "I need an architect or design partner", href: "#studio-coka" },
  { number: "02", label: "I’m looking for a speaker", href: "#speaking" },
  { number: "03", label: "I want to learn and grow", href: "#effective-architect" },
  { number: "04", label: "I’m interested in furniture and products", href: "#elevated" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top" className="overflow-hidden">
      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[#f4f1ea]/90 backdrop-blur-md">
        <div className="container flex min-h-[76px] items-center justify-between">
          <a
            href="#top"
            onClick={closeMenu}
            className="text-sm font-semibold tracking-[-0.03em]"
            aria-label="Crystal Kizor home"
          >
            CRYSTAL KIZOR<span className="ml-1 text-[#a47a4c]">.</span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.14em] transition-colors hover:text-[#a47a4c]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-black/25 px-5 py-3 text-[11px] uppercase tracking-[0.12em] transition-colors hover:border-[#11110f] hover:bg-[#11110f] hover:text-[#f4f1ea]"
            >
              Connect <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="text-xl" aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden border-t border-black/10 bg-[#f4f1ea] md:hidden"
            >
              <div className="container flex flex-col py-3">
                {[...navItems, { label: "Connect", href: "#contact" }].map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between border-b border-black/10 py-4 text-xs uppercase tracking-[0.14em]"
                  >
                    <span>{item.label}</span>
                    <span className="text-[#a47a4c]">0{index + 1} ↗</span>
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen pt-28" aria-labelledby="hero-heading">
        <div className="container flex min-h-[calc(100vh-7rem)] flex-col justify-between pb-8 pt-5 md:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-between border-t border-black/15 pt-4"
          >
            <span className="eyebrow">Architect / Designer / Researcher</span>
            <span className="hidden text-xs text-black/50 sm:block">Lagos, Nigeria</span>
          </motion.div>

          <div className="grid items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.82fr] lg:gap-16 lg:py-16">
            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="eyebrow mb-6 text-black/50 md:mb-8"
              >
                A practice built around ideas
              </motion.p>
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.18 }}
                className="max-w-4xl text-[clamp(3.65rem,8.8vw,8.6rem)] leading-[0.81] tracking-[-0.065em]"
              >
                <span className="block">BUILDING</span>
                <span className="display ml-[7vw] block italic">ideas,</span>
                <span className="block">SPACES,</span>
                <span className="display ml-[12vw] block italic">&amp; impact.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.48 }}
                className="mt-8 max-w-lg md:mt-10"
              >
                <p className="text-sm leading-6 text-black/65 md:text-base md:leading-7">
                  Crystal Kizor is an architect, designer, researcher, entrepreneur and speaker working across the built environment, education, design and human development.
                </p>
                <div className="mt-7 flex flex-wrap gap-3"> 
                  <a
                    href="#work"
                    style={{
                      backgroundColor: "#11110f",
                      color: "#f4f1ea",
                      WebkitTextFillColor: "#f4f1ea",
                    }}
                    className="hero-work-button group inline-flex min-h-12 items-center justify-center gap-4 rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 hover:!text-white sm:px-7"
                  >
                    <span style={{ color: "#f4f1ea", WebkitTextFillColor: "#f4f1ea" }}>
                      Explore the work
                    </span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                  
                  <a
                    href="#about"
                    style={{
                      backgroundColor: "transparent",
                      color: "#11110f",
                    }}
                    className="hero-work-button inline-flex min-h-12 items-center justify-center rounded-full border border-black/25 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 hover:!text-white sm:px-7"
                  >
                    About Crystal
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="relative mx-auto w-full max-w-[550px] lg:mr-0"
            >
              <div className="absolute -left-4 -top-4 hidden h-16 w-16 border-l border-t border-black/25 lg:block xl:-left-6 xl:-top-6" />
              <div className="relative aspect-[4/4.65] overflow-hidden bg-[#ddd7cc]">
                <img
                  src="/images/crystal-hero.png"
                  alt="Portrait of Crystal Kizor"
                  fetchPriority="high"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/50 to-transparent p-5 text-white md:p-6">
                  <span className="eyebrow">Crystal Kizor</span>
                  <span className="text-xs text-white/80">Architecture · Design · Ideas</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 hidden h-16 w-16 border-b border-r border-black/25 lg:block xl:-bottom-6 xl:-right-6" />
              <p className="mt-5 max-w-xs text-xs leading-5 text-black/50 lg:ml-auto lg:max-w-[240px]">
                Connecting disciplines through design, knowledge and purposeful work.
              </p>
            </motion.div>
          </div>

          <div className="flex items-center justify-between border-t border-black/15 pt-4">
            <span className="eyebrow max-w-[55%] text-black/45">Architecture / Design / Ideas / Impact</span>
            <a href="#ecosystem" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.13em] sm:text-xs">
              Scroll to explore <span className="transition-transform group-hover:translate-y-1" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section id="ecosystem" className="border-t border-black/10 py-24 md:py-40">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-[0.32fr_1fr] md:gap-12">
            <div><span className="eyebrow text-black/45">01 — The bigger picture</span></div>
            <div>
              <h2 className="max-w-5xl text-5xl leading-[0.91] tracking-[-0.055em] md:text-7xl lg:text-8xl">
                One vision.<br /><span className="display italic">Many expressions.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-7 text-black/65 md:mt-10 md:text-lg md:leading-8">
                Architecture, product design, education, research and human development can look like separate disciplines. Here, they connect through one curiosity: how ideas can shape the way people live, learn, build and imagine what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK & VENTURES */}
      <section id="work" className="scroll-mt-24 border-t border-black/10 bg-[#e4dfd6] py-24 md:py-36">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow text-black/45">02 — Work & ventures</span>
              <h2 className="mt-7 text-5xl leading-[0.9] tracking-[-0.055em] md:mt-8 md:text-7xl lg:text-8xl">A connected<br /><span className="display italic">body of work.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-black/60 md:pb-2 md:text-base">
              Distinct initiatives, connected by design, learning and a commitment to creating meaningful impact.
            </p>
          </div>

          <div className="mt-16 border-t border-black/20 md:mt-20">
            <div className="grid gap-5 py-7 md:grid-cols-[0.28fr_1fr] md:py-9">
              <span className="eyebrow text-black/45">01 / Design</span>
              <div>
                <h3 className="display text-4xl md:text-5xl">Shaping spaces &amp; objects.</h3>
                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  <a id="studio-coka" href="https://studiocoka.com/studio" target="_blank" rel="noreferrer" className="group flex min-h-[250px] flex-col border border-black/15 bg-[#f4f1ea] p-6 transition-colors duration-300 hover:!bg-[#a47a4c] hover:!text-white md:min-h-[280px] md:p-8">                    <div className="flex items-start justify-between gap-4"><span className="eyebrow opacity-50">Architecture / Interiors</span><span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span></div>
                    <div className="mt-auto pt-12"><h4 className="text-2xl tracking-tight md:text-3xl">Studio COKA</h4><p className="mt-3 max-w-sm text-sm leading-6 opacity-65">Architecture, interior design and construction shaped by context and climate.</p><span className="mt-7 inline-block text-[10px] uppercase tracking-[0.13em]">Explore the studio →</span></div>
                  </a>
                  <a id="elevated" href="#contact" className="group flex min-h-[250px] flex-col border border-black/15 bg-[#d4c9b8] p-6 transition-colors duration-300 hover:!bg-[#a47a4c] hover:!text-white md:min-h-[280px] md:p-8">
                    <div className="flex items-start justify-between gap-4"><span className="eyebrow opacity-55">Furniture / Products</span><span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span></div>
                    <div className="mt-auto pt-12"><h4 className="text-2xl tracking-tight md:text-3xl">ELEvated</h4><p className="mt-3 max-w-sm text-sm leading-6 opacity-70">Contemporary furniture and product design rooted in African context, materials and ideas.</p><span className="mt-7 inline-block text-[10px] uppercase tracking-[0.13em]">Discover the brand →</span></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-5 border-t border-black/20 py-7 md:grid-cols-[0.28fr_1fr] md:py-9">
              <span className="eyebrow text-black/45">02 / Knowledge</span>
              <div>
                <h3 className="display text-4xl md:text-5xl">Sharing what we learn.</h3>
                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  <a id="effective-architect" href="#ideas" className="group flex min-h-[230px] flex-col border border-black/15 bg-[#f4f1ea] p-6 transition-colors duration-300 hover:!bg-[#a47a4c] hover:!text-white md:p-8">
                    <span className="eyebrow opacity-50">Education / Media</span><div className="mt-auto pt-10"><h4 className="text-2xl">The Effective Architect</h4><p className="mt-3 text-sm leading-6 opacity-65">Learning and resources to help architects and built-environment professionals grow.</p><span className="mt-6 inline-block text-[10px] uppercase tracking-[0.13em]">Explore ideas →</span></div>
                  </a>
                  <a id="speaking" href="#speaking" className="group flex min-h-[230px] flex-col border border-black/15 bg-[#f4f1ea] p-6 transition-colors duration-300 hover:!bg-[#a47a4c] hover:!text-white md:p-8">
                    <span className="eyebrow opacity-50">Talks / Conversations</span><div className="mt-auto pt-10"><h4 className="text-2xl">Speaking</h4><p className="mt-3 text-sm leading-6 opacity-65">Talks on architecture, climate-responsive design, African cities, design and entrepreneurship.</p><span className="mt-6 inline-block text-[10px] uppercase tracking-[0.13em]">Speaking enquiries →</span></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-5 border-t border-black/20 py-7 md:grid-cols-[0.28fr_1fr] md:py-9">
              <span className="eyebrow text-black/45">03 / Impact</span>
              <div>
                <h3 className="display text-4xl md:text-5xl">Creating room for possibility.</h3>
                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  <a id="ako-alliance" href="#contact" className="group border border-black/15 p-6 transition-colors duration-300 hover:!bg-[#a47a4c] hover:!text-white md:p-8"><span className="eyebrow text-black/45">Education / Opportunity</span><h4 className="mt-10 text-2xl">AKO Alliance</h4><p className="mt-3 max-w-sm text-sm leading-6 text-black/60">An initiative focused on expanding access to education and creating opportunities for children and young people.</p><span className="mt-6 inline-block text-[10px] uppercase tracking-[0.13em]">Learn about the work ↗</span></a>
                  <a id="alive-and-free" href="#contact" className="group border border-black/15 p-6 transition-colors duration-300 hover:!bg-[#a47a4c] hover:!text-white md:p-8"><span className="eyebrow text-black/45">Identity / Purpose</span><h4 className="mt-10 text-2xl">Alive and Free</h4><p className="mt-3 max-w-sm text-sm leading-6 text-black/60">A Christian youth movement helping young people walk in truth, healing, freedom, identity and purpose in Christ.</p><span className="mt-6 inline-block text-[10px] uppercase tracking-[0.13em]">Learn about the movement ↗</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SELECTED WORKS */}
      <section
        id="selected-works"
        className="border-t border-black/10 py-24 md:py-36"
      >
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow text-black/45">
                Selected works / 01
              </span>
              <h2 className="mt-7 text-5xl leading-[0.9] tracking-[-0.055em] md:text-7xl lg:text-8xl">
                Spaces shaped
                <br />
                <span className="display italic">by ideas.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-black/60 md:pb-2 md:text-base">
              A selection of architectural spaces and environments
              exploring material, light, context and everyday life.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
            <a
              href="/works"
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#e4dfd6]">
                <img
                  src="/images/work-exterior.png"
                  alt="Contemporary architectural residence set within a landscaped garden"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-black/15 py-4">
                <div>
                  <h3 className="text-sm font-medium">Garden Residence</h3>
                  <p className="mt-1 text-xs text-black/50">
                    Architecture / Residential
                  </p>
                </div>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </a>

            <a
              href="/works"
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#e4dfd6]">
                <img
                  src="/images/work-dining.png"
                  alt="Contemporary dining interior with natural timber, warm stone and garden views"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-black/15 py-4">
                <div>
                  <h3 className="text-sm font-medium">The Dining Space</h3>
                  <p className="mt-1 text-xs text-black/50">
                    Interiors / Materiality
                  </p>
                </div>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </a>

            <a
              href="/works"
              className="group block sm:col-span-2 lg:col-span-1"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#e4dfd6]">
                <img
                  src="/images/work-kitchen.png"
                  alt="Warm contemporary kitchen with timber cabinetry and natural stone finishes"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-black/15 py-4">
                <div>
                  <h3 className="text-sm font-medium">Material & Light</h3>
                  <p className="mt-1 text-xs text-black/50">
                    Interiors / Craft
                  </p>
                </div>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </a>
          </div>

          <div className="mt-10 flex justify-start md:mt-12 md:justify-end">
            <a
              href="/works"
              className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#11110f] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#f4f1ea] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a47a4c] sm:px-7"
            >
              View All Works
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* IDEAS */}
      <section id="ideas" className="scroll-mt-24 border-t border-black/10 bg-[#171714] py-24 text-[#f4f1ea] md:py-36">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-[0.28fr_1fr]">
            <span className="eyebrow text-white/45">03 — Ideas & research</span>
            <div>
              <h2 className="display max-w-5xl text-5xl leading-[0.92] md:text-7xl lg:text-8xl">Ideas worth<br /><span className="italic text-[#c5a47e]">building on.</span></h2>
              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 md:mt-9 md:text-base">
                Research, writing and media are spaces to question assumptions, share knowledge and explore how the built environment shapes everyday life.
              </p>
            </div>
          </div>
          <div className="mt-14 border-t border-white/20 md:mt-20">
            {ideaCards.map((card) => (
              <motion.article key={card.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="grid gap-4 border-b border-white/20 py-7 md:grid-cols-[0.28fr_0.72fr_1fr] md:gap-8 md:py-9">
                <span className="eyebrow text-white/40">{card.number} / {card.category}</span>
                <h3 className="display text-3xl leading-tight md:text-4xl">{card.title}</h3>
                <p className="max-w-md text-sm leading-6 text-white/60 md:justify-self-end">{card.description}</p>
              </motion.article>
            ))}
          </div>
          <p className="mt-7 text-xs leading-5 text-white/40">A selection of themes across Crystal’s work; new writing and resources can be added here as they become available.</p>
        </div>
      </section>

      {/* SPEAKING */}
      <section id="speaking" className="scroll-mt-24 border-t border-black/10 py-24 md:py-36">
        <div className="container grid gap-10 md:grid-cols-[0.28fr_1fr] md:gap-12">
          <span className="eyebrow text-black/45">04 — Speaking & collaboration</span>
          <div>
            <h2 className="max-w-5xl text-5xl leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">Bring ideas<br /><span className="display italic">into the room.</span></h2>
            <div className="mt-8 grid gap-8 border-t border-black/15 pt-7 md:grid-cols-[1fr_0.7fr] md:pt-9">
              <p className="max-w-xl text-base leading-7 text-black/65">Crystal speaks and contributes to conversations around architecture, climate-responsive design, African cities, entrepreneurship and the built environment.</p>
              <div className="md:justify-self-end"><span className="eyebrow text-black/45">For organisers & collaborators</span><p className="mt-3 max-w-sm text-sm leading-6 text-black/60">Use the contact pathways below to start a conversation about a talk, panel, interview or collaboration.</p><a href="#contact" className="group mt-6 inline-flex items-center gap-3 border-b border-black pb-2 text-xs uppercase tracking-[0.12em]">Start a conversation <span className="transition-transform group-hover:translate-x-1">→</span></a></div>
            </div>
          </div>
        </div>
      </section>

      
      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-black/10 bg-[#e4dfd6] py-24 md:py-36"
      >
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-20">
            {/* Crystal's portrait */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-black/30 md:-left-5 md:-top-5" />

              <div className="relative aspect-[4/5] overflow-hidden bg-[#d5cec2]">
                <img
                  src="/images/crystal-about.png"
                  alt="Crystal Kizor"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-black/30 md:-bottom-5 md:-right-5" />

              <p className="mt-6 text-[10px] uppercase tracking-[0.16em] text-black/50">
                Architecture · Design · Ideas · Impact
              </p>
            </motion.div>

            {/* About copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="eyebrow text-black/45">
                05 — About Crystal
              </span>

              <h2 className="mt-6 text-5xl leading-[0.92] tracking-[-0.05em] md:text-6xl lg:text-8xl">
                Many disciplines.
                <br />
                <span className="display italic">A human focus.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-black/70 md:text-lg md:leading-8">
                Crystal Kizor’s work spans architecture, design,
                entrepreneurship, research, speaking and initiatives
                focused on learning and human development. Across these
                fields, the common thread is an interest in how ideas
                become places, products, knowledge and opportunities
                that matter to people.
              </p>

              <div className="mt-8 border-t border-black/20 pt-6">
                <p className="eyebrow text-black/45">
                  A connected practice
                </p>

                <p className="mt-3 max-w-lg text-sm leading-6 text-black/60">
                  From the spaces we inhabit to the knowledge we share,
                  each part of the ecosystem offers a different way to
                  turn intention into impact.
                </p>

                <a
                  href="#work"
                  className="hero-work-button group mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.12em] hover:!text-white"
                >
                  Explore the initiatives
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 border-t border-black/10 bg-[#b18b63] py-24 md:py-36">
        <div className="container">
          <span className="eyebrow text-black/60">06 — Find your way in</span>
          <h2 className="mt-7 max-w-5xl text-5xl leading-[0.91] tracking-[-0.055em] md:mt-8 md:text-7xl lg:text-8xl">Every good idea<br /><span className="display italic">starts somewhere.</span></h2>
          <p className="mt-6 max-w-lg text-sm leading-6 text-black/65 md:text-base">Choose the path that best fits what you’re looking for.</p>
          <div className="mt-12 grid border-t border-black/25 md:mt-16 md:grid-cols-2">
            {contactPaths.map((item) => (
              <a key={item.number} href={item.href} className="group flex items-center justify-between gap-5 border-b border-black/25 py-5 text-xs uppercase tracking-[0.08em] sm:text-sm md:px-4 md:py-7">
                <span><span className="mr-4 text-black/45">{item.number} /</span>{item.label}</span>
                <span className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            ))}
            <a href="#ideas" className="group flex items-center justify-between gap-5 border-b border-black/25 py-5 text-xs uppercase tracking-[0.08em] sm:text-sm md:px-4 md:py-7"><span><span className="mr-4 text-black/45">05 /</span>Research, writing & ideas</span><span className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></a>
            <a href="#ecosystem" className="group flex items-center justify-between gap-5 border-b border-black/25 py-5 text-xs uppercase tracking-[0.08em] sm:text-sm md:px-4 md:py-7"><span><span className="mr-4 text-black/45">06 /</span>Explore the full ecosystem</span><span className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></a>
          </div>
          <p className="mt-6 text-xs leading-5 text-black/55">External destinations and direct contact details can be added when the official links are confirmed.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#11110f] py-8 text-[#f4f1ea] md:py-10">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="text-sm font-semibold tracking-[-0.02em]">CRYSTAL KIZOR<span className="ml-1 text-[#c5a47e]">.</span></a>
          <span className="text-[10px] uppercase tracking-[0.13em] text-white/45">Architecture / Design / Ideas / Impact</span>
          <div className="flex items-center justify-between gap-6 text-[10px] uppercase tracking-[0.13em] text-white/45 md:justify-end"><a href="#top" className="transition-colors hover:text-white">Back to top ↑</a><span>© {new Date().getFullYear()} Crystal Kizor</span></div>
        </div>
      </footer>
    </main>
  );
}
