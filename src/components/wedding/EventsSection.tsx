import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Shirt, Sparkles, Heart, Navigation } from "lucide-react";

interface WeddingEvent {
  name: string;
  date: string;
  time: string;
  dressCode: string;
  location: string;
  mapQuery: string;
  emoji: string;
  color: string;
}

const events: WeddingEvent[] = [
  {
    name: "Haldi Ceremony",
    date: "6 May 2026",
    time: "10:00 AM",
    dressCode: "Yellow Traditional",
    location: "Sharma Family Residence",
    mapQuery: "Sharma Family Residence, Jaipur",
    emoji: "🌼",
    color: "from-yellow-500/20 to-amber-500/10",
  },
  {
    name: "Mehendi Ceremony",
    date: "7 May 2026",
    time: "4:00 PM",
    dressCode: "Green / Floral Traditional",
    location: "Royal Garden Banquet Hall",
    mapQuery: "Royal Garden Banquet Hall, Jaipur",
    emoji: "🌿",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    name: "Wedding Ceremony",
    date: "8 May 2026",
    time: "10:00 AM",
    dressCode: "Red / Maroon Traditional",
    location: "Grand Palace Convention Center, Jaipur",
    mapQuery: "Grand Palace Convention Center, Jaipur",
    emoji: "💍",
    color: "from-red-500/20 to-rose-500/10",
  },
];

const cardAnimations = [
  { initial: { opacity: 0, x: -80, rotate: -5 }, animate: { opacity: 1, x: 0, rotate: 0 } },
  { initial: { opacity: 0, y: 80, scale: 0.8 }, animate: { opacity: 1, y: 0, scale: 1 } },
  { initial: { opacity: 0, x: 80, rotate: 5 }, animate: { opacity: 1, x: 0, rotate: 0 } },
];

const InfoRow = ({ icon: Icon, text, delay }: { icon: any; text: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 font-body text-foreground/80"
  >
    <motion.div
      whileHover={{ rotate: 15, scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon size={18} className="text-gold flex-shrink-0" />
    </motion.div>
    <span>{text}</span>
  </motion.div>
);

const LocationButton = ({ event, index }: { event: WeddingEvent; index: number }) => (
  <motion.a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapQuery)}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.97 }}
    className="mt-4 sm:mt-5 w-full flex items-center justify-center gap-2.5 py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-display text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group/btn"
  >
    {/* Shimmer sweep */}
    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
    </div>

    <motion.div
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <MapPin size={16} className="flex-shrink-0" />
    </motion.div>
    <span className="truncate">{event.location}</span>
    <Navigation size={14} className="flex-shrink-0 opacity-70" />
  </motion.a>
);

const EventsSection = () => {
  return (
    <section className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/[0.03] blur-2xl"
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gold/[0.03] blur-2xl"
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
          >
            <Sparkles size={14} className="text-accent" />
            <span className="font-body text-xs sm:text-sm text-accent-foreground/70">Celebrations</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="font-script text-3xl sm:text-4xl text-gold mb-2"
          >
            Celebrations
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary"
          >
            Wedding Events
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-accent/40" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={12} className="text-accent/50" />
            </motion.div>
            <Heart size={10} className="text-accent fill-accent/50" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={12} className="text-accent/50" />
            </motion.div>
            <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-accent/40" />
          </motion.div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event, index) => {
            const anim = cardAnimations[index % cardAnimations.length];
            return (
              <motion.div
                key={event.name}
                initial={anim.initial}
                whileInView={anim.animate}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100, damping: 15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
                className="group relative animate-rotating-border rounded-2xl sm:rounded-3xl"
              >
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-wedding text-center overflow-hidden flex flex-col relative">
                {/* Gradient top accent */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${event.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                />

                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />

                {/* Emoji with bounce */}
                <motion.span
                  className="text-3xl sm:text-4xl mb-3 sm:mb-4 block"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                >
                  {event.emoji}
                </motion.span>

                <motion.h3
                  className="font-display text-lg sm:text-xl md:text-2xl font-bold text-primary mb-4 sm:mb-5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {event.name}
                </motion.h3>

                <div className="space-y-2.5 sm:space-y-3 text-left text-sm sm:text-base flex-1">
                  <InfoRow icon={Calendar} text={event.date} delay={0.5 + index * 0.15} />
                  <InfoRow icon={Clock} text={event.time} delay={0.55 + index * 0.15} />
                  <InfoRow icon={Shirt} text={event.dressCode} delay={0.6 + index * 0.15} />
                </div>

                {/* Location Button */}
                <LocationButton event={event} index={index} />

                {/* Corner decoration */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-accent/[0.03] blur-xl"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                />
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
