"use client";

export default function Speaking() {
return ( <section
   id="speaking"
   className="scroll-mt-24 border-t border-black/10 py-24 md:py-36"
 > <div className="container grid gap-10 md:grid-cols-[0.28fr_1fr] md:gap-12"> <span className="eyebrow text-black/45">
04 — Speaking & collaboration </span>

    <div>
      <h2 className="max-w-5xl text-5xl leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
        Bring ideas
        <br />
        <span className="display italic">into the room.</span>
      </h2>

      <div className="mt-8 grid gap-8 border-t border-black/15 pt-7 md:grid-cols-[1fr_0.7fr] md:pt-9">
        <p className="max-w-xl text-base leading-7 text-black/65">
          Crystal speaks and contributes to conversations around
          architecture, climate-responsive design, African cities,
          entrepreneurship and the built environment.
        </p>

        <div className="md:justify-self-end">
          <span className="eyebrow text-black/45">
            For organisers & collaborators
          </span>

          <p className="mt-3 max-w-sm text-sm leading-6 text-black/60">
            Use the contact pathways below to start a conversation about a
            talk, panel, interview or collaboration.
          </p>

          <a
            href="mailto:crystal@example.com?subject=Speaking%20Enquiry"
            className="group mt-6 inline-flex items-center gap-3 border-b border-black pb-2 text-xs uppercase tracking-[0.12em]"
          >
            Start a conversation

            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

);
}
