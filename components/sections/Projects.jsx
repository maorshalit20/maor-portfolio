"use client";

import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" dir="rtl" className="scroll-mt-24">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl px-5 pt-6 pb-16 md:pt-8 md:pb-20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold">פרויקטים</h2>
            <div className="mt-2 h-0.5 w-28 rounded bg-zinc-500" />
          </div>

          <article className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-zinc-100 md:text-3xl">
              Cost Manager
            </h3>
            <p className="mt-2 text-lg font-medium text-zinc-100">
              מערכת Full-Stack לניהול ומעקב אחר הוצאות
            </p>
            <div className="mt-4 max-w-3xl">
              <p className="leading-8 text-zinc-300">
              פיתחתי אפליקציית Full-Stack לניהול ומעקב אחר הוצאות, עם REST API שנבנה ב-Node.js ו-Express ושמירת הנתונים ב-MongoDB.
              </p>
              <p className="mt-6 leading-8 text-zinc-300">
              בצד הלקוח בניתי ממשק React להוספת הוצאות ולצפייה ברשימות ובדוחות, תוך שימוש בטפסים וברכיבים הניתנים לשימוש חוזר. הפרויקט כולל חיבור מלא בין ה-Client ל-Server ומבנה נפרד לצד הלקוח ולצד השרת.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2" dir="ltr">
              {["React", "Node.js", "Express", "MongoDB", "REST API"].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-3 py-1 text-sm text-zinc-200"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  );
}
