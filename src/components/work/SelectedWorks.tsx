"use client";

export default function SelectedWorks() {

  

  return (

    <>

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
                  src="/images/work-dining.jpeg"
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
                  src="/images/work-kitchen.jpeg"
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
            className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full border border-black/20 bg-[#f4f1ea] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#11110f] transition-all duration-300 hover:-translate-y-1 hover:!border-[#a47a4c] hover:!bg-[#a47a4c] hover:!text-white sm:px-7"
          >
            View All Works
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          </div>
        </div>
      </section>

    </>

  );

}
