import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import FamilySection from "@/components/wedding/FamilySection";
import EventsSection from "@/components/wedding/EventsSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import FloatingPetals from "@/components/FloatingPetals";
import mandalaImg from "@/assets/mandala-border.png";

const WeddingDetails = () => {
  return (
    <div className="min-h-screen hero-bg relative">
      <FloatingPetals />
      <HeroSection />
      <img src={mandalaImg} alt="" className="w-full opacity-15" />
      <CountdownSection />
      <FamilySection />
      <img src={mandalaImg} alt="" className="w-full opacity-15 rotate-180" />
      <EventsSection />
      <img src={mandalaImg} alt="" className="w-full opacity-15" />
      <RSVPSection />
      {/* Footer */}
      <footer className="text-center py-10 border-t border-gold/10">
        <p className="font-script text-3xl text-gold mb-2">Ananya & Rahul</p>
        <p className="font-body text-gold-light/60 text-lg">
          Made with love for our special day 💕
        </p>
      </footer>
    </div>
  );
};

export default WeddingDetails;
