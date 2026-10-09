"use client";

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
