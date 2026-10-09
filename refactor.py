
from pathlib import Path

root = Path.cwd()
page = root / "src/app/page.tsx"

if not page.exists():
    raise SystemExit("ERROR: Run this script from your project root.")

source = page.read_text()

markers = [
    ("Navigation", "NAVIGATION", "navigation/Navigation.tsx"),
    ("Hero", "HERO", "hero/Hero.tsx"),
    ("Ecosystem", "POSITIONING", "ecosystem/Ecosystem.tsx"),
    ("Work", "WORK & VENTURES", "work/Work.tsx"),
    ("SelectedWorks", "SELECTED WORKS", "work/SelectedWorks.tsx"),
    ("Ideas", "IDEAS", "ideas/Ideas.tsx"),
    ("Speaking", "SPEAKING", "speaking/Speaking.tsx"),
    ("About", "ABOUT", "about/About.tsx"),
    ("Contact", "CONTACT", "impact/Contact.tsx"),
    ("Footer", "FOOTER", "footer/Footer.tsx"),
]

def marker_text(name):
    return "{/* " + name + " */}"

positions = []
for component, label, filename in markers:
    marker = marker_text(label)
    if marker not in source:
        raise SystemExit(f"ERROR: Could not find marker {marker}")
    positions.append((source.index(marker), component, label, filename))

positions.sort()

chunks = {}
for i, (start, component, label, filename) in enumerate(positions):
    content_start = start + len(marker_text(label))
    if i + 1 < len(positions):
        content_end = positions[i + 1][0]
    else:
        content_end = source.rfind("</main>")

    if content_end < content_start:
        raise SystemExit(f"ERROR: Invalid section boundaries for {component}")

    chunks[component] = source[content_start:content_end].strip()

def extract_array(name):
    start = source.find(f"const {name} = [")
    if start == -1:
        raise SystemExit(f"ERROR: Could not find {name}")
    end = source.find("\n];", start)
    if end == -1:
        raise SystemExit(f"ERROR: Could not find the end of {name}")
    return source[start:end + 3]

nav_items = extract_array("navItems")
idea_cards = extract_array("ideaCards")
contact_paths = extract_array("contactPaths")

imports = {
    "Navigation": 'import { useState } from "react";\nimport { AnimatePresence, motion } from "framer-motion";',
    "Hero": 'import { motion } from "framer-motion";',
    "Ecosystem": "",
    "Work": "",
    "SelectedWorks": "",
    "Ideas": 'import { motion } from "framer-motion";',
    "Speaking": "",
    "About": 'import { motion } from "framer-motion";',
    "Contact": "",
    "Footer": "",
}

constants = {
    "Navigation": nav_items,
    "Ideas": idea_cards,
    "Contact": contact_paths,
}

for component, label, filename in markers:
    output = root / "src/components" / filename
    output.parent.mkdir(parents=True, exist_ok=True)

    import_block = imports[component]
    constant_block = constants.get(component, "")

    pieces = [
        '"use client";',
        import_block,
        constant_block,
        f"export default function {component}() {{",
        "  " + ("const [menuOpen, setMenuOpen] = useState(false);\n  const closeMenu = () => setMenuOpen(false);\n" if component == "Navigation" else ""),
        "  return (",
        "    <>",
        chunks[component],
        "    </>",
        "  );",
        "}",
    ]

    output.write_text("\n\n".join(p for p in pieces if p) + "\n")
    print(f"Created {output.relative_to(root)}")

new_page = '''"use client";

import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import Ecosystem from "@/components/ecosystem/Ecosystem";
import Work from "@/components/work/Work";
import SelectedWorks from "@/components/work/SelectedWorks";
import Ideas from "@/components/ideas/Ideas";
import Speaking from "@/components/speaking/Speaking";
import About from "@/components/about/About";
import Contact from "@/components/impact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <Navigation />
      <Hero />
      <Ecosystem />
      <Work />
      <SelectedWorks />
      <Ideas />
      <Speaking />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
'''

page.write_text(new_page)
print("\\nUpdated src/app/page.tsx")
print("Refactoring complete.")
