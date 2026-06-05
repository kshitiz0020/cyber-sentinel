import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + window.innerHeight / 3;
      for (const s of sections) {
        if (!s) continue;
        if (s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-5 md:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "glass rounded-2xl mx-4 md:mx-auto py-3" : ""
        }`}
      >
        <button onClick={() => go("home")} className="flex items-center gap-2 group" data-hover>
          <div className="w-9 h-9 rounded-lg border border-[#00F5D4]/40 flex items-center justify-center font-mono font-bold text-[#00F5D4] text-sm group-hover:neon-border transition">
            KS
          </div>
          <span className="hidden sm:block font-mono text-xs text-white/60">~/kshitij</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                data-hover
                className={`px-4 py-2 rounded-lg text-sm font-medium transition relative ${
                  active === l.id ? "text-[#00F5D4]" : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="/kshitij-sharma-resume.html"
          download
          data-hover
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[#00F5D4] text-[#050816] hover:shadow-[0_0_24px_rgba(0,245,212,0.5)] transition"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </nav>
    </header>
  );
}