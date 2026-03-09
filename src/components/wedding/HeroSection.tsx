import { motion } from "framer-motion";
import { Heart, ChevronRight } from "lucide-react";
import coupleImg from "@/assets/wedding-couple.png";

const FloatingSparkles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-gold/60"
        style={{
          left: `${10 + Math.random() * 80}%`,
          top: `${10 + Math.random() * 80}%`,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 4,
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  const scrollToContent = () => {
    const countdownSection = document.getElementById("countdown");
    if (countdownSection) {
      countdownSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      <FloatingSparkles />

      {/* Background glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Couple Image with golden frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative z-10 mb-6"
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 -m-4 rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.3) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Golden circular frame */}
        <div className="relative">
          {/* Outer ring with gradient */}
          <motion.div
            className="absolute inset-0 -m-2 rounded-full"
            style={{
              background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold-light)) 50%, hsl(var(--gold)) 100%)",
              padding: "3px",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-br from-gold via-gold-light to-gold overflow-hidden shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-card">
              <motion.img
                src={coupleImg}
                alt="Ananya and Rahul"
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Names */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center z-10 mb-4"
      >
        <motion.h1
          className="font-script text-4xl sm:text-5xl md:text-6xl text-gold drop-shadow-sm"
          animate={{ textShadow: ["0 0 10px hsl(var(--gold) / 0.3)", "0 0 20px hsl(var(--gold) / 0.5)", "0 0 10px hsl(var(--gold) / 0.3)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Ananya & Rahul
        </motion.h1>
      </motion.div>

      {/* Hearts */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center gap-2 z-10 mb-4"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
        >
          <Heart size={14} className="text-gold fill-gold" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        >
          <Heart size={18} className="text-gold fill-gold" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        >
          <Heart size={14} className="text-gold fill-gold" />
        </motion.div>
      </motion.div>

      {/* Date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center z-10 mb-2"
      >
        <p className="font-display text-xl sm:text-2xl md:text-3xl text-primary font-medium">
          8th May, 2026
        </p>
      </motion.div>

      {/* Save the Date */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="z-10 mb-8"
      >
        <p className="font-body text-sm sm:text-base tracking-[0.3em] text-muted-foreground uppercase">
          Save the Date
        </p>
      </motion.div>

      {/* Guest Message Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 w-full max-w-sm mx-auto"
      >
        {/* Corner decorations */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-gold/50 rounded-tl-lg" />
        <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-gold/50 rounded-tr-lg" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-gold/50 rounded-bl-lg" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-gold/50 rounded-br-lg" />
        
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-wedding border border-primary/10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="font-script text-2xl sm:text-3xl text-gold text-center mb-4"
          >
            Dear Guest,
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="font-body text-base sm:text-lg text-muted-foreground text-center leading-relaxed"
          >
            With great joy, we invite you to celebrate our wedding and be part of our beautiful journey together.
          </motion.p>
        </div>
      </motion.div>

      {/* Open Invitation Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px hsl(var(--gold) / 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToContent}
        className="z-10 mt-8 px-8 py-3 gradient-gold text-primary-foreground font-display text-base sm:text-lg rounded-full shadow-wedding flex items-center gap-2 tracking-wide"
      >
        Open Invitation
        <ChevronRight size={20} />
      </motion.button>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="z-10 mt-10 font-script text-lg sm:text-xl text-gold/80 text-center italic max-w-xs"
      >
        "Every love story is beautiful, but ours is my favorite."
      </motion.p>
    </section>
  );
};

export default HeroSection;
