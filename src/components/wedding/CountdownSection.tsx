import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const WEDDING_DATE = new Date("2026-05-08T10:00:00").getTime();

const FlipNumber = ({ value, label, index }: { value: number; label: string; index: number }) => {
  const display = String(value).padStart(2, "0");

  return (
    <motion.div
      className="flex flex-col items-center bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 shadow-wedding min-w-[60px] sm:min-w-[70px] md:min-w-[100px] border border-primary/15 relative overflow-hidden"
      whileHover={{ scale: 1.08, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 + index }}
      />

      {/* Top glow line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
        viewport={{ once: true }}
      />

      <div className="relative">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: -30, opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ y: 30, opacity: 0, scale: 0.8, rotateX: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-primary block"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.span
        className="font-body text-xs sm:text-sm md:text-base text-muted-foreground mt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.1 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.span>

      {/* Pulse ring on seconds */}
      {label === "Seconds" && (
        <motion.div
          className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-accent/20"
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
    <section className="py-10 sm:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
        >
          <Sparkles size={14} className="text-accent" />
          <span className="font-body text-xs sm:text-sm text-accent-foreground/70">Counting Down</span>
        </motion.div>

        <motion.p
          className="font-script text-3xl sm:text-4xl text-gold mb-2"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Save the Date
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3"
        >
          Wedding Begins In
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8 sm:mb-10"
        >
          <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-accent/40" />
          <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <Heart size={10} className="text-accent fill-accent/50" />
          </motion.div>
          <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-accent/40" />
        </motion.div>

        <div className="flex justify-center gap-2 sm:gap-4 md:gap-6">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
            >
              <FlipNumber value={unit.value} label={unit.label} index={i} />
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 font-script text-lg sm:text-xl text-gold/60"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          // @ts-ignore
          transition={{ duration: 3, repeat: Infinity }}
        >
          8 May 2026 • Jaipur, Rajasthan
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
