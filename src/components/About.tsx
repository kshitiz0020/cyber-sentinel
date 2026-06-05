import { SectionTitle } from "./SectionTitle";
import { Code2, Shield, Wrench, Cloud, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const skillGroups = [
  { icon: Code2, label: "Programming", color: "#00F5D4", items: ["Python", "Java", "JavaScript", "Bash"] },
  { icon: Shield, label: "Cybersecurity", color: "#00A3FF", items: ["VAPT", "OSINT", "Web Sec", "Network Sec", "Threat Intel", "Incident Response"] },
  { icon: Wrench, label: "Tools", color: "#7B61FF", items: ["Nmap", "Wireshark", "Burp Suite", "Metasploit", "Splunk", "Nessus", "OWASP ZAP", "SQLMap"] },
  { icon: Cloud, label: "Cloud", color: "#00F5D4", items: ["AWS Basics", "Azure Basics"] },
];

const education = [
  { degree: "Master of Computer Applications (MCA)", school: "JECRC University, Jaipur", date: "2022 – 2024" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "Rajasthan University Commerce College", date: "2019 – 2022" },
  { degree: "CEH Practical & CND Training", school: "EC-Council Certified Programs", date: "2024" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle eyebrow="About Me" title="Securing the digital frontier." sub="A continuous-learning mindset, an offensive curiosity, and a defender's discipline." />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left big card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#00F5D4]/10 blur-3xl" />
            <h3 className="font-mono text-sm text-[#00F5D4] mb-4">// whoami</h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/85">
              I'm a results-driven MCA graduate with hands-on expertise in <span className="text-[#00F5D4]">cybersecurity operations</span>, <span className="text-[#00A3FF]">ethical hacking</span>, and defensive security. CEH Practical & CND certified — I work across SIEM analytics, vulnerability assessment, incident response, and red-team tooling.
            </p>
            <p className="mt-4 text-white/65 leading-relaxed">
              I think like an attacker, build like an engineer, and defend like a SOC analyst. From writing custom Python recon scripts to triaging Splunk alerts, I love every layer of the security stack.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                ["Mindset", "Offensive + Defensive"],
                ["Focus", "VAPT · SOC · Forensics"],
                ["Style", "Quiet, methodical, relentless"],
                ["Goal", "Build secure-by-default systems"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg border border-white/10 p-3 bg-white/[0.02]">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">{k}</p>
                  <p className="text-sm text-white/90 mt-1">{v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-mono text-sm text-[#00F5D4] mb-4">// skills & tools</h3>
              <div className="space-y-4">
                {skillGroups.map((g) => (
                  <div key={g.label}>
                    <div className="flex items-center gap-2 mb-2">
                      <g.icon className="w-3.5 h-3.5" style={{ color: g.color }} />
                      <span className="text-xs uppercase tracking-wider text-white/60">{g.label}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((it) => (
                        <span
                          key={it}
                          data-hover
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/10 text-white/80 hover:text-[#00F5D4] hover:border-[#00F5D4]/50 hover:shadow-[0_0_12px_rgba(0,245,212,0.25)] transition"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-mono text-sm text-[#00F5D4] mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> // education
              </h3>
              <div className="space-y-4 relative">
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00F5D4] via-[#00A3FF] to-transparent" />
                {education.map((e) => (
                  <div key={e.degree} className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]" />
                    <p className="text-sm font-semibold text-white">{e.degree}</p>
                    <p className="text-xs text-white/55 mt-0.5">{e.school}</p>
                    <p className="text-xs font-mono text-[#00A3FF] mt-1">{e.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}