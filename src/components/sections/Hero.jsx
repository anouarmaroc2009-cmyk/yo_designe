import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Magnetic from "../ui/Magnetic";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <header
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 lg:px-20 xl:px-28"
    >
      {/* Subtle glow behind wordmark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2.4, ease }}
        className="glow-brass pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
      />

      {/* Layout-breaking wordmark — bleeds full width and overflows */}
      <div className="relative w-full">
        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.6, delay: 0.15, ease }}
          className="select-none text-center font-serif text-[clamp(4.5rem,18vw,15rem)] leading-[0.82] tracking-tight text-charcoal"
        >
          Yo_
          <br />
          Design
        </motion.h1>

        {/* Brass accent bar — slow scale-in */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.6, delay: 1, ease }}
          className="mx-auto mt-2 h-[2px] w-2/5 origin-center bg-brass/70 lg:mt-4"
        />
      </div>

      {/* Glass card for tagline + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 1.8, ease }}
        className="glass mt-12 max-w-lg space-y-8 rounded-2xl px-8 py-8 text-center"
      >
        <p className="text-sm leading-[1.8] tracking-[0.04em] text-warm lg:text-base">
          Precision. Craft. Digital presence.
        </p>

        <Magnetic strength={0.35}>
          <a
            href="#work"
            className="group relative inline-flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-charcoal"
          >
            <span className="relative">
              View selected work
              <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-charcoal transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </span>
            <span className="inline-block font-serif text-lg italic transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
              &rarr;
            </span>
          </a>
        </Magnetic>
      </motion.div>

      {/* Location label — bottom right */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 2.8, ease }}
        className="absolute bottom-10 right-8 text-[11px] font-medium tracking-[0.3em] uppercase text-warm/50 lg:right-20 xl:right-28"
      >
        Casablanca / Paris
      </motion.span>
    </header>
  );
}
