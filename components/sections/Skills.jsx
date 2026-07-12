"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "SQL"],
  },
  {
    title: "Programming",
    skills: ["C", "C++", "C#", "Python"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Linux basics", "SAP/ERP"],
  },
];

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" dir="rtl" className="scroll-mt-24">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl px-5 pt-6 pb-16 md:pt-8 md:pb-20"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold">כישורים טכניים</h2>
          <div className="mt-2 h-0.5 w-28 rounded bg-zinc-500" />
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold text-zinc-100">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2" dir="ltr">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-3 py-1 text-sm text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
