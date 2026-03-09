import { motion } from "framer-motion";

const petals = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 10 + Math.random() * 8,
  size: 6 + Math.random() * 14,
  type: i % 4, // 0: circle petal, 1: heart shape, 2: sparkle, 3: small dot
  sway: 50 + Math.random() * 100,
  opacity: 0.3 + Math.random() * 0.4,
}));

const petalColors = [
  "radial-gradient(circle, hsl(350, 60%, 75%), hsl(350, 50%, 65%))",
  "radial-gradient(circle, hsl(40, 70%, 65%), hsl(40, 60%, 55%))",
  "radial-gradient(circle, hsl(0, 50%, 70%), hsl(350, 40%, 60%))",
  "radial-gradient(circle, hsl(35, 60%, 75%), hsl(40, 50%, 65%))",
];

const FloatingPetals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          initial={{
            x: 0,
            y: "-5vh",
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            x: [0, petal.sway, -petal.sway / 2, petal.sway / 3, 0],
            rotate: [0, 180, 360, 540, 720],
            opacity: [0, petal.opacity, petal.opacity, petal.opacity, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${petal.left}%`,
          }}
        >
          {petal.type === 1 ? (
            // Heart shape
            <div
              style={{ fontSize: petal.size * 0.8 }}
              className="text-primary/40"
            >
              ❤
            </div>
          ) : petal.type === 2 ? (
            // Sparkle
            <div
              style={{ fontSize: petal.size * 0.7 }}
              className="text-gold/40"
            >
              ✦
            </div>
          ) : (
            // Circle petal
            <div
              className="rounded-full"
              style={{
                width: petal.size,
                height: petal.size,
                background: petalColors[petal.id % petalColors.length],
                opacity: 0.7,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPetals;
