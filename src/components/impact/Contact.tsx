"use client";

const contactPaths = [
  { number: "01", label: "I need an architect or design partner", href: "#studio-coka" },
  { number: "02", label: "I’m looking for a speaker", href: "#speaking" },
  { number: "03", label: "I want to learn and grow", href: "#effective-architect" },
  { number: "04", label: "I’m interested in furniture and products", href: "#elevated" },
];

export default function Contact() {

  

  return (

    <>

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

    </>

  );

}
