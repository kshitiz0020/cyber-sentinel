import { SectionTitle } from "./SectionTitle";
import { Mail, Linkedin, Github, MapPin, Send, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

export function Contact() {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const fullText = [
    "> initiating secure channel ...",
    "> bypassing firewall ............ OK",
    "> cracking mainframe ............ OK",
    "",
    "📬 OPENING GMAIL APP ...",
    "",
    "Your email client is being launched",
    "with your message pre-filled.",
    "",
    "> connection terminated. stay safe.",
  ].join("\n");

  useEffect(() => {
    if (!open) { setTyped(""); return; }
    const chars = Array.from(fullText);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(chars.slice(0, i).join(""));
      if (i >= chars.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [open]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setOpen(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let's secure something together."
          sub="Open to cybersecurity roles, freelance engagements, and research collaborations."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "kshitijsharma618@gmail.com", href: "mailto:kshitijsharma618@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kshitij-sharma", href: "https://linkedin.com" },
              { icon: Github, label: "GitHub", value: "github.com/kshitij-sharma", href: "https://github.com" },
              { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan, India" },
            ].map((c) => {
              const Comp: any = c.href ? "a" : "div";
              return (
                <Comp
                  key={c.label}
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-hover
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:border-[#00F5D4]/40 hover:translate-x-1 transition group"
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-[#00F5D4]/10 border border-[#00F5D4]/30 group-hover:shadow-[0_0_16px_rgba(0,245,212,0.4)] transition">
                    <c.icon className="w-5 h-5 text-[#00F5D4]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-white/45 font-mono">{c.label}</p>
                    <p className="text-sm text-white/90 truncate">{c.value}</p>
                  </div>
                </Comp>
              );
            })}
          </div>

          <form onSubmit={submit} className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="John Doe" />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="john@example.com" />
            </div>
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} placeholder="Project inquiry" />
            <div>
              <label className="text-[10px] uppercase tracking-wider text-white/45 font-mono">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                placeholder="Tell me about your project, role, or collaboration idea..."
                className="mt-1.5 w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00F5D4]/50 focus:shadow-[0_0_0_3px_rgba(0,245,212,0.1)] transition resize-none"
              />
            </div>
            <button
              type="submit"
              data-hover
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00F5D4] text-[#050816] font-semibold hover:shadow-[0_0_32px_rgba(0,245,212,0.5)] transition"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition" /> Send Message
            </button>
          </form>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setOpen(false)}>
          <div
            className="relative w-full max-w-lg glass rounded-2xl neon-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-xs text-white/60 ml-2">kshitij@secure-shell — bash</span>
              </div>
              <button onClick={() => setOpen(false)} data-hover className="text-white/50 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-6 font-mono text-xs md:text-sm text-[#00F5D4] whitespace-pre-wrap leading-relaxed min-h-[280px]">
              {typed}
              <span className="animate-blink">▋</span>
            </pre>
          </div>
        </div>
      )}
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-wider text-white/45 font-mono">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00F5D4]/50 focus:shadow-[0_0_0_3px_rgba(0,245,212,0.1)] transition"
      />
    </div>
  );
}