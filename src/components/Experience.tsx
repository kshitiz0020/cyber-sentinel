import { SectionTitle } from "./SectionTitle";
import { Award, Briefcase, ShieldCheck, Network, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const certs = [
  { icon: ShieldCheck, name: "Certified Ethical Hacker (CEH Practical)", org: "EC-Council", year: "2024", color: "#00F5D4" },
  { icon: Network, name: "Certified Network Defender (CND)", org: "EC-Council", year: "2024", color: "#00A3FF" },
  { icon: Terminal, name: "SOC & SIEM Fundamentals", org: "Splunk + TryHackMe", year: "2024", color: "#7B61FF" },
  { icon: Award, name: "Web Application Security", org: "OWASP Training", year: "2023", color: "#00F5D4" },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle eyebrow="Experience & Certifications" title="Trained, certified, deployed." sub="Field experience with law enforcement and EC-Council certified skills." />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Internship */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-mono text-sm text-[#00F5D4] flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> // internship
            </h3>
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00F5D4] to-transparent" />
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-[#00F5D4] bg-[#050816] shadow-[0_0_12px_#00F5D4]" />
              <div className="glass rounded-2xl p-6 hover:neon-border transition group">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-mono text-[#00A3FF]">Jan 2024 – Apr 2024</p>
                    <h4 className="text-xl font-semibold mt-1">Cybersecurity Intern</h4>
                    <p className="text-sm text-white/65">Rajasthan Police Headquarters · Jaipur</p>
                  </div>
                  <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-[#00F5D4]/10 text-[#00F5D4] border border-[#00F5D4]/30">LIVE OPS</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {[
                    "Organized a cybersecurity hackathon for 50+ participants with end-to-end technical support.",
                    "Conducted R&D on digital forensic tools, ISO 27001 compliance and cybercrime investigation methodologies.",
                    "Delivered training to police officers on networking, threat awareness and security best practices.",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-[#00F5D4] mt-1">▸</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-mono text-sm text-[#00F5D4] flex items-center gap-2 mb-4">
              <Award className="w-4 h-4" /> // certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {certs.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  data-hover
                  className="glass rounded-xl p-5 hover:-translate-y-1 transition group relative overflow-hidden"
                  style={{ }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                    style={{ boxShadow: `inset 0 0 0 1px ${c.color}66, 0 0 28px ${c.color}33` }}
                  />
                  <c.icon className="w-6 h-6" style={{ color: c.color }} />
                  <p className="mt-3 text-sm font-semibold leading-snug">{c.name}</p>
                  <p className="text-xs text-white/55 mt-1">{c.org}</p>
                  <p className="text-[10px] font-mono mt-2" style={{ color: c.color }}>{c.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}