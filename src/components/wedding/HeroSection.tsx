import { motion } from "framer-motion";
import coupleImg from "@/assets/wedding-couple.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Central circle container — names + couple all inside */}
      <div className="relative flex flex-col items-center justify-center z-20">
        {/* Decorative circles with shine */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer ornamental ring — slow spin + shimmer */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full absolute"
            style={{
              border: "1px solid transparent",
              borderImage: "linear-gradient(135deg, hsl(var(--gold) / 0.05), hsl(var(--gold) / 0.3), hsl(var(--gold) / 0.05)) 1",
            }}
          />
          {/* Main shining ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] rounded-full absolute hero-circle-shine"
          />
          {/* Inner glowing ring */}
          <div className="w-[250px] h-[250px] sm:w-[390px] sm:h-[390px] md:w-[530px] md:h-[530px] lg:w-[620px] lg:h-[620px] rounded-full absolute hero-circle-inner" />
          {/* Soft radial glow */}
          <div className="w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] rounded-full absolute bg-gradient-to-b from-gold/5 via-transparent to-pastel-pink/10" />
          {/* Sparkle dots on the ring */}
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] rounded-full absolute"
            style={{
              background: "radial-gradient(circle at 20% 10%, hsl(var(--gold) / 0.4) 0%, transparent 3%), radial-gradient(circle at 85% 25%, hsl(var(--gold) / 0.3) 0%, transparent 2%), radial-gradient(circle at 10% 75%, hsl(var(--gold) / 0.35) 0%, transparent 2.5%), radial-gradient(circle at 90% 80%, hsl(var(--gold) / 0.3) 0%, transparent 2%)",
            }}
          />
        </div>

        {/* "Together Forever" */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-script text-xl sm:text-2xl md:text-3xl text-gold mb-1 sm:mb-2 z-10"
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
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
            Ananya
          </h1>
          <span className="font-script text-gold text-2xl sm:text-3xl md:text-4xl block my-0 sm:my-1">
            &
          </span>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
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
              className="w-36 sm:w-56 md:w-72 lg:w-80 object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Date below couple */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="font-body text-sm sm:text-lg md:text-xl text-muted-foreground mt-2 sm:mt-4 z-10 tracking-wide"
        >
          12 February 2026 • Jaipur, Rajasthan
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
