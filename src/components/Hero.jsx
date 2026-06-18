import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { y: 48, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: i * 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const projects = [
  {
    title: "Maison Noire",
    category: "Brand Identity",
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    cols: "lg:col-span-8 lg:row-span-2",
  },
  {
    title: "Atelier Loam",
    category: "Art Direction",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    cols: "lg:col-span-4",
  },
  {
    title: "Kōri Studio",
    category: "Spatial Design",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    cols: "lg:col-span-5",
  },
  {
    title: "Sienna Estate",
    category: "Editorial",
    src: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=600&q=80",
    cols: "lg:col-span-7",
  },
];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <header ref={ref} className="relative min-h-screen px-6 pt-32 pb-24 lg:px-16">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-6 flex items-center gap-3">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block h-px w-12 bg-brass"
          />
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-xs font-medium tracking-[0.25em] uppercase text-warm-gray"
          >
            Design Studio
          </motion.span>
        </div>

        <h1 className="max-w-5xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
          <motion.span
            variants={fadeUp}
            custom={1}
            className="block"
          >
            We shape space,
          </motion.span>
          <motion.span
            variants={fadeUp}
            custom={2}
            className="block italic text-brass"
          >
            narrative & form.
          </motion.span>
        </h1>

        <motion.p
          variants={fadeUp}
          custom={3}
          className="mt-10 max-w-xl text-lg leading-relaxed text-warm-gray"
        >
          A boutique creative studio crafting deliberate brand worlds,
          editorial identities, and spatial stories for the discerning few.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={4}
          className="mt-16"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 text-sm font-medium tracking-[0.15em] uppercase"
          >
            <span className="relative">
              View selected work
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-charcoal transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </span>
            <span className="inline-block transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
              &rarr;
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative off-grid element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -top-12 right-0 hidden select-none lg:block"
      >
        <span className="font-serif text-[28rem] leading-none text-charcoal/[0.03]">
          y
        </span>
      </motion.div>
    </header>
  );
}
