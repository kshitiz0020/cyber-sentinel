import { SectionTitle } from "./SectionTitle";
import { Github, ExternalLink, ShieldAlert, Radar, Activity, Gauge, Search, FileSearch, Bug, Lock } from "lucide-react";
import { useState } from "react";

const projects = [
  { icon: Radar, title: "Network Intrusion Detection System", desc: "Real-time packet analyzer with ML-based anomaly detection achieving 94% accuracy on KDD Cup.", stack: ["Python", "Scapy", "Scikit-learn"], color: "#00F5D4" },
  { icon: Lock, title: "Secure File Transfer App", desc: "Java client-server with AES-256 + RSA key exchange and SHA-256 integrity verification.", stack: ["Java", "AES-256", "Sockets"], color: "#00A3FF" },
  { icon: ShieldAlert, title: "Vulnerability Scanner", desc: "Custom CVE-aware web scanner that fingerprints services and reports OWASP Top-10 risks.", stack: ["Python", "Requests", "OWASP"], color: "#7B61FF" },
  { icon: Search, title: "OSINT Investigation Toolkit", desc: "Aggregates breach data, social footprint, and metadata into a single recon dashboard.", stack: ["Python", "Shodan", "API"], color: "#00F5D4" },
  { icon: Activity, title: "SOC Log Analyzer", desc: "Splunk-style log parser that flags suspicious Windows events and brute-force patterns.", stack: ["Python", "Splunk", "Regex"], color: "#00A3FF" },
  { icon: Gauge, title: "Password Strength Analyzer", desc: "Entropy-aware password auditor with breached-credential lookup via HIBP.", stack: ["Python", "HIBP API"], color: "#7B61FF" },
  { icon: FileSearch, title: "Port Scanner", desc: "Multithreaded TCP/UDP scanner with banner grabbing and service version detection.", stack: ["Python", "Sockets"], color: "#00F5D4" },
  { icon: Bug, title: "Threat Detection System", desc: "Behavioral anomaly engine that correlates host telemetry with threat intel feeds.", stack: ["Python", "ELK", "MITRE"], color: "#00A3FF" },
];

export function Projects() {
  const [paused, setPaused] = useState(false);
  const items = [...projects, ...projects];
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle eyebrow="Featured Projects" title="Code that breaks things — and fixes them." sub="A selection of security tools and research projects. Hover to pause the slider." />
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 w-max animate-marquee py-4 px-4"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {items.map((p, i) => (
            <article
              key={i}
              data-hover
              className="group w-[340px] md:w-[380px] shrink-0 glass rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition"
                style={{ background: p.color }}
              />
              <div className="relative">
                <div
                  className="inline-flex w-11 h-11 rounded-xl items-center justify-center border"
                  style={{ borderColor: `${p.color}55`, background: `${p.color}11` }}
                >
                  <p.icon className="w-5 h-5" style={{ color: p.color }} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed min-h-[60px]">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <a href="#" data-hover className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-white/10 hover:border-[#00F5D4]/50 hover:text-[#00F5D4] transition">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                  <a href="#" data-hover className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-[#00F5D4]/10 text-[#00F5D4] border border-[#00F5D4]/30 hover:bg-[#00F5D4] hover:text-[#050816] transition">
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}