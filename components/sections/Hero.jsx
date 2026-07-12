"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown } from "lucide-react";
import { HERO, LINKS } from "@/data/site";

export default function Hero() {
  return (
    <section dir="rtl" className="relative text-zinc-100 pt-14 pb-8 md:pt-16 md:pb-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-4xl text-center">
          {/* TITLE */}
          <div className="flex items-center justify-center gap-4">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-[#FF6A00]/25 bg-white/5 shadow-[0_0_0_1px_rgba(255,106,0,0.10)] md:h-36 md:w-36">
              <Image
                src="/me.jpg"
                alt="מאור שליט"
                fill
                className="object-cover object-[center_30%]"
                priority
              />
            </div>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              {HERO.name}
            </h1>
          </div>

          <div className="mt-5 text-lg text-zinc-300 md:text-xl">
            <div className="mx-auto max-w-[19rem] leading-8 text-zinc-200 md:max-w-none md:leading-normal">
              {HERO.title}
            </div>
            <p className="mx-auto mt-3 max-w-[20rem] text-[1.05rem] leading-8 md:max-w-none md:text-xl md:leading-relaxed">
              {HERO.description}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#FF6A00] px-5 py-3 text-sm font-medium text-black hover:brightness-110"
            >
              {HERO.ctas.about} <ArrowDown className="h-4 w-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-200 hover:border-[#FF6A00]/40 hover:bg-white/10"
            >
              {HERO.ctas.bonus}
            </a>

            <a
              href={LINKS.cv}
              download="maor-shalit-cv.pdf"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-200 hover:border-[#FF6A00]/40 hover:bg-white/10"
            >
              {HERO.ctas.cv} <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* BOTTOM LINKS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 opacity-95">
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:border-[#FF6A00]/40 hover:bg-white/10 md:min-h-0"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:border-[#FF6A00]/40 hover:bg-white/10 md:min-h-0"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={`mailto:${LINKS.email}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:border-[#FF6A00]/40 hover:bg-white/10 md:min-h-0"
            >
              <Mail className="h-4 w-4" />
              {LINKS.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
