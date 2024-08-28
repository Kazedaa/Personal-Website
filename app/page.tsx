import React from "react";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";
import Resume from "@/components/Resume";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects/>
        {/* <Publications /> */}
        <Experience />
        {/* <Resume /> */}
        <Footer />
      </div>
    </main>
  );
}
