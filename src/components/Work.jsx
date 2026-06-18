import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealText from "./RevealText";

const defaultEase = [0.16, 1, 0.3, 1];

const projects = [
  {
    title: "Maison Noire",
    category: "Brand Identity · 2025",
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=85",
    cols: "lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Atelier Loam",
    category: "Art Direction · 2025",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=85",
    cols: "lg:col-span-5",
  },
  {
    title: "Kōri Studio",
    category: "Spatial Design · 2024",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=85",
    cols: "lg:col-span-5 lg:col-start-1",
  },
  {
    title: "Sienna Estate",
    category: "Editorial · 2024",
    src: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=700&q=85",
    cols: "lg:col-span-7",
  },
];

export default function Work() {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: "-10%" });

  return (
    <section id="work" className="px-8 pb-48 pt-28 lg:px-20 xl:px-28">
      <div className="mx-auto max-w-7xl">
        {/* Section intro — generous breathing room */}
        <motion.div
          ref={labelRef}
          initial="hidden"
          animate={labelInView ? "visible" : "hidden"}
          className="mb-24 max-w-3xl space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={labelInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: defaultEase }}
            className="block text-[11px] font-medium tracking-[0.3em] uppercase text-warm"
          >
            Selected Projects
          </motion.span>

          <RevealText
            as="h2"
            delay={0.15}
            stagger={0.05}
            wordSpace="mr-[0.25em]"
            className="font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight"
          >
            Work that lingers.
          </RevealText>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={labelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: defaultEase }}
            className="max-w-md text-sm leading-[1.8] tracking-[0.02em] text-warm"
          >
            Every project is a collaboration rooted in craft, curiosity, and an
            obsession with the details that most overlook.
          </motion.p>
        </motion.div>

        {/* Magazine-style asymmetric grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                ease: defaultEase,
              }}
              className={`group relative col-span-12 block overflow-hidden ${p.cols}`}
            >
              <div className="aspect-[5/4] w-full overflow-hidden lg:aspect-auto lg:h-full">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
              </div>

              {/* Slow-reveal overlay label */}
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/[0.55] via-transparent to-transparent p-8 opacity-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100">
                <span className="mb-1 inline-block h-px w-12 bg-brass" />
                <h3 className="font-serif text-3xl leading-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[11px] tracking-[0.15em] uppercase text-white/60">
                  {p.category}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
