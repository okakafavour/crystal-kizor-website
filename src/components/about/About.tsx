"use client";

import { motion } from "framer-motion";

export default function About() {

  

  return (

    <>

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
                  className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full border border-black/20 bg-[#f4f1ea] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#11110f] transition-all duration-300 hover:-translate-y-1 hover:!border-[#a47a4c] hover:!bg-[#a47a4c] hover:!text-white sm:px-7"
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

    </>

  );

}
