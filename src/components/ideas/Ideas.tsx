"use client";

import { motion } from "framer-motion";

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

export default function Ideas() {

  

  return (

    <>

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

    </>

  );

}
