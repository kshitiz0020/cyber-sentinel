import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kshitij Sharma — Cybersecurity Analyst & Ethical Hacker" },
      { name: "description", content: "CEH Practical & CND certified cybersecurity analyst — ethical hacking, VAPT, SOC, and network defense projects." },
      { property: "og:title", content: "Kshitij Sharma — Cybersecurity Portfolio" },
      { property: "og:description", content: "Ethical hacking, vulnerability assessment, and network defense projects." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-white selection:bg-[#00F5D4] selection:text-[#050816]">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
