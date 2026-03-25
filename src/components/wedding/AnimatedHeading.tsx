import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Our", "Wedding", "Celebrations"];

const AnimatedHeading = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(6px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide gradient-gold bg-clip-text text-transparent drop-shadow-sm"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedHeading;
