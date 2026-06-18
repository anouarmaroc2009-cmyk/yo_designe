import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealText from "./RevealText";

const defaultEase = [0.16, 1, 0.3, 1];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <header
      ref={ref}
      className="relative min-h-screen overflow-hidden px-8 pt-36 pb-28 lg:px-20 xl:px-28"
    >
      {/* off-grid decorative numeral */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2.4, delay: 1.5, ease: defaultEase }}
        className="pointer-events-none absolute -top-28 right-0 select-none text-[32rem] leading-none text-charcoal/[0.025]"
        style={{ fontFamily: "Bodoni Moda", fontStyle: "italic" }}
      >
        y
      </motion.span>

      <div className="relative mx-auto max-w-7xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: defaultEase }}
          className="mb-10 flex items-center gap-5"
        >
          <span className="inline-block h-px w-16 bg-brass" />
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-warm">
            Casablanca / Paris
          </span>
        </motion.div>

        {/* Main heading — word-stagger reveal */}
        <RevealText
          as="h1"
          delay={0.5}
          stagger={0.06}
          wordSpace="mr-[0.3em]"
          className="max-w-6xl font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.92] tracking-tight text-charcoal"
        >
          We shape space, narrative & form.
        </RevealText>

        {/* Body — delayed line reveal */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.6, ease: defaultEase }}
          className="mt-14 max-w-xl text-base leading-[1.7] tracking-[0.04em] text-warm sm:text-lg"
        >
          A boutique creative studio crafting deliberate brand worlds,
          editorial identities, and spatial stories for the discerning few.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2, ease: defaultEase }}
          className="mt-20"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase"
          >
            <span className="relative">
              View selected work
              <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-charcoal transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </span>
            <span className="inline-block font-serif text-lg italic transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>
    </header>
  );
}
