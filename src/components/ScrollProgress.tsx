import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const t = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (t / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 inset-x-0 h-[2px] z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#00F5D4] via-[#00A3FF] to-[#7B61FF] shadow-[0_0_12px_#00F5D4] transition-[width] duration-100"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}