import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    let tx = 0, ty = 0, raf = 0;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-hover], input, textarea"));
    };
    const loop = () => {
      setTrail((p) => {
        tx = p.x + (window.__mx - p.x) * 0.15;
        ty = p.y + (window.__my - p.y) * 0.15;
        return { x: tx, y: ty };
      });
      raf = requestAnimationFrame(loop);
    };
    const track = (e: MouseEvent) => {
      (window as any).__mx = e.clientX;
      (window as any).__my = e.clientY;
    };
    (window as any).__mx = 0; (window as any).__my = 0;
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", track);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", track);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block rounded-full mix-blend-screen transition-[width,height] duration-200"
        style={{
          left: pos.x, top: pos.y,
          width: hover ? 10 : 6, height: hover ? 10 : 6,
          transform: "translate(-50%,-50%)",
          background: "#00F5D4",
          boxShadow: "0 0 14px #00F5D4",
        }}
      />
      <div
        className="pointer-events-none fixed z-[9998] hidden md:block rounded-full border transition-[width,height,opacity] duration-200"
        style={{
          left: trail.x, top: trail.y,
          width: hover ? 56 : 32, height: hover ? 56 : 32,
          transform: "translate(-50%,-50%)",
          borderColor: hover ? "#00F5D4" : "rgba(0,245,212,0.4)",
          boxShadow: hover ? "0 0 24px rgba(0,245,212,0.35)" : "none",
        }}
      />
    </>
  );
}

declare global {
  interface Window { __mx: number; __my: number; }
}