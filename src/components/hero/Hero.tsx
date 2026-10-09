"use client";

import { motion } from "framer-motion";

export default function Hero() {

  

  return (

    <>

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
                      className="about-crystal-button inline-flex min-h-12 items-center justify-center rounded-full border border-black/25 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 sm:px-7"
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

    </>

  );

}
