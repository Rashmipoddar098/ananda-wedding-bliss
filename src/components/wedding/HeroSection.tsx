import { motion } from "framer-motion";
import coupleImg from "@/assets/wedding-couple.png";
import bouquetLeft from "@/assets/floral-bouquet-left.png";
import bouquetRight from "@/assets/floral-bouquet-right.png";
import bouquetDiagonal from "@/assets/floral-bouquet-diagonal.png";
import { useHeroSize } from "@/hooks/use-hero-size";

// Full circle bouquets at equal spacing (every 24 degrees = 15 bouquets)
const bouquetPositions = Array.from({ length: 15 }, (_, i) => {
  const angle = i * 24;
  const imgs = [bouquetLeft, bouquetDiagonal, bouquetRight];
  return { angle, img: imgs[i % 3], rotate: angle, label: `pos-${i}` };
});

// Mobile: fewer bouquets (every 45 degrees = 8 bouquets)
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
        width: size,
        height: size,
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

const HeroSection = () => {
  const sizes = useHeroSize();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-2 py-12 sm:py-20 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center z-20">

        {/* Ring + Bouquets container */}
        <div
          className="absolute flex items-center justify-center pointer-events-none"
          style={{ width: sizes.containerSize, height: sizes.containerSize }}
        >
          {/* Outer ring */}
          <div
            className="rounded-full absolute border border-gold/15"
            style={{ width: sizes.outerRing, height: sizes.outerRing }}
          />
          {/* Main shining ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="rounded-full absolute hero-circle-shine"
            style={{ width: sizes.shineRing, height: sizes.shineRing }}
          />
          {/* Inner ring */}
          <div
            className="rounded-full absolute hero-circle-inner"
            style={{ width: sizes.innerRing, height: sizes.innerRing }}
          />
          {/* Radial glow */}
          <div
            className="rounded-full absolute bg-gradient-to-b from-gold/10 via-transparent to-gold/5"
            style={{ width: sizes.shineRing, height: sizes.shineRing }}
          />

          {/* Bouquets */}
          <CircleBouquets
            radius={sizes.bouquetRadius}
            size={sizes.bouquetSize}
            positions={sizes.useMobileBouquets ? mobileBouquetPositions : bouquetPositions}
          />
        </div>

        {/* "Together Forever" */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`font-script ${sizes.scriptSize} text-gold mb-1 sm:mb-2 z-10`}
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
          <h1 className={`font-display ${sizes.nameSize} font-bold text-gold-light leading-tight drop-shadow-lg`}>
            Ananya
          </h1>
          <span className={`font-script text-gold ${sizes.scriptSize} block my-0 sm:my-1`}>
            &amp;
          </span>
          <h1 className={`font-display ${sizes.nameSize} font-bold text-gold-light leading-tight drop-shadow-lg`}>
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
              className={`${sizes.coupleWidth} object-contain drop-shadow-2xl`}
            />
          </div>
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={`font-body ${sizes.dateSize} text-gold-light/80 mt-2 sm:mt-4 z-10 tracking-wide`}
        >
          8 May 2026 • Jaipur, Rajasthan
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
