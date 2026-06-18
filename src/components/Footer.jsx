import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { y: 32, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <footer ref={ref} className="bg-charcoal px-6 py-24 text-white lg:px-16">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand column */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <span className="font-serif text-3xl italic tracking-tight">
              yo_design
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brass-light/60">
              A boutique creative studio. We craft identity, space, and
              narrative for those who refuse the ordinary.
            </p>
          </motion.div>

          {/* Links columns */}
          <motion.div variants={fadeUp} custom={1} className="lg:col-span-3">
            <h4 className="mb-6 text-xs font-medium tracking-[0.15em] uppercase text-brass-light/50">
              Social
            </h4>
            <ul className="space-y-3">
              {["Instagram", "Behance", "LinkedIn", "Dribbble"].map(
                (social) => (
                  <li key={social}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white"
                    >
                      <span className="inline-block h-px w-4 bg-white/20 transition-all duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-8 group-hover:bg-brass" />
                      {social}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} custom={2} className="lg:col-span-4">
            <h4 className="mb-6 text-xs font-medium tracking-[0.15em] uppercase text-brass-light/50">
              Contact
            </h4>
            <a
              href="mailto:hello@yodesign.studio"
              className="group inline-flex items-center gap-3 text-lg font-serif italic text-white transition-colors duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-brass"
            >
              hello@yodesign.studio
              <span className="inline-block text-sm font-sans not-italic transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <p className="mt-4 text-sm text-white/40">
              Casablanca / Paris / Remote
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-white/30 sm:flex-row sm:items-center"
        >
          <p>&copy; {new Date().getFullYear()} yo_design. All rights reserved.</p>
          <p>Crafted with intention.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
