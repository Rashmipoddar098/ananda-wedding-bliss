import { motion } from "framer-motion";
import coupleImg from "@/assets/wedding-couple.png";
import flower1 from "@/assets/flower-cluster-1.png";
import flower2 from "@/assets/flower-cluster-2.png";
import flower3 from "@/assets/flower-cluster-3.png";

// Flower positions around the ring (angle in degrees)
const ringFlowers = [
  { angle: 0, img: flower1, rotate: 0 },
  { angle: 60, img: flower3, rotate: 30 },
  { angle: 120, img: flower2, rotate: -15 },
  { angle: 180, img: flower1, rotate: 10 },
  { angle: 240, img: flower3, rotate: -25 },
  { angle: 300, img: flower2, rotate: 20 },
];

const FlowerOnRing = ({
  angle,
  img,
  rotate,
  radius,
  size,
  delay,
}: {
  angle: number;
  img: string;
  rotate: number;
  radius: number;
  size: number;
  delay: number;
}) => {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.img
      src={img}
      alt=""
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="absolute object-contain drop-shadow-lg pointer-events-none"
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

const ResponsiveFlowers = ({ radius, size }: { radius: number; size: number }) => (
  <>
    {ringFlowers.map((f, i) => (
      <FlowerOnRing
        key={f.angle}
        {...f}
        radius={radius}
        size={size}
        delay={0.6 + i * 0.12}
      />
    ))}
  </>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center z-20">
        {/* Decorative circles with shine */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer ornamental ring */}
          <div className="w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full absolute border border-gold/15" />
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

          {/* Real flower clusters on ring — responsive */}
          <div className="block sm:hidden">
            <ResponsiveFlowers radius={150} size={50} />
          </div>
          <div className="hidden sm:block md:hidden">
            <ResponsiveFlowers radius={230} size={70} />
          </div>
          <div className="hidden md:block lg:hidden">
            <ResponsiveFlowers radius={310} size={90} />
          </div>
          <div className="hidden lg:block">
            <ResponsiveFlowers radius={360} size={105} />
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
