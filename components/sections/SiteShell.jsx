"use client";

import { useEffect } from "react";

export default function SiteShell({ children }) {
  useEffect(() => {
    const setViewportHeight = () => {
      const height = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty("--app-height", `${height}px`);
    };

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);
    window.addEventListener("orientationchange", setViewportHeight);
    window.visualViewport?.addEventListener("resize", setViewportHeight);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
      window.removeEventListener("orientationchange", setViewportHeight);
      window.visualViewport?.removeEventListener("resize", setViewportHeight);
    };
  }, []);

  return (
    <div className="relative min-h-[var(--app-height)] text-zinc-100 overflow-x-hidden">
      {/* רקע גלובלי קבוע – נשאר אותו דבר בכל גלילה */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* בסיס כהה */}
        <div className="absolute inset-0 bg-[#0B0B0F]" />

        {/* כתומים גדולים (כדי שלא “ייגמר” באמצע הדף) */}
        <div className="absolute -top-56 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#FF6A00]/26 blur-3xl" />
        <div className="absolute top-[40%] left-[10%] h-[760px] w-[760px] rounded-full bg-[#FF6A00]/14 blur-3xl" />
        <div className="absolute top-[55%] right-[-260px] h-[820px] w-[820px] rounded-full bg-[#FF6A00]/18 blur-3xl" />

        {/* גריד עדין */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] [background-size:56px_56px]" />

        {/* וינייט עדין (לא שחור חזק) */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_20%,rgba(255,106,0,0.10)_0%,transparent_45%,rgba(11,11,15,0.55)_100%)]" />
      </div>

      <main className="relative z-10 min-h-[var(--app-height)]">{children}</main>
    </div>
  );
}
