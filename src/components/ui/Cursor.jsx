import { useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TAGS = new Set(["a", "button", "input", "textarea"]);

export default function Cursor() {
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const scale = useMotionValue(1);

  const smoothX = useSpring(cx, { stiffness: 500, damping: 35 });
  const smoothY = useSpring(cy, { stiffness: 500, damping: 35 });

  const handleMove = useCallback(
    (e) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
      const el = e.target;
      scale.set(
        TAGS.has(el.tagName.toLowerCase()) || el.getAttribute("role") === "button"
          ? 2.5
          : 1,
      );
    },
    [cx, cy, scale],
  );

  useEffect(() => {
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [handleMove]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[99999] size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass/10 will-change-transform"
      style={{ x: smoothX, y: smoothY, scale }}
    />
  );
}
