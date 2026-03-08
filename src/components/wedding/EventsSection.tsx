import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Shirt } from "lucide-react";

interface WeddingEvent {
  name: string;
  date: string;
  time: string;
  dressCode: string;
  location: string;
  emoji: string;
}

const events: WeddingEvent[] = [
  {
    name: "Haldi Ceremony",
    date: "6 May 2026",
    time: "10:00 AM",
    dressCode: "Yellow Traditional",
    location: "Sharma Family Residence",
    emoji: "🌼",
  },
  {
    name: "Mehendi Ceremony",
    date: "7 May 2026",
    time: "4:00 PM",
    dressCode: "Green / Floral Traditional",
    location: "Royal Garden Banquet Hall",
    emoji: "🌿",
  },
  {
    name: "Wedding Ceremony",
    date: "8 May 2026",
    time: "10:00 AM",
    dressCode: "Red / Maroon Traditional",
    location: "Grand Palace Convention Center, Jaipur",
    emoji: "💍",
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 px-4 bg-cream-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <p className="font-script text-3xl text-gold mb-2">Celebrations</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Wedding Events
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-background rounded-2xl p-6 md:p-8 shadow-wedding border border-gold/20 text-center"
            >
              <span className="text-4xl mb-4 block">{event.emoji}</span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-5">
                {event.name}
              </h3>

              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3 font-body text-foreground">
                  <Calendar size={18} className="text-gold flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 font-body text-foreground">
                  <Clock size={18} className="text-gold flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 font-body text-foreground">
                  <Shirt size={18} className="text-gold flex-shrink-0" />
                  <span>{event.dressCode}</span>
                </div>
                <div className="flex items-center gap-3 font-body text-foreground">
                  <MapPin size={18} className="text-gold flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventsSection;
