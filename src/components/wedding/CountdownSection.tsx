import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-05-08T10:00:00").getTime();

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
    <section className="py-20 px-4 bg-cream-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-script text-3xl text-gold mb-2">Save the Date</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-10">
          Wedding Begins In
        </h2>

        <div className="flex justify-center gap-2 sm:gap-4 md:gap-8">
          {units.map((unit) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center bg-background rounded-xl p-2 sm:p-4 md:p-6 shadow-wedding min-w-[60px] sm:min-w-[70px] md:min-w-[100px] border border-gold/20"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-primary">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="font-body text-xs sm:text-sm md:text-base text-muted-foreground mt-1">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
