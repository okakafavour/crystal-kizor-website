

const works = [
  {
    title: "Garden Residence",
    category: "Architecture / Residential",
    image: "/images/work-exterior.png",
    alt: "Contemporary residence surrounded by a landscaped garden",
  },
  {
    title: "The Dining Space",
    category: "Interiors / Materiality",
    image: "/images/work-dining.jpeg",
    alt: "Dining space with timber, stone and garden views",
  },
  {
    title: "Material & Light",
    category: "Interiors / Craft",
    image: "/images/work-kitchen.jpeg",
    alt: "Contemporary kitchen with timber cabinetry and stone finishes",
  },
  {
    title: "Timber Wellness Space",
    category: "Architecture / Wellness",
    image: "/images/work-gym.jpeg",
    alt: "Timber-framed gym with garden views and natural materials",
  },
  {
    title: "Garden Utility Interior",
    category: "Interiors / Utility",
    image: "/images/work-utility.jpeg",
    alt: "Warm timber utility interior with garden views",
  },
  {
    title: "Selected Project Six",
    category: "Architecture / Interiors",
    image: "/images/work-project.jpeg",
    alt: "Selected architectural project",
  },
  {
    title: "Selected Project Seven",
    category: "Architecture / Interiors",
    image: "/images/work-project-7.jpeg",
    alt: "Selected architectural project",
  },
  {
    title: "Community & Impact",
    category: "Community / Social Impact",
    image: "/images/work-community.JPG",
    alt: "Community initiative and people coming together",
  },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#11110f]">
      <header className="border-b border-black/10">
        <div className="container flex min-h-[76px] items-center justify-between">
          <a
            href="/"
            className="text-sm font-semibold tracking-[-0.03em]"
          >
            CRYSTAL KIZOR<span className="ml-1 text-[#a47a4c]">.</span>
          </a>
          <a
            href="/#selected-works"
            className="text-[11px] uppercase tracking-[0.12em] hover:text-[#a47a4c]"
          >
            ← Back to home
          </a>
        </div>
      </header>

      <section className="container py-20 md:py-32">
        <span className="eyebrow text-black/45">
          Architecture / Interiors / Selected projects
        </span>

        <h1 className="mt-7 text-6xl leading-[0.9] tracking-[-0.06em] md:text-8xl">
          The work,
          <br />
          <span className="display italic">in focus.</span>
        </h1>

        <p className="mt-7 max-w-xl text-sm leading-7 text-black/60 md:text-base">
          A collection of spaces, materials and architectural ideas.
          Explore this selection of work and its relationship with
          context, light and everyday experience.
        </p>

        <div className="mt-14 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {works.map((work, index) => (
            <article key={work.image} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-[#e4dfd6]">
                <img
                  src={work.image}
                  alt={work.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex items-start justify-between gap-3 border-b border-black/15 py-4">
                <div>
                  <h2 className="text-sm font-medium">{work.title}</h2>
                  <p className="mt-1 text-xs text-black/50">
                    {work.category}
                  </p>
                </div>
                <span className="text-xs text-black/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-black/15 pt-8">
          <p className="max-w-xl text-sm leading-6 text-black/60">
            More projects can be added as additional images and
            verified project information become available.
          </p>
          <a
            href="/#contact"
            className="mt-6 inline-flex items-center gap-3 border-b border-black pb-2 text-[11px] uppercase tracking-[0.12em] hover:text-[#a47a4c]"
          >
            Discuss a project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="bg-[#11110f] py-8 text-[#f4f1ea]">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="text-sm font-semibold">
            CRYSTAL KIZOR<span className="text-[#c5a47e]">.</span>
          </a>
          <span className="text-[10px] uppercase tracking-[0.13em] text-white/45">
            Architecture / Design / Ideas / Impact
          </span>
        </div>
      </footer>
    </main>
  );
}