import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, MapPin, CalendarHeart } from "lucide-react";
import coupleImg from "@/assets/wedding-couple.png";
import bouquetLeft from "@/assets/floral-bouquet-left.png";
import bouquetRight from "@/assets/floral-bouquet-right.png";
import bouquetDiagonal from "@/assets/floral-bouquet-diagonal.png";
import { useHeroSize } from "@/hooks/use-hero-size";

const bouquetPositions = Array.from({ length: 15 }, (_, i) => {
  const angle = i * 24;
  const imgs = [bouquetLeft, bouquetDiagonal, bouquetRight];
  return { angle, img: imgs[i % 3], rotate: angle, label: `pos-${i}` };
});

const mobileBouquetPositions = Array.from({ length: 8 }, (_, i) => {
  const angle = i * 45;
  const imgs = [bouquetLeft, bouquetDiagonal, bouquetRight];
  return { angle, img: imgs[i % 3], rotate: angle, label: `mob-${i}` };
});

const BouquetOnCircle = ({
  angle, img, rotate, radius, size, delay,
}: {
  angle: number; img: string; rotate: number; radius: number; size: number; delay: number;
}) => {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;
  const floatDuration = 4 + delay * 2;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: size, height: size,
        left: `calc(50% + ${x}px - ${size / 2}px)`,
        top: `calc(50% + ${y}px - ${size / 2}px)`,
      }}
    >
      <motion.img
        src={img}
        alt=""
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: [1, 1.03, 1, 0.98, 1] }}
        transition={{
          opacity: { duration: 0.8, delay },
          scale: { duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay },
        }}
        className="w-full h-full object-contain drop-shadow-xl"
        style={{ rotate: `${rotate}deg` }}
      />
    </div>
  );
};

const CircleBouquets = ({ radius, size, positions }: {
  radius: number; size: number; positions: typeof bouquetPositions;
}) => (
  <>
    {positions.map((b, i) => (
      <BouquetOnCircle
        key={b.label}
        angle={b.angle}
        img={b.img}
        rotate={b.rotate}
        radius={radius}
        size={size}
        delay={0.3 + i * 0.12}
      />
    ))}
  </>
);

/* Floating sparkle particles */
const SparkleParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${10 + Math.random() * 80}%`,
          top: `${10 + Math.random() * 80}%`,
        }}
        animate={{
          opacity: [0, 0.8, 0],
          scale: [0, 1, 0],
          y: [0, -30 - Math.random() * 40],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut",
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            background: i % 3 === 0
              ? "hsl(var(--gold))"
              : i % 3 === 1
              ? "hsl(var(--gold-light))"
              : "hsl(var(--primary) / 0.4)",
          }}
        />
      </motion.div>
    ))}
  </div>
);

const HeroSection = () => {
  const sizes = useHeroSize();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-2 py-12 sm:py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ scale: bgScale }}>
        {/* Radial glow center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.06) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary glow */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.03) 0%, transparent 60%)" }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 sm:w-80 h-48 sm:h-80 rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.04) 0%, transparent 60%)" }}
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </motion.div>

      {/* Sparkle particles */}
      <SparkleParticles />

      <motion.div
        className="relative flex flex-col items-center justify-center z-20"
        style={{ y: contentY, opacity }}
      >
        {/* Ring + Bouquets container */}
        <div
          className="absolute flex items-center justify-center pointer-events-none"
          style={{ width: sizes.containerSize, height: sizes.containerSize }}
        >
          {/* Outer ring with pulse */}
          <motion.div
            className="rounded-full absolute border border-primary/15"
            style={{ width: sizes.outerRing, height: sizes.outerRing }}
            animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Main shining ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="rounded-full absolute hero-circle-shine"
            style={{ width: sizes.shineRing, height: sizes.shineRing }}
          />
          {/* Inner ring - counter rotate */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="rounded-full absolute hero-circle-inner"
            style={{ width: sizes.innerRing, height: sizes.innerRing }}
          />
          {/* Radial glow with animation */}
          <motion.div
            className="rounded-full absolute bg-gradient-to-b from-accent/10 via-transparent to-accent/5"
            style={{ width: sizes.shineRing, height: sizes.shineRing }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <CircleBouquets
            radius={sizes.bouquetRadius}
            size={sizes.bouquetSize}
            positions={sizes.useMobileBouquets ? mobileBouquetPositions : bouquetPositions}
          />
        </div>

        {/* Decorative top sparkle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="z-10 mb-1 sm:mb-2"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={16} className="text-gold/60 sm:w-5 sm:h-5" />
          </motion.div>
        </motion.div>

        {/* Names with stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10 mb-0 sm:mb-1"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className={`font-display ${sizes.nameSize} font-bold text-primary leading-none drop-shadow-lg`}
          >
            Ananya
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="relative my-0 sm:my-1"
          >
            <motion.span
              className={`font-script text-gold ${sizes.scriptSize} block`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              &amp;
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 50, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className={`font-display ${sizes.nameSize} font-bold text-primary leading-tight drop-shadow-lg`}
          >
            Rahul
          </motion.h1>
        </motion.div>

        {/* Couple Image with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 80 }}
          className="z-10 relative"
        >
          <motion.div
            className="absolute inset-0 -m-4 sm:-m-6 rounded-full"
            style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.1) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="animate-float">
            <img
              src={coupleImg}
              alt="Ananya and Rahul performing wedding rituals around the sacred fire"
              className={`${sizes.coupleWidth} object-contain drop-shadow-2xl relative`}
            />
          </div>
        </motion.div>

        {/* "Together Forever" below couple inside circle */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100 }}
          className="z-10 mt-1 sm:mt-2"
        >
          <motion.p
            className={`font-script ${sizes.scriptSize} text-gold drop-shadow-sm relative`}
            animate={{ textShadow: ["0 0 10px hsl(var(--gold) / 0.2)", "0 0 20px hsl(var(--gold) / 0.4)", "0 0 10px hsl(var(--gold) / 0.2)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Together Forever
          </motion.p>
        </motion.div>

        {/* Date badge - below circle */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="z-10 mt-3 sm:mt-5"
        >
          <motion.div
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-card/60 backdrop-blur-sm border border-primary/10 shadow-wedding"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px hsl(var(--gold) / 0.3)" }}
          >
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <CalendarHeart size={14} className="text-gold sm:w-4 sm:h-4" />
            </motion.div>
            <span className={`font-display ${sizes.dateSize} text-primary font-medium`}>
              8 May 2026
            </span>
            <div className="w-1 h-1 rounded-full bg-accent/50" />
            <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <MapPin size={14} className="text-gold sm:w-4 sm:h-4" />
            </motion.div>
            <span className={`font-body ${sizes.dateSize} text-muted-foreground`}>
              Jaipur, Rajasthan
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="z-10 mt-6 sm:mt-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-body text-[10px] sm:text-xs text-muted-foreground/60 tracking-widest uppercase">Scroll</span>
            <motion.div
              className="w-5 h-8 sm:w-6 sm:h-9 rounded-full border border-primary/20 flex items-start justify-center p-1.5"
            >
              <motion.div
                className="w-1 h-1.5 sm:w-1.5 sm:h-2 rounded-full bg-gold/60"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
