import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ganeshImg from "@/assets/ganesh-ji.png";
import mandalaImg from "@/assets/mandala-border.png";
import FloatingPetals from "@/components/FloatingPetals";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center hero-bg overflow-hidden px-4">
      <FloatingPetals />
      
      {/* Top mandala border */}
      <motion.img
        src={mandalaImg}
        alt=""
        className="absolute top-0 left-0 w-full opacity-40 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      />

      {/* Ganesh Ji */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-6"
      >
        <img
          src={ganeshImg}
          alt="Lord Ganesha - Blessings for auspicious beginnings"
          className="w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Shubh Vivah text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-script text-2xl md:text-3xl text-gold mb-4"
      >
        || Shubh Vivah ||
      </motion.p>

      {/* Couple Names */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center mb-6"
      >
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gold-light tracking-wide">
          Ananya
        </h1>
        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-gold my-2 md:my-4">
          weds
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gold-light tracking-wide">
          Rahul
        </h1>
      </motion.div>

      {/* Welcome message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="font-body text-lg md:text-xl text-gold-light/70 text-center max-w-lg mb-10 leading-relaxed"
      >
        With the blessings of Lord Ganesha and our beloved families, we invite
        you to celebrate the union of two souls in love.
      </motion.p>

      {/* Enter Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate("/wedding")}
        className="px-10 py-4 gradient-gold text-primary-foreground font-display text-lg md:text-xl rounded-full shadow-wedding tracking-wider hover:shadow-xl transition-shadow duration-300"
      >
        Enter Celebration ✨
      </motion.button>

      {/* Bottom mandala border */}
      <motion.img
        src={mandalaImg}
        alt=""
        className="absolute bottom-0 left-0 w-full opacity-40 pointer-events-none rotate-180"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};

export default Welcome;
