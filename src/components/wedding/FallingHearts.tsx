import { motion } from "framer-motion";
import { useMemo } from "react";

const FallingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 10,
        size: 8 + Math.random() * 12,
        opacity: 0.08 + Math.random() * 0.15,
        sway: 30 + Math.random() * 60,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-accent/30"
          style={{ left: `${h.left}%`, fontSize: h.size }}
          initial={{ y: "-5%", opacity: 0 }}
          animate={{
            y: "105%",
            x: [0, h.sway, -h.sway / 2, 0],
            opacity: [0, h.opacity, h.opacity, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
};

export default FallingHearts;
