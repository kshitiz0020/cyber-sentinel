import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg border border-[#00F5D4]/40 flex items-center justify-center font-mono font-bold text-[#00F5D4] text-sm">KS</div>
              <span className="font-semibold">Kshitij Sharma</span>
            </div>
            <p className="mt-3 text-sm text-white/55 max-w-xs">
              Cybersecurity analyst building secure-by-default systems. CEH Practical · CND certified.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-white/40 font-mono mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Experience", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} data-hover className="text-white/70 hover:text-[#00F5D4] transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-white/40 font-mono mb-3">Connect</p>
            <div className="flex gap-3">
              {[
                { i: Github, h: "https://github.com" },
                { i: Linkedin, h: "https://linkedin.com" },
                { i: Twitter, h: "https://twitter.com" },
                { i: Mail, h: "mailto:kshitijsharma618@gmail.com" },
              ].map((s, i) => (
                <a key={i} href={s.h} target="_blank" rel="noreferrer" data-hover className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-[#00F5D4]/50 hover:text-[#00F5D4] hover:shadow-[0_0_16px_rgba(0,245,212,0.3)] transition">
                  <s.i className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/45 font-mono">
          <p>© 2026 Kshitij Sharma. All rights reserved.</p>
          <p>Built with <span className="text-[#00F5D4]">secure code</span> & <span className="text-[#7B61FF]">caffeine</span>.</p>
        </div>
      </div>
    </footer>
  );
}