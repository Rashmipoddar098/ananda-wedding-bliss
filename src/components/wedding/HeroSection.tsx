import { motion } from "framer-motion";
import coupleImg from "@/assets/wedding-couple.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-2 xs:px-3 sm:px-4 py-12 xs:py-16 sm:py-20 overflow-hidden hero-bg">
      <div className="relative flex flex-col items-center justify-center z-20">

        {/* Ring container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer ring */}
          <div className="w-[240px] h-[240px] xs:w-[300px] xs:h-[300px] sm:w-[520px] sm:h-[520px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full absolute border border-gold/15" />
          {/* Main shining ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="w-[210px] h-[210px] xs:w-[260px] xs:h-[260px] sm:w-[460px] sm:h-[460px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] rounded-full absolute hero-circle-shine"
          />
          {/* Inner ring */}
          <div className="w-[175px] h-[175px] xs:w-[220px] xs:h-[220px] sm:w-[390px] sm:h-[390px] md:w-[530px] md:h-[530px] lg:w-[620px] lg:h-[620px] rounded-full absolute hero-circle-inner" />
          {/* Radial glow */}
          <div className="w-[210px] h-[210px] xs:w-[260px] xs:h-[260px] sm:w-[460px] sm:h-[460px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] rounded-full absolute bg-gradient-to-b from-gold/10 via-transparent to-gold/5" />
        </div>

        {/* "Together Forever" */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-script text-base xs:text-lg sm:text-2xl md:text-3xl text-gold mb-1 sm:mb-2 z-10"
        >
          Together Forever
        </motion.p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center z-10 mb-2 sm:mb-4"
        >
          <h1 className="font-display text-xl xs:text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold-light leading-tight drop-shadow-lg">
            Ananya
          </h1>
          <span className="font-script text-gold text-lg xs:text-xl sm:text-3xl md:text-4xl block my-0 sm:my-1">
            &
          </span>
          <h1 className="font-display text-xl xs:text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold-light leading-tight drop-shadow-lg">
            Rahul
          </h1>
        </motion.div>

        {/* Couple Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <div className="animate-float">
            <img
              src={coupleImg}
              alt="Ananya and Rahul performing wedding rituals around the sacred fire"
              className="w-24 xs:w-28 sm:w-56 md:w-72 lg:w-80 object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="font-body text-xs xs:text-sm sm:text-lg md:text-xl text-gold-light/80 mt-2 sm:mt-4 z-10 tracking-wide"
        >
          8 May 2026 • Jaipur, Rajasthan
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
