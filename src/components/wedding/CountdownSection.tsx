import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Calendar } from "lucide-react";

const WEDDING_DATE = new Date("2026-05-08T10:00:00").getTime();

const FlipNumber = ({ value, label, index }: { value: number; label: string; index: number }) => {
  const display = String(value).padStart(2, "0");
  const digits = display.split("");

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.12, type: "spring", stiffness: 120 }}
      viewport={{ once: true }}
    >
      <div className="flex gap-0.5 sm:gap-1">
        {digits.map((digit, dIdx) => (
          <div
            key={`${label}-${dIdx}`}
            className="relative w-[28px] h-[42px] xs:w-[34px] xs:h-[50px] sm:w-[46px] sm:h-[66px] md:w-[56px] md:h-[80px] rounded-lg sm:rounded-xl overflow-hidden"
          >
            {/* Card background with glass effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/90 via-card/80 to-card/70 backdrop-blur-md border border-accent/20 rounded-lg sm:rounded-xl shadow-lg" />

            {/* Center line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/10 z-10" />

            {/* Top highlight */}
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-accent/[0.08] to-transparent rounded-t-lg sm:rounded-t-xl" />

            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent z-20"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 3 + index + dIdx }}
            />

            {/* Digit */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={`${digit}-${dIdx}`}
                  initial={{ y: -20, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: 20, opacity: 0, rotateX: 90 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="font-display text-lg xs:text-xl sm:text-3xl md:text-4xl font-bold text-primary block"
                  style={{ textShadow: "0 1px 2px hsl(var(--primary) / 0.15)" }}
                >
                  {digit}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Bottom shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-primary/[0.04] to-transparent rounded-b-lg sm:rounded-b-xl" />

            {/* Pulse on seconds */}
            {label === "Seconds" && (
              <motion.div
                className="absolute inset-0 rounded-lg sm:rounded-xl border border-accent/25"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Colon separator dots between digit pairs - rendered outside */}

      <motion.span
        className="font-body text-[10px] xs:text-xs sm:text-sm md:text-base text-muted-foreground mt-1.5 sm:mt-2 tracking-widest uppercase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 + index * 0.1 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

const ColonSeparator = ({ index }: { index: number }) => (
  <motion.div
    className="flex flex-col items-center gap-1.5 sm:gap-2 pt-2 sm:pt-4 md:pt-5"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3 + index * 0.12 }}
    viewport={{ once: true }}
  >
    <motion.div
      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent/60"
      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
    />
    <motion.div
      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent/60"
      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 + index * 0.3 }}
    />
  </motion.div>
);

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
    <section className="py-8 sm:py-16 md:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-accent/[0.04] blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-primary/[0.03] blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
        >
          <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <Sparkles size={14} className="text-accent" />
          </motion.div>
          <span className="font-body text-xs sm:text-sm text-accent-foreground/70 tracking-wide">Counting Down</span>
        </motion.div>

        <motion.p
          className="font-script text-3xl sm:text-4xl md:text-5xl text-gold mb-1 sm:mb-2"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Save the Date
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1"
        >
          Wedding Begins In
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
        >
          <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-accent/40" />
          <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <Heart size={10} className="text-accent fill-accent/50" />
          </motion.div>
          <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-accent/40" />
        </motion.div>

        {/* Countdown container with glass card */}
        <motion.div
          className="relative mx-auto inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
        >
          {/* Outer glow */}
          <div className="absolute -inset-3 sm:-inset-4 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-accent/[0.06] via-primary/[0.04] to-accent/[0.06] blur-xl" />

          {/* Glass container */}
          <div className="relative bg-gradient-to-b from-card/50 to-card/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-accent/15 px-4 py-5 sm:px-8 sm:py-7 md:px-10 md:py-8">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl sm:rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-accent/30 rounded-tr-2xl sm:rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-accent/30 rounded-bl-2xl sm:rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-accent/30 rounded-br-2xl sm:rounded-br-3xl" />

            <div className="flex items-start justify-center gap-1 xs:gap-1.5 sm:gap-3 md:gap-4">
              {units.map((unit, i) => (
                <div key={unit.label} className="flex items-start gap-1 xs:gap-1.5 sm:gap-3 md:gap-4">
                  <FlipNumber value={unit.value} label={unit.label} index={i} />
                  {i < units.length - 1 && <ColonSeparator index={i} />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 flex flex-col items-center gap-2"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-primary/[0.06] border border-primary/10"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar size={14} className="text-accent" />
            <span className="font-body text-sm sm:text-base text-primary font-medium tracking-wide">
              6th May – 8th May, 2026
            </span>
          </motion.div>
          <motion.p
            className="font-script text-lg sm:text-xl text-gold/70"
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Jaipur, Rajasthan
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
