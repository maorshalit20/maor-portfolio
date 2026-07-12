"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" dir="rtl" className="scroll-mt-24">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl px-5 pt-6 pb-16 md:pt-8 md:pb-20"
      >
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center md:p-8">
          <h2 className="text-3xl font-semibold">בואו נדבר</h2>
          <div className="mx-auto mt-2 h-0.5 w-28 rounded bg-zinc-500" />
          <p className="mt-4 text-zinc-300">
            אשמח לשמוע על הזדמנויות, פרויקטים מעניינים ושיתופי פעולה.
          </p>

          <a
            href="https://wa.me/972546212347"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#FF6A00] px-6 py-3 font-medium text-black hover:brightness-110"
          >
            <FaWhatsapp className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
