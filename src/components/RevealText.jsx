import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const defaultEase = [0.16, 1, 0.3, 1];

export default function RevealText({
  children,
  as = "p",
  className = "",
  delay = 0,
  stagger = 0.035,
  wordSpace = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const Tag = motion[as];

  const words = children.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={children}>
      <span className="sr-only">{children}</span>
      <span aria-hidden className="inline-flex flex-wrap">
        {words.map((word, i) => (
          <span key={i} className={`inline-block overflow-hidden ${wordSpace}`}>
            <motion.span
              className="inline-block"
              initial={{ y: "110%", rotateX: -12 }}
              animate={
                isInView
                  ? { y: 0, rotateX: 0 }
                  : { y: "110%", rotateX: -12 }
              }
              transition={{
                duration: 0.9,
                delay: delay + i * stagger,
                ease: defaultEase,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
