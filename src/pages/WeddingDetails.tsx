import { motion } from "framer-motion";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import FamilySection from "@/components/wedding/FamilySection";
import MomentsSection from "@/components/wedding/MomentsSection";
import EventsSection from "@/components/wedding/EventsSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import FloatingPetals from "@/components/FloatingPetals";

const WeddingDetails = () => {
  return (
    <div className="min-h-screen gradient-wedding relative">
      <FloatingPetals />
      <HeroSection />
      <CountdownSection />
      <FamilySection />
      <MomentsSection />
      <EventsSection />
      <RSVPSection />
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center py-10 sm:py-14 border-t border-primary/10 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/[0.03] blur-3xl" />
        </motion.div>
        <motion.p
          className="font-script text-2xl sm:text-3xl text-primary mb-2 relative z-10"
          whileInView={{ scale: [0.9, 1] }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ananya & Rahul
        </motion.p>
        <motion.p
          className="font-body text-muted-foreground text-base sm:text-lg relative z-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Made with love for our special day 💕
        </motion.p>
      </motion.footer>
    </div>
  );
};

export default WeddingDetails;
