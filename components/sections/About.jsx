"use client";

import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" dir="rtl" className="scroll-mt-24">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl px-5 pt-6 pb-16 md:pt-8 md:pb-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold">קצת עליי:</h2>
            <div className="mt-2 w-28 h-0.5 bg-zinc-500 rounded" />
          </div>

          <p className="mt-4 mx-auto max-w-4xl leading-8 text-zinc-300">
           אני בוגר תואר ראשון במדעי המחשב עם ממוצע 90, עם אהבה אמיתית לפיתוח
  תוכנה, פתרון בעיות ולמידה של טכנולוגיות חדשות.
            
             במהלך הלימודים והפרויקטים שבניתי צברתי ניסיון מעשי בפיתוח אפליקציות
  Web מקצה לקצה, מה-UI ועד ה-API וה-Database.
          
  המטרה שלי היא להשתלב בצוות פיתוח מקצועי, לתרום מהיכולות שלי ולהמשיך
  להתפתח כמפתח תוכנה.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
