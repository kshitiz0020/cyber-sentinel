import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ShieldCheck, Terminal, Wifi, Lock } from "lucide-react";
import { MatrixRain } from "./MatrixRain";

const stats = [
  { v: "2+", l: "Certifications" },
  { v: "8+", l: "Projects" },
  { v: "4 mo", l: "Internship" },
];

const roles = [
  "Cybersecurity Analyst",
  "Ethical Hacking",
  "Network Security",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const next = isDeleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(next), isDeleting ? speed / 2.5 : speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* background */}
      <div className="absolute inset-0 cyber-grid opacity-40" />
      <div className="absolute inset-0 radial-fade" />
      <MatrixRain className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#00F5D4]/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#7B61FF]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, staggerChildren: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-[#00F5D4] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
            Cybersecurity Enthusiast · Jaipur, IN
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Kshitij
            <br />
            <span className="text-gradient">Sharma.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 font-mono">
            <span className="text-[#00F5D4]">$</span> Cybersecurity Analyst
            <span className="text-white/40"> · </span> Ethical Hacking
            <span className="text-white/40"> · </span> Network Security
            <span className="terminal-caret" />
          </p>
          <p className="mt-6 text-base text-white/65 max-w-xl leading-relaxed">
            A passionate cybersecurity professional focused on ethical hacking,
            vulnerability assessment, network defense, and building secure digital
            environments. CEH Practical & CND certified.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              data-hover
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00F5D4] text-[#050816] font-semibold hover:shadow-[0_0_32px_rgba(0,245,212,0.6)] transition"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="/kshitij-sharma-resume.html"
              download
              data-hover
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border-white/15 hover:border-[#00F5D4]/50 transition font-semibold"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - holographic security panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00F5D4]/20 via-transparent to-[#7B61FF]/20 blur-3xl" />
          <div className="relative glass rounded-2xl p-6 neon-border overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-30" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="font-mono text-xs text-white/50 ml-3">secure-ops.sh</span>
                </div>
                <ShieldCheck className="w-4 h-4 text-[#00F5D4]" />
              </div>

              <div className="font-mono text-xs space-y-1.5 text-white/80">
                <p><span className="text-[#00F5D4]">┌──</span> <span className="text-[#00A3FF]">root@kshitij</span>:<span className="text-[#7B61FF]">~/recon</span>$</p>
                <p><span className="text-[#00F5D4]">└─#</span> nmap -sV -A target.local</p>
                <p className="text-white/50">Starting Nmap scan...</p>
                <p className="text-white/50">PORT 22/tcp open · ssh OpenSSH 8.2</p>
                <p className="text-white/50">PORT 80/tcp open · http nginx 1.18.0</p>
                <p className="text-white/50">PORT 443/tcp open · https</p>
                <p className="text-[#00F5D4]">✓ Service detection complete.</p>
                <p><span className="text-[#00F5D4]">└─#</span> burpsuite --intruder --start<span className="terminal-caret" /></p>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-5">
                {[
                  { i: Terminal, l: "VAPT", v: "Active" },
                  { i: Wifi, l: "Network", v: "Monitored" },
                  { i: Lock, l: "Encryption", v: "AES-256" },
                ].map((m, i) => (
                  <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <m.i className="w-4 h-4 text-[#00F5D4]" />
                    <p className="text-[10px] text-white/50 mt-2">{m.l}</p>
                    <p className="text-xs font-mono text-white">{m.v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg border border-white/10 p-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-white/50">THREAT LEVEL</span>
                  <span className="text-[#00F5D4]">LOW · 12%</span>
                </div>
                <div className="mt-2 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[12%] bg-gradient-to-r from-[#00F5D4] to-[#00A3FF] shadow-[0_0_8px_#00F5D4]" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-mono animate-float">
            <span className="text-[#00F5D4]">CEH</span> Practical
          </div>
          <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 text-xs font-mono animate-float" style={{ animationDelay: "1.5s" }}>
            <span className="text-[#7B61FF]">CND</span> Certified
          </div>
        </motion.div>
      </div>
    </section>
  );
}