"use client";

import { motion } from "framer-motion";

const responsibilities = [
  "ניהול רכש ולוגיסטיקת הובלות עבור אירועי היחידה באמצעות SAP/ERP, כולל טיפול בהזמנות ותיאום אספקות תחת לוחות זמנים צפופים.",
  "לקיחת אחריות על הובלת צוות, תיאום בין מספר חיילים ושמירה על רישומים ואישורים מדויקים.",
];

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function MilitaryService() {
  return (
    <section id="military-service" dir="rtl" className="scroll-mt-24">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl px-5 pt-6 pb-16 md:pt-8 md:pb-20"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold">שירות צבאי</h2>
          <div className="mt-2 h-0.5 w-28 rounded bg-zinc-500" />
        </div>

        <article className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h3 className="text-xl font-semibold text-zinc-100 md:text-2xl">
            חיל הים - לוגיסטיקה ותפעול (SAP/ERP)
          </h3>
          <span className="mt-5 inline-block rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-3 py-1 text-sm text-zinc-200">
            2018-2021
          </span>

          <ul className="mt-7 space-y-5">
            {responsibilities.map((responsibility) => (
              <li key={responsibility} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FF6A00]"
                />
                <p className="max-w-3xl leading-8 text-zinc-300">{responsibility}</p>
              </li>
            ))}
          </ul>
        </article>
      </motion.div>
    </section>
  );
}
