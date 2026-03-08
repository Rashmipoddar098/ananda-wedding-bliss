import { motion } from "framer-motion";
import coupleImg from "@/assets/wedding-couple.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Names */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8 z-20"
      >
        <p className="font-script text-2xl text-gold mb-2">Together Forever</p>
        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary">
          Ananya{" "}
          <span className="font-script text-gold text-2xl sm:text-4xl md:text-5xl">&</span>{" "}
          Rahul
        </h1>
        <p className="font-body text-base sm:text-xl md:text-2xl text-muted-foreground mt-3 md:mt-4 px-2">
          12 February 2026 • Jaipur, Rajasthan
        </p>
      </motion.div>

      {/* Couple Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-20"
      >
        <div className="animate-float">
          <img
            src={coupleImg}
            alt="Ananya and Rahul performing wedding rituals around the sacred fire"
            className="w-48 sm:w-72 md:w-96 lg:w-[28rem] object-contain drop-shadow-2xl"
          />
        </div>
      </motion.div>

      {/* Decorative circle behind couple */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border-2 border-gold/20 z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[580px] md:h-[580px] rounded-full border border-gold/10 z-10" />
    </section>
  );
};

export default HeroSection;
