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

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section id="work" ref={ref} className="px-6 py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 block text-xs font-medium tracking-[0.25em] uppercase text-warm-gray"
          >
            Selected Projects
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl"
          >
            Work that lingers.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 max-w-lg text-warm-gray"
          >
            Every project is a collaboration rooted in craft, curiosity, and
            an obsession with the details that most overlook.
          </motion.p>
        </motion.div>

        {/* Asymmetric editorial grid */}
        <div className="grid gap-6 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden ${p.cols} col-span-12`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-full">
                <img
                  src={p.src}
                  alt={p.title}
                  className="h-full w-full object-cover transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              {/* Overlay on hover */}
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/40 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100">
                <h3 className="font-serif text-2xl text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.category}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
