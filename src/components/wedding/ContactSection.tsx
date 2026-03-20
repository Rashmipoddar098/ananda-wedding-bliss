import { motion } from "framer-motion";
import { Phone, MessageCircle, Sparkles, User } from "lucide-react";

const contacts = [
  {
    title: "Father of the Bride",
    name: "Mr. Sharma",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
  },
  {
    title: "Father of the Groom",
    name: "Mr. Verma",
    phone: "+91 98765 43211",
    whatsapp: "+91 98765 43211",
  },
];

const ContactCard = ({
  contact,
  index,
}: {
  contact: (typeof contacts)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="relative bg-card/80 backdrop-blur-sm border border-primary/15 rounded-2xl p-6 sm:p-8 text-center space-y-4 overflow-hidden shadow-wedding">
      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/20 rounded-tl-lg" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/20 rounded-tr-lg" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/20 rounded-bl-lg" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/20 rounded-br-lg" />

      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
      />

      {/* Avatar */}
      <motion.div
        className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.4 }}
      >
        <User size={24} className="text-primary" />
      </motion.div>

      {/* Title */}
      <div>
        <p className="font-display text-xs sm:text-sm tracking-[0.2em] text-muted-foreground uppercase">
          {contact.title}
        </p>
        <motion.p
          className="font-display text-lg sm:text-xl font-bold text-primary mt-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.2 }}
          viewport={{ once: true }}
        >
          {contact.name}
        </motion.p>
      </div>

      <div className="w-10 h-px bg-primary/20 mx-auto" />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <motion.a
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -8px hsl(var(--primary) / 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-display text-sm tracking-wider hover:bg-primary/15 transition-colors w-full sm:w-auto justify-center"
        >
          <Phone size={16} />
          <span>Call</span>
        </motion.a>

        <motion.a
          href={`https://wa.me/${contact.whatsapp.replace(/[\s+]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -8px hsl(40 70% 50% / 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-gold text-primary-foreground font-display text-sm tracking-wider font-bold w-full sm:w-auto justify-center"
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const ContactSection = () => {
  return (
    <section className="py-12 sm:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-accent/[0.06] blur-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-pastel-pink/20 blur-2xl"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-lg mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-script text-3xl sm:text-4xl text-gold mb-1"
          >
            Contact Us
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="font-body text-sm sm:text-base text-muted-foreground mt-2"
          >
            For any queries or assistance, feel free to reach out
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mt-3"
          >
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-accent/50" />
            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Sparkles size={14} className="text-accent/70" />
            </motion.div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </motion.div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {contacts.map((contact, i) => (
            <ContactCard key={contact.title} contact={contact} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
