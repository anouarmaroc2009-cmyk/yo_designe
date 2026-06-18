import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const isInteractive = (el) => {
  if (!el) return false;
  const tag = el.tagName.toLowerCase();
  if (["a", "button", "input", "textarea"].includes(tag)) return true;
  return (
    el.getAttribute("role") === "button" ||
    el.closest("a, button, [role='button']") !== null
  );
};

export default function Cursor() {
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const bg = useMotionValue("rgba(196, 149, 106, 0.06)");
  const scale = useMotionValue(1);
  const borderW = useMotionValue(0);

  const smoothX = useSpring(cx, { stiffness: 150, damping: 24 });
  const smoothY = useSpring(cy, { stiffness: 150, damping: 24 });

  const handleMove = useCallback(
    (e) => {
      cx.set(e.clientX);
      cy.set(e.clientY);

      const target = e.target;
      if (isInteractive(target)) {
        bg.set("rgba(196, 149, 106, 0.12)");
        scale.set(2.5);
        borderW.set(1);
      } else {
        bg.set("rgba(196, 149, 106, 0.04)");
        scale.set(1);
        borderW.set(0);
      }
    },
    [cx, cy, bg, scale, borderW],
  );

  useEffect(() => {
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [handleMove]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[99999] size-8 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        scale,
        backgroundColor: bg,
        borderWidth: borderW,
        borderColor: "rgba(196, 149, 106, 0.3)",
        transition: "background-color 0.5s ease, border-width 0.5s ease",
      }}
    />
  );
}
