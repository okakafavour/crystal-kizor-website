"use client";

export default function Footer() {

  

  return (

    <>

<footer className="bg-[#11110f] py-8 text-[#f4f1ea] md:py-10">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="text-sm font-semibold tracking-[-0.02em]">CRYSTAL KIZOR<span className="ml-1 text-[#c5a47e]">.</span></a>
          <span className="text-[10px] uppercase tracking-[0.13em] text-white/45">Architecture / Design / Ideas / Impact</span>
          <div className="flex items-center justify-between gap-6 text-[10px] uppercase tracking-[0.13em] text-white/45 md:justify-end"><a href="#top" className="transition-colors hover:text-white">Back to top ↑</a><span>© 2026 Crystal Kizor</span></div>
        </div>
      </footer>

    </>

  );

}
