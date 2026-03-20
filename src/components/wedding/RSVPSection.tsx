import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Mail } from "lucide-react";

const CrackerParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 30,
      y: 40 + Math.random() * 20,
      color: [
        "hsl(40,70%,55%)", "hsl(350,60%,65%)", "hsl(0,70%,45%)",
        "hsl(45,90%,65%)", "hsl(280,60%,65%)", "hsl(120,50%,55%)",
        "hsl(200,70%,60%)", "hsl(30,80%,60%)",
      ][i % 8],
      size: 3 + Math.random() * 7,
      angle: (i / 80) * 360 + Math.random() * 40,
      speed: 60 + Math.random() * 160,
      delay: Math.random() * 0.4,
      shape: Math.random() > 0.5 ? "circle" : "rect",
    }));
  }, []);

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute pointer-events-none z-30"
          style={{
            width: p.size,
            height: p.shape === "rect" ? p.size * 2 : p.size,
            background: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.5, 1, 0.3],
            opacity: [1, 1, 0.7, 0],
            x: [0, Math.cos((p.angle * Math.PI) / 180) * p.speed],
            y: [
              0,
              Math.sin((p.angle * Math.PI) / 180) * p.speed - 50,
              Math.sin((p.angle * Math.PI) / 180) * p.speed + 80,
            ],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: 1.6 + Math.random() * 1,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Star bursts */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute pointer-events-none z-30"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${5 + Math.random() * 50}%`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.8, 0],
            opacity: [1, 1, 0],
            rotate: [0, 180],
          }}
          transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
        >
          <Sparkles size={18} className="text-gold" />
        </motion.div>
      ))}
    </>
  );
};

const CornerDecorations = () => (
  <>
    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
    <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
    <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
  </>
);

const RSVPSection = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Background blobs */}
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
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
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
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-maroon-deep border-2 border-gold/30 flex items-center justify-center shadow-lg shadow-gold/10">
            <Mail size={28} className="text-gold" />
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={16} className="text-accent fill-accent/60" />
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
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="bg-maroon-deep border-2 border-gold/20 p-6 sm:p-8 md:p-10 text-center space-y-5 sm:space-y-6 relative">
                <CornerDecorations />

                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.06] to-transparent pointer-events-none"
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
                  <p className="font-display text-lg sm:text-xl text-cream">
                    Dear <span className="text-gold font-semibold">Guest,</span>
                  </p>
                  <div className="w-10 h-px bg-gold/40 mx-auto mt-3" />
                </motion.div>

                {/* Invitation text */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="font-body text-base sm:text-lg text-cream/70 leading-relaxed max-w-xs mx-auto"
                >
                  We would be truly honoured by your gracious presence at the wedding celebrations of
                </motion.p>

                {/* Couple Names */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="space-y-1 py-2"
                >
                  <motion.h2
                    className="font-display text-3xl sm:text-4xl font-bold text-cream tracking-wider uppercase"
                    animate={{ textShadow: ["0 0 10px hsl(40,70%,50%,0)", "0 0 20px hsl(40,70%,50%,0.3)", "0 0 10px hsl(40,70%,50%,0)"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Ananya
                  </motion.h2>
                  <p className="font-script text-2xl sm:text-3xl text-gold">&</p>
                  <motion.h2
                    className="font-display text-3xl sm:text-4xl font-bold text-cream tracking-wider uppercase"
                    animate={{ textShadow: ["0 0 10px hsl(40,70%,50%,0)", "0 0 20px hsl(40,70%,50%,0.3)", "0 0 10px hsl(40,70%,50%,0)"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    Rahul
                  </motion.h2>
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
                    <div className="w-10 sm:w-14 h-px bg-gold/40" />
                    <p className="font-display text-xs sm:text-sm tracking-[0.25em] text-cream/60 uppercase">
                      Save the Date
                    </p>
                    <div className="w-10 sm:w-14 h-px bg-gold/40" />
                  </div>
                  <p className="font-display text-base sm:text-lg font-semibold text-cream/90">
                    6th May – 8th May 2026
                  </p>
                </motion.div>

                {/* Hindi text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                  className="font-body text-sm sm:text-base text-cream/50 mt-2"
                >
                  आपकी उपस्थिति हमारा सम्मान होगा
                </motion.p>

                {/* Accept Button */}
                <motion.button
                  onClick={() => setAccepted(true)}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 15px 40px -10px hsl(40 70% 50% / 0.5)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="relative w-full max-w-xs mx-auto py-3.5 sm:py-4 gradient-gold font-display text-base sm:text-lg tracking-wider uppercase rounded-xl shadow-wedding flex items-center justify-center gap-3 overflow-hidden text-maroon-deep font-bold"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Cracker particles */}
              <CrackerParticles />

              <div className="bg-maroon-deep border-2 border-gold/20 p-8 sm:p-10 md:p-12 text-center relative overflow-hidden">
                <CornerDecorations />

                {/* Glow behind emoji */}
                <motion.div
                  className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gold/10 blur-3xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="text-5xl sm:text-7xl mb-4 relative z-10"
                >
                  🎉
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display text-2xl sm:text-3xl font-bold text-cream mb-2 relative z-10"
                >
                  Thank You, <span className="text-gold">Guest!</span>
                </motion.h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="w-16 h-px bg-gold/50 mx-auto my-4"
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="font-body text-base sm:text-lg text-cream/70 leading-relaxed max-w-xs mx-auto relative z-10"
                >
                  We are truly honoured and delighted that you have accepted our invitation. Your presence will make our celebrations even more special!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-6 space-y-1 relative z-10"
                >
                  <p className="font-script text-2xl sm:text-3xl text-gold">
                    Ananya & Rahul
                  </p>
                  <p className="font-display text-sm text-cream/50 tracking-wider">
                    6th May – 8th May 2026
                  </p>
                </motion.div>

                <motion.div
                  className="mt-6 relative z-10"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="font-body text-sm sm:text-base text-cream/50">
                    ✨ See you at the celebration ✨
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="font-body text-sm text-cream/40 mt-4 relative z-10"
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
