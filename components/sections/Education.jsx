"use client";

import { motion } from "framer-motion";

const courses = [
  {
    title: "Web Development Bootcamp (Udemy)",
    description:
      "יסודות פיתוח Full-Stack הכוללים HTML, CSS, JavaScript ו-Git, לצד בניית פרויקטים מתרגילים קטנים ועד אפליקציות בסיסיות.",
  },
  {
    title: "MERN Full-Stack Guide (Udemy)",
    description:
      "פיתוח מקצה לקצה עם Node.js, Express ו-MongoDB באמצעות Mongoose, כולל REST APIs, פעולות CRUD, אימות JWT, שימוש ב-Axios ועקרונות בסיסיים של פריסה.",
  },
  {
    title: "React - The Complete Guide (Udemy)",
    description:
      "עבודה עם Components, Hooks, ניהול State, טפסים, Routing וממשקים רספונסיביים, כולל בניית ממשקים המבוססים על APIs.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <section id="education" dir="rtl" className="scroll-mt-24">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl px-5 pt-6 pb-16 md:pt-8 md:pb-20"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold">השכלה והכשרות</h2>
          <div className="mt-2 h-0.5 w-28 rounded bg-zinc-500" />
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-4">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-zinc-100 md:text-2xl">
              המכון הטכנולוגי חולון - HIT
            </h3>
            <p className="mt-2 text-lg font-medium text-zinc-100">
              תואר ראשון B.Sc. במדעי המחשב
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-3 py-1 text-sm text-zinc-200">
                2024-2026
              </span>
              <span className="rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-3 py-1 text-sm text-zinc-200">
                ממוצע: 90
              </span>
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-zinc-100 md:text-2xl">
              הכשרת Full-Stack במסגרת תוכנית חיצונית
            </h3>
            <span className="mt-5 inline-block rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-3 py-1 text-sm text-zinc-200">
              2025-2026
            </span>

            <ul className="mt-7 space-y-8">
              {courses.map((course) => (
                <li key={course.title}>
                  <div className="flex items-start gap-3" dir="ltr">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FF6A00]"
                    />
                    <div>
                      <h4 className="text-lg font-medium text-zinc-100">
                      {course.title}
                      </h4>
                      <p className="mt-2 max-w-3xl leading-8 text-zinc-300" dir="rtl">
                        {course.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </motion.div>
    </section>
  );
}
