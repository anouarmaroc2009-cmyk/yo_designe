import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ParallaxImage from "../ui/ParallaxImage";
import Magnetic from "../ui/Magnetic";
import SectionTransition from "../layout/SectionTransition";

const ease = [0.16, 1, 0.3, 1];

const projects = [
  {
    title: "Maison Noire",
    category: "Brand Architecture",
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=85",
    cols: "lg:col-span-7 lg:row-span-2",
    parallaxSpeed: 0.3,
  },
  {
    title: "Atelier Loam",
    category: "Visual Strategy",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=85",
    cols: "lg:col-span-5",
    parallaxSpeed: 0.5,
  },
  {
    title: "Kōri Studio",
    category: "Environmental Narrative",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=85",
    cols: "lg:col-span-5 lg:col-start-1",
    parallaxSpeed: 0.45,
  },
  {
    title: "Sienna Estate",
    category: "Content Ecosystem",
    src: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=700&q=85",
    cols: "lg:col-span-7",
    parallaxSpeed: 0.35,
  },
];

export default function Work() {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: "-10%" });

  return (
    <section id="work" className="px-8 pb-52 pt-28 lg:px-20 xl:px-28">
      <div className="mx-auto max-w-7xl">
        {/* Section intro */}
        <div ref={labelRef} className="mb-28 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={labelInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="block text-[11px] font-medium tracking-[0.3em] uppercase text-warm"
          >
            Featured Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={labelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.15, ease }}
            className="mt-6 font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight"
          >
            Work that lingers.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={labelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.45, ease }}
            className="mt-6 max-w-md text-sm leading-[1.8] tracking-[0.02em] text-warm"
          >
            Tailored solutions, not templates. Each project is a precision
            instrument, calibrated to its purpose.
          </motion.p>
        </div>

        {/* Magazine-style asymmetric grid with parallax */}
        <div className="grid gap-10 lg:grid-cols-12">
          {projects.map((p, i) => (
            <SectionTransition
              key={p.title}
              delay={i * 0.1}
              className={`group relative col-span-12 block overflow-hidden rounded-sm ${p.cols}`}
            >
              <Magnetic strength={0.12}>
                <a href="#" className="block">
                  <div className="aspect-[5/4] w-full overflow-hidden lg:aspect-auto lg:h-full">
                    <ParallaxImage
                      src={p.src}
                      alt={p.title}
                      speed={p.parallaxSpeed}
                      className="h-full w-full transition-all duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Glass overlay on hover */}
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-8 opacity-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100">
                    <div className="glass-dark absolute inset-0 rounded-sm" />
                    <div className="relative z-10">
                      <span className="mb-2 inline-block h-px w-12 bg-brass" />
                      <h3 className="font-serif text-3xl leading-tight text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[11px] tracking-[0.15em] uppercase text-white/60">
                        {p.category}
                      </p>
                    </div>
                  </div>
                </a>
              </Magnetic>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
