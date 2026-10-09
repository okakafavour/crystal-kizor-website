"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
{ label: "Work", href: "#work" },
{ label: "Ideas", href: "#ideas" },
{ label: "About", href: "#about" },
{ label: "Speaking", href: "#speaking" },
];

export default function Navigation() {
const [menuOpen, setMenuOpen] = useState(false);

const handleNavigation = (
event: React.MouseEvent<HTMLAnchorElement>,
href: string
) => {
event.preventDefault();
setMenuOpen(false);


const targetId = href.substring(1);

window.history.replaceState(null, "", href);

// Wait briefly for the mobile menu to begin closing.
window.setTimeout(() => {
  const target = document.getElementById(targetId);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}, 250);


};

return ( <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[#f4f1ea]/90 backdrop-blur-md"> <div className="container flex min-h-[76px] items-center justify-between">
<a
href="#top"
onClick={(event) => handleNavigation(event, "#top")}
className="text-sm font-semibold tracking-[-0.03em]"
aria-label="Crystal Kizor home"
>
CRYSTAL KIZOR <span className="ml-1 text-[#a47a4c]">.</span> </a>

    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-8 md:flex"
    >
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(event) => handleNavigation(event, item.href)}
          className="text-[11px] uppercase tracking-[0.14em] transition-colors hover:text-[#a47a4c]"
        >
          {item.label}
        </a>
      ))}

      <a
        href="#contact"
        onClick={(event) => handleNavigation(event, "#contact")}
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
      <span className="text-xl" aria-hidden="true">
        {menuOpen ? "×" : "☰"}
      </span>
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
          {[...navItems, { label: "Connect", href: "#contact" }].map(
            (item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) =>
                  handleNavigation(event, item.href)
                }
                className="flex items-center justify-between border-b border-black/10 py-4 text-xs uppercase tracking-[0.14em]"
              >
                <span>{item.label}</span>
                <span className="text-[#a47a4c]">
                  0{index + 1} ↗
                </span>
              </a>
            )
          )}
        </div>
      </motion.nav>
    )}
  </AnimatePresence>
</header>


);
}
