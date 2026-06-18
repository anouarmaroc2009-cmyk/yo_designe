import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Magnetic({ children, strength = 0.25, className = "" }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const b = ref.current.getBoundingClientRect();
    const cx = b.left + b.width / 2;
    const cy = b.top + b.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 200;
    const falloff = Math.max(0, 1 - dist / maxDist);
    setPos({ x: dx * strength * falloff, y: dy * strength * falloff });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        reset();
        setHovered(false);
      }}
      animate={{ x: pos.x, y: pos.y }}
      transition={{
        type: "spring",
        stiffness: hovered ? 180 : 100,
        damping: 18,
        mass: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
