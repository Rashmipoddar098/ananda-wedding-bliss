import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Mail } from "lucide-react";

const RSVPSection = () => {
  const [accepted, setAccepted] = useState(false);
  const [crackers, setCrackers] = useState<{ id: number; x: number; y: number; color: string; size: number; angle: number; speed: number }[]>([]);

  useEffect(() => {
    if (accepted) {
      const particles: typeof crackers = [];
      for (let i = 0; i < 60; i++) {
        particles.push({
          id: i,
          x: 50 + (Math.random() - 0.5) * 20,
          y: 50,
          color: ["hsl(40,70%,50%)", "hsl(350,60%,70%)", "hsl(0,60%,30%)", "hsl(45,90%,65%)", "hsl(280,60%,70%)", "hsl(120,50%,60%)"][Math.floor(Math.random() * 6)],
          size: 4 + Math.random() * 6,
          angle: Math.random() * 360,
          speed: 80 + Math.random() * 120,
        });
      }
      setCrackers(particles);
    }
  }, [accepted]);

  return (
    <section className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-gold/[0.03] blur-2xl"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="max-w-md mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-script text-3xl sm:text-4xl text-gold mb-1"
          >
            You're Invited
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mt-2"
          >
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-accent/50" />
            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Sparkles size={14} className="text-accent/70" />
            </motion.div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </motion.div>
        </div>

        {/* Envelope icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-maroon-deep/80 border border-accent/30 flex items-center justify-center shadow-lg">
            <Mail size={28} className="text-gold" />
            <motion.div
              className="absolute"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={14} className="text-accent fill-accent/60" />
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!accepted ? (
            <motion.div
              key="invitation"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
            >
              {/* Dark invitation card */}
              <div className="bg-maroon-deep/90 backdrop-blur-sm border border-accent/20 p-6 sm:p-8 md:p-10 text-center space-y-5 sm:space-y-6 relative">
                {/* Subtle corner decorations */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-accent/30 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-accent/30 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-accent/30 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-accent/30 rounded-br-lg" />

                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                />

                {/* Dear Guest */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="font-display text-lg sm:text-xl text-primary-foreground/90">
                    Dear <span className="text-gold font-semibold">Guest,</span>
                  </p>
                  <div className="w-10 h-px bg-accent/40 mx-auto mt-3" />
                </motion.div>

                {/* Invitation text */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="font-body text-base sm:text-lg text-primary-foreground/70 leading-relaxed max-w-xs mx-auto"
                >
                  We would be truly honoured by your gracious presence at the wedding celebrations of
                </motion.p>

                {/* Couple Names */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="space-y-1"
                >
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground tracking-wider uppercase">
                    Ananya
                  </h2>
                  <p className="font-script text-xl sm:text-2xl text-gold">&</p>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground tracking-wider uppercase">
                    Rahul
                  </h2>
                </motion.div>

                {/* Save the Date */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 sm:w-14 h-px bg-accent/40" />
                    <p className="font-display text-xs sm:text-sm tracking-[0.25em] text-primary-foreground/60 uppercase">
                      Save the Date
                    </p>
                    <div className="w-10 sm:w-14 h-px bg-accent/40" />
                  </div>
                  <p className="font-display text-base sm:text-lg font-semibold text-primary-foreground/90">
                    6th May – 8th May 2026
                  </p>
                </motion.div>

                {/* Hindi text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                  className="font-body text-sm sm:text-base text-primary-foreground/50 mt-2"
                >
                  आपकी उपस्थिति हमारा सम्मान होगा
                </motion.p>

                {/* Accept Button */}
                <motion.button
                  onClick={() => setAccepted(true)}
                  whileHover={{ scale: 1.04, boxShadow: "0 15px 40px -10px hsl(40 70% 50% / 0.5)" }}
                  whileTap={{ scale: 0.96 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="relative w-full max-w-xs mx-auto py-3.5 sm:py-4 gradient-gold text-primary-foreground font-display text-base sm:text-lg tracking-wider uppercase rounded-xl shadow-wedding flex items-center justify-center gap-3 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <span className="relative">Accept Invitation</span>
                  <span className="relative">💌</span>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
            >
              {/* Crackers / Confetti */}
              {crackers.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full pointer-events-none z-20"
                  style={{
                    width: p.size,
                    height: p.size,
                    background: p.color,
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1.5, 1, 0.5],
                    opacity: [1, 1, 0.8, 0],
                    x: [0, Math.cos(p.angle * Math.PI / 180) * p.speed],
                    y: [0, Math.sin(p.angle * Math.PI / 180) * p.speed - 40, Math.sin(p.angle * Math.PI / 180) * p.speed + 60],
                  }}
                  transition={{ duration: 1.8 + Math.random() * 0.8, delay: Math.random() * 0.3, ease: "easeOut" }}
                />
              ))}

              {/* Sparkle bursts */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute pointer-events-none z-20"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${10 + Math.random() * 40}%`,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: [0, 1.5, 0], opacity: [1, 1, 0], rotate: [0, 180] }}
                  transition={{ duration: 1.2, delay: 0.5 + i * 0.15 }}
                >
                  <Sparkles size={16} className="text-gold" />
                </motion.div>
              ))}

              <div className="bg-maroon-deep/90 backdrop-blur-sm border border-accent/20 p-8 sm:p-10 md:p-12 text-center relative overflow-hidden">
                {/* Corner decorations */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-accent/30 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-accent/30 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-accent/30 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-accent/30 rounded-br-lg" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-5xl sm:text-6xl mb-4"
                >
                  🎉
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-2"
                >
                  Thank You, <span className="text-gold">Guest!</span>
                </motion.h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="w-16 h-px bg-accent/50 mx-auto my-4"
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="font-body text-base sm:text-lg text-primary-foreground/70 leading-relaxed max-w-xs mx-auto"
                >
                  We are truly honoured and delighted that you have accepted our invitation. Your presence will make our celebrations even more special!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-6 space-y-1"
                >
                  <p className="font-script text-2xl sm:text-3xl text-gold">
                    Ananya & Rahul
                  </p>
                  <p className="font-display text-sm text-primary-foreground/50 tracking-wider">
                    6th May – 8th May 2026
                  </p>
                </motion.div>

                <motion.div
                  className="mt-6"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="font-body text-sm sm:text-base text-primary-foreground/40">
                    ✨ See you at the celebration ✨
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="font-body text-sm text-primary-foreground/40 mt-4"
                >
                  आपकी उपस्थिति हमारा सम्मान होगा 💕
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
