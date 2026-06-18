import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const defaultEase = [0.16, 1, 0.3, 1];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <header
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 lg:px-20 xl:px-28"
    >
      {/* MASSIVE "Yo_Design" wordmark — the first thing you see */}
      <div className="relative flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.6, delay: 0.2, ease: defaultEase }}
          className="select-none font-serif text-[clamp(5rem,20vw,16rem)] leading-[0.85] tracking-tight text-charcoal"
        >
          Yo_Design
        </motion.span>

        {/* Underline accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 1, ease: defaultEase }}
          className="mt-2 h-[2px] w-3/4 origin-left bg-brass lg:mt-4"
        />
      </div>

      {/* Tagline — fades in after the wordmark */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.6, ease: defaultEase }}
        className="mt-10 max-w-lg text-center text-sm leading-[1.8] tracking-[0.06em] text-warm lg:text-base"
      >
        A boutique creative studio — shaping space, narrative & form.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 2.2, ease: defaultEase }}
        className="mt-16"
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

      {/* Location label — bottom right */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2.6, ease: defaultEase }}
        className="absolute bottom-10 right-8 text-[11px] font-medium tracking-[0.3em] uppercase text-warm/60 lg:right-20 xl:right-28"
      >
        Casablanca / Paris
      </motion.span>
    </header>
  );
}
