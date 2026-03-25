import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, Camera } from "lucide-react";
import { useRef } from "react";
import momentHaldi from "@/assets/moment-haldi.jpg";
import momentMehandi from "@/assets/moment-mehandi.jpg";
import momentWedding from "@/assets/moment-wedding.jpg";
import momentCouple from "@/assets/moment-couple.jpg";
import momentJaimala from "@/assets/moment-jaimala.jpg";
import momentSindoor from "@/assets/moment-sindoor.jpg";
import momentSangeet from "@/assets/moment-sangeet.jpg";
import momentVidaai from "@/assets/moment-vidaai.jpg";
import momentBaraat from "@/assets/moment-baraat.jpg";

interface Moment {
  img: string;
  title: string;
  caption: string;
  emoji: string;
  span?: string;
}

const moments: Moment[] = [
  {
    img: momentCouple,
    title: "Together Forever",
    caption: "A love written in the stars",
    emoji: "💕",
    span: "",
  },
  {
    img: momentHaldi,
    title: "Haldi Ceremony",
    caption: "Blessed with turmeric & love",
    emoji: "🌼",
  },
  {
    img: momentMehandi,
    title: "Mehandi Night",
    caption: "Stories told through henna",
    emoji: "🌿",
  },
  {
    img: momentJaimala,
    title: "Jaimala",
    caption: "Garlands of eternal promise",
    emoji: "💐",
  },
  {
    img: momentWedding,
    title: "Sacred Pheras",
    caption: "Seven vows around the holy fire",
    emoji: "🔥",
  },
  {
    img: momentSindoor,
    title: "Sindoor Moment",
    caption: "The mark of togetherness",
    emoji: "❤️",
  },
  {
    img: momentSangeet,
    title: "Sangeet Night",
    caption: "Dancing into forever",
    emoji: "💃",
  },
  {
    img: momentVidaai,
    title: "Vidaai",
    caption: "A tearful farewell, a beautiful beginning",
    emoji: "🥹",
  },
  {
    img: momentBaraat,
    title: "Baraat",
    caption: "The grand arrival of the groom",
    emoji: "🐴",
  },
];

const cardVariants = [
  { initial: { opacity: 0, y: 60, scale: 0.9 }, animate: { opacity: 1, y: 0, scale: 1 } },
  { initial: { opacity: 0, x: -60, rotate: -3 }, animate: { opacity: 1, x: 0, rotate: 0 } },
  { initial: { opacity: 0, x: 60, rotate: 3 }, animate: { opacity: 1, x: 0, rotate: 0 } },
  { initial: { opacity: 0, y: 80, scale: 0.85 }, animate: { opacity: 1, y: 0, scale: 1 } },
  { initial: { opacity: 0, scale: 0.7 }, animate: { opacity: 1, scale: 1 } },
];

const MomentCard = ({ moment, index }: { moment: Moment; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const variant = cardVariants[index % cardVariants.length];

  return (
    <div className={`animate-rotating-border rounded-3xl ${moment.span || ""}`}>
    <motion.div
      ref={ref}
      initial={variant.initial}
      whileInView={variant.animate}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative rounded-3xl overflow-hidden shadow-wedding cursor-pointer"
    >
      <div className="relative w-full h-56 xs:h-64 sm:h-72 md:h-full min-h-[220px] sm:min-h-[250px]">
        {/* Image with parallax-like zoom */}
        <motion.img
          src={moment.img}
          alt={moment.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          loading="lazy"
        />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.85 }}
          transition={{ duration: 0.4 }}
        />

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

        {/* Emoji badge */}
        <motion.div
          className="absolute top-3 left-3 sm:top-4 sm:left-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center text-base sm:text-lg shadow-lg border border-primary/10"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3 + index * 0.08, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
        >
          {moment.emoji}
        </motion.div>

        {/* Heart icon - animated on hover */}
        <motion.div
          className="absolute top-3 right-3 sm:top-4 sm:right-4"
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.3 }}
          animate={{ opacity: 0 }}
          whileInView={{ opacity: 0 }}
        >
          <Heart size={18} className="text-primary-foreground/80 fill-primary-foreground/40 drop-shadow-lg sm:w-5 sm:h-5" />
        </motion.div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart size={18} className="text-primary-foreground fill-primary-foreground/60 drop-shadow-lg sm:w-5 sm:h-5" />
          </motion.div>
        </div>

        {/* Text content with stagger animation */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
          <motion.p
            className="font-script text-base sm:text-lg md:text-xl text-gold-light drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {moment.caption}
          </motion.p>
          <motion.h3
            className="font-display text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-lg mt-0.5 sm:mt-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {moment.title}
          </motion.h3>
        </div>

        {/* Bottom decorative line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
      </div>
    </motion.div>
    </div>
  );
};

const MomentsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 px-3 sm:px-4 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-accent/[0.04] blur-3xl" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-gold/[0.03] blur-2xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-primary/[0.02] blur-2xl"
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with rich animations */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-accent/10 border border-accent/20 mb-4 sm:mb-6"
          >
            <Camera size={14} className="text-accent sm:w-4 sm:h-4" />
            <span className="font-body text-xs sm:text-sm text-accent-foreground/70">Gallery</span>
            <Sparkles size={14} className="text-accent sm:w-4 sm:h-4" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="font-script text-3xl sm:text-4xl md:text-5xl text-gold mb-2 sm:mb-3"
          >
            Beautiful Moments
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4"
          >
            Our Wedding Celebrations
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 sm:gap-4 mt-3 sm:mt-4"
          >
            <div className="w-12 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent to-accent/40" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={14} className="text-accent/60 sm:w-4 sm:h-4" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={12} className="text-accent fill-accent/50 sm:w-3.5 sm:h-3.5" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={14} className="text-accent/60 sm:w-4 sm:h-4" />
            </motion.div>
            <div className="w-12 sm:w-20 md:w-24 h-px bg-gradient-to-l from-transparent to-accent/40" />
          </motion.div>
        </div>

        {/* Responsive Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {moments.map((moment, index) => (
            <MomentCard key={moment.title} moment={moment} index={index} />
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.p
            className="font-script text-lg sm:text-xl md:text-2xl text-gold/70"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨ Every moment tells our story ✨
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default MomentsSection;
