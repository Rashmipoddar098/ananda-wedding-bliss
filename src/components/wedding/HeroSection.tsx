import { motion } from "framer-motion";
import coupleImg from "@/assets/wedding-couple.png";
import flower1 from "@/assets/flower-cluster-1.png";
import flower2 from "@/assets/flower-cluster-2.png";
import flower3 from "@/assets/flower-cluster-3.png";
import bouquetLeft from "@/assets/floral-bouquet-left.png";
import bouquetRight from "@/assets/floral-bouquet-right.png";

// Flowers placed at angles around the circle, each rotated tangent to the curve
const flowers = [
  { angle: 0, img: flower1, rotateImg: 0 },
  { angle: 45, img: flower3, rotateImg: 45 },
  { angle: 90, img: flower2, rotateImg: 90 },
  { angle: 135, img: flower1, rotateImg: 135 },
  { angle: 180, img: flower3, rotateImg: 180 },
  { angle: 225, img: flower2, rotateImg: 225 },
  { angle: 270, img: flower1, rotateImg: 270 },
  { angle: 315, img: flower3, rotateImg: 315 },
];

const FlowerOnCircle = ({
  angle,
  img,
  rotateImg,
  radius,
  size,
  delay,
}: {
  angle: number;
  img: string;
  rotateImg: number;
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
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="absolute object-contain drop-shadow-lg pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: `translate(-50%, -50%) rotate(${rotateImg}deg)`,
      }}
    />
  );
};

const CircleFlowers = ({ radius, size }: { radius: number; size: number }) => (
  <>
    {flowers.map((f, i) => (
      <FlowerOnCircle key={f.angle} {...f} radius={radius} size={size} delay={0.5 + i * 0.1} />
    ))}
  </>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center z-20">

        {/* Ring + Flowers container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer ring */}
          <div className="w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full absolute border border-gold/15" />
          {/* Main shining ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] rounded-full absolute hero-circle-shine"
          />
          {/* Inner ring */}
          <div className="w-[250px] h-[250px] sm:w-[390px] sm:h-[390px] md:w-[530px] md:h-[530px] lg:w-[620px] lg:h-[620px] rounded-full absolute hero-circle-inner" />
          {/* Radial glow */}
          <div className="w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] rounded-full absolute bg-gradient-to-b from-gold/5 via-transparent to-pastel-pink/10" />

          {/* Flowers around the circle — responsive */}
          <div className="block sm:hidden">
            <CircleFlowers radius={120} size={50} />
          </div>
          <div className="hidden sm:block md:hidden">
            <CircleFlowers radius={190} size={65} />
          </div>
          <div className="hidden md:block lg:hidden">
            <CircleFlowers radius={260} size={80} />
          </div>
          <div className="hidden lg:block">
            <CircleFlowers radius={305} size={95} />

          {/* Floral Bouquet - Left */}
          <motion.img
            src={bouquetLeft}
            alt=""
            initial={{ opacity: 0, x: -40, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute pointer-events-none z-20 
              w-24 -left-8 top-1/2 -translate-y-1/2
              sm:w-36 sm:-left-12
              md:w-48 md:-left-16
              lg:w-56 lg:-left-20
              animate-float drop-shadow-xl"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Floral Bouquet - Right */}
          <motion.img
            src={bouquetRight}
            alt=""
            initial={{ opacity: 0, x: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute pointer-events-none z-20
              w-24 -right-8 top-1/2 -translate-y-1/2
              sm:w-36 sm:-right-12
              md:w-48 md:-right-16
              lg:w-56 lg:-right-20
              animate-float drop-shadow-xl"
            style={{ animationDelay: "1.5s" }}
          />
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
