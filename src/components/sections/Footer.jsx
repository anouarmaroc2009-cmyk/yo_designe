import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Magnetic from "../ui/Magnetic";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, delay: i * 0.12, ease },
  }),
};

const links = [
  { label: "Instagram", href: "https://instagram.com/yo_design_officiel" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <footer
      ref={ref}
      className="relative bg-charcoal px-8 pt-36 pb-20 text-white lg:px-20 xl:px-28"
    >
      {/* Top glow */}
      <div className="glow-charcoal pointer-events-none absolute -top-40 left-1/2 h-80 w-3/4 -translate-x-1/2 rounded-full" />

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto max-w-7xl"
      >
        <div className="grid gap-20 lg:grid-cols-12">
          <motion.div variants={fadeUp} custom={0} className="lg:col-span-5">
            <span className="font-serif text-4xl italic leading-none tracking-tight">
              yo_design
            </span>
            <p className="mt-6 max-w-xs text-sm leading-[1.8] tracking-[0.02em] text-brass-light/50">
              Bespoke digital architecture. Precision at every scale.
              Design driven by data, refined by craft.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} className="lg:col-span-3">
            <h4 className="mb-8 text-[11px] font-medium tracking-[0.25em] uppercase text-brass-light/40">
              Social
            </h4>
            <ul className="space-y-5">
              {links.map((l) => (
                <li key={l.label}>
                  <Magnetic strength={0.3}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-3 text-sm text-white/50 transition-colors duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white"
                    >
                      <span className="inline-block h-px w-6 bg-white/10 transition-all duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-12 group-hover:bg-brass" />
                      {l.label}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} custom={2} className="lg:col-span-4">
            <h4 className="mb-8 text-[11px] font-medium tracking-[0.25em] uppercase text-brass-light/40">
              Contact
            </h4>
            <Magnetic strength={0.25}>
              <a
                href="mailto:yasimo.design.offi@gmail.com"
                className="group inline-flex items-center gap-3 font-serif text-2xl italic leading-tight text-white transition-colors duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-brass"
              >
                yasimo.design.offi@gmail.com
                <span className="inline-block font-sans text-sm not-italic transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </a>
              <p className="mt-5 text-sm tracking-[0.02em] text-white/50">
                @yo_design_officiel
              </p>
            </Magnetic>
            <a
              href="tel:+212671803785"
              className="mt-4 block text-sm tracking-[0.02em] text-white/30 transition-colors hover:text-brass"
            >
              +212671803785
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={3}
          className="mt-36 flex flex-col items-start justify-between gap-5 border-t border-white/[0.06] pt-10 text-xs text-white/25 sm:flex-row sm:items-center"
        >
          <p>made by YourWebsite.Ma-anvar</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
