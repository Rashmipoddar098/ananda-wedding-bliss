import { motion } from "framer-motion";
import coupleImg from "@/assets/wedding-couple.png";
import bouquetLeft from "@/assets/floral-bouquet-left.png";
import bouquetRight from "@/assets/floral-bouquet-right.png";
import bouquetDiagonal from "@/assets/floral-bouquet-diagonal.png";

// Full bouquet positions for larger screens
const bouquetPositions = [
  { angle: 140, img: bouquetDiagonal, rotate: -40, label: "left-2",   radiusFactor: 1 },
  { angle: 148, img: bouquetDiagonal, rotate: -32, label: "left-3",   radiusFactor: 1 },
  { angle: 156, img: bouquetLeft,     rotate: -24, label: "left-4",   radiusFactor: 1 },
  { angle: 164, img: bouquetDiagonal, rotate: -16, label: "left-5",   radiusFactor: 1 },
  { angle: 172, img: bouquetLeft,     rotate: -8,  label: "left-6",   radiusFactor: 1 },
  { angle: 180, img: bouquetRight,    rotate: 0,   label: "left-7",   radiusFactor: 1 },
  { angle: 188, img: bouquetLeft,     rotate: 8,   label: "left-8",   radiusFactor: 1 },
  { angle: 196, img: bouquetDiagonal, rotate: 16,  label: "left-9",   radiusFactor: 1 },
  { angle: 204, img: bouquetLeft,     rotate: 24,  label: "left-10",  radiusFactor: 1 },
  { angle: 212, img: bouquetDiagonal, rotate: 32,  label: "left-11",  radiusFactor: 1 },
  { angle: 220, img: bouquetDiagonal, rotate: 40,  label: "left-12",  radiusFactor: 1 },
];

// Fewer bouquets for mobile to prevent overflow
const mobileBouquetPositions = [
  { angle: 156, img: bouquetLeft,     rotate: -24, label: "left-4",   radiusFactor: 1 },
  { angle: 168, img: bouquetDiagonal, rotate: -12, label: "left-5",   radiusFactor: 1 },
  { angle: 180, img: bouquetRight,    rotate: 0,   label: "left-7",   radiusFactor: 1 },
  { angle: 192, img: bouquetLeft,     rotate: 12,  label: "left-8",   radiusFactor: 1 },
  { angle: 204, img: bouquetDiagonal, rotate: 24,  label: "left-10",  radiusFactor: 1 },
];

const BouquetOnCircle = ({
  angle,
  img,
  rotate,
  radius,
  size,
  delay,
  radiusFactor = 1,
}: {
  angle: number;
  img: string;
  rotate: number;
  radius: number;
  size: number;
  delay: number;
  radiusFactor?: number;
}) => {
  const rad = (angle * Math.PI) / 180;
  const r = radius * radiusFactor;
  const x = Math.cos(rad) * r;
  const y = Math.sin(rad) * r;

  return (
    <motion.img
      src={img}
      alt=""
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="absolute object-contain drop-shadow-xl pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
      }}
    />
  );
};

const CircleBouquets = ({ radius, size, positions }: { radius: number; size: number; positions: typeof bouquetPositions }) => (
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
        radiusFactor={b.radiusFactor}
      />
    ))}
  </>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 py-16 sm:py-20 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center z-20">

        {/* Ring + Bouquets container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer ring */}
          <div className="w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[520px] sm:h-[520px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full absolute border border-gold/15" />
          {/* Main shining ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="w-[240px] h-[240px] xs:w-[280px] xs:h-[280px] sm:w-[460px] sm:h-[460px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] rounded-full absolute hero-circle-shine"
          />
          {/* Inner ring */}
          <div className="w-[200px] h-[200px] xs:w-[240px] xs:h-[240px] sm:w-[390px] sm:h-[390px] md:w-[530px] md:h-[530px] lg:w-[620px] lg:h-[620px] rounded-full absolute hero-circle-inner" />
          {/* Radial glow */}
          <div className="w-[240px] h-[240px] xs:w-[280px] xs:h-[280px] sm:w-[460px] sm:h-[460px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] rounded-full absolute bg-gradient-to-b from-gold/5 via-transparent to-pastel-pink/10" />

          {/* Bouquets — fewer on mobile, full set on larger screens */}
          <div className="block sm:hidden">
            <CircleBouquets radius={125} size={55} positions={mobileBouquetPositions} />
          </div>
          <div className="hidden sm:block md:hidden">
            <CircleBouquets radius={235} size={105} positions={bouquetPositions} />
          </div>
          <div className="hidden md:block lg:hidden">
            <CircleBouquets radius={315} size={135} positions={bouquetPositions} />
          </div>
          <div className="hidden lg:block">
            <CircleBouquets radius={365} size={155} positions={bouquetPositions} />
          </div>
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

        {/* Date */}
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
