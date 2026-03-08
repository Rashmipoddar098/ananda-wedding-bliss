import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WEDDING_DATE = new Date("2026-05-08T10:00:00").getTime();

const FlipNumber = ({ value, label }: { value: number; label: string }) => {
  const display = String(value).padStart(2, "0");

  return (
    <motion.div
      className="flex flex-col items-center bg-maroon/40 backdrop-blur-sm rounded-xl p-2 sm:p-4 md:p-6 shadow-wedding min-w-[60px] sm:min-w-[70px] md:min-w-[100px] border border-gold/20 relative overflow-hidden"
      whileHover={{ scale: 1.08, borderColor: "hsl(40, 70%, 50%)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />

      <div className="relative">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: -30, opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ y: 30, opacity: 0, scale: 0.8, rotateX: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-gold block"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>

      <span className="font-body text-xs sm:text-sm md:text-base text-gold-light/60 mt-1">
        {label}
      </span>

      {/* Pulse ring on seconds */}
      {label === "Seconds" && (
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-gold/20"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(0, WEDDING_DATE - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.p
          className="font-script text-3xl text-gold mb-2"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Save the Date
        </motion.p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-light mb-10">
          Wedding Begins In
        </h2>

        <div className="flex justify-center gap-2 sm:gap-4 md:gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <FlipNumber value={unit.value} label={unit.label} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
