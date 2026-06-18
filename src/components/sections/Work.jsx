import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Magnetic from "../ui/Magnetic";
import SectionTransition from "../layout/SectionTransition";

const ease = [0.16, 1, 0.3, 1];

const projects = [
  { cols: "lg:col-span-7 lg:row-span-2", src: "/pictures/image4.jpeg" },
  { cols: "lg:col-span-5", src: "/pictures/image1.jpeg" },
  { cols: "lg:col-span-5 lg:col-start-1", src: "/pictures/image3.jpeg" },
  { cols: "lg:col-span-7", src: "/pictures/image2.jpeg" },
  { cols: "lg:col-span-12", src: "/pictures/image5.jpeg" },
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
              key={i}
              delay={i * 0.1}
              className={`group relative col-span-12 block overflow-hidden rounded-sm ${p.cols}`}
            >
              <Magnetic strength={0.12}>
                <a href="#" className="block h-full">
                  <div
                    className="aspect-[5/4] w-full bg-stone bg-cover bg-center lg:aspect-auto lg:h-full"
                    style={{ backgroundImage: `url(${p.src})` }}
                  />

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100">
                    <div className="glass-dark absolute inset-0 rounded-sm" />
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
