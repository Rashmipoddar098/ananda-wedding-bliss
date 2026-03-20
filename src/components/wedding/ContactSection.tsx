import { motion } from "framer-motion";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import fatherBrideImg from "@/assets/father-bride.jpg";
import fatherGroomImg from "@/assets/father-groom.jpg";

const contacts = [
  {
    title: "Father of the Bride",
    name: "Mr. Sharma",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    image: fatherBrideImg,
  },
  {
    title: "Father of the Groom",
    name: "Mr. Verma",
    phone: "+91 98765 43211",
    whatsapp: "+91 98765 43211",
    image: fatherGroomImg,
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
  >
    <div className="relative bg-card/80 backdrop-blur-sm border border-primary/15 rounded-2xl p-5 sm:p-7 text-center space-y-3 sm:space-y-4 overflow-hidden shadow-wedding">
      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-primary/20 rounded-tl-lg" />
      <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-primary/20 rounded-tr-lg" />
      <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-primary/20 rounded-bl-lg" />
      <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-primary/20 rounded-br-lg" />

      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
      />

      {/* Photo Avatar */}
      <motion.div
        className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[3px] border-accent/40 overflow-hidden shadow-lg relative"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={contact.image}
          alt={contact.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-accent/30"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Title & Name */}
      <div className="space-y-0.5">
        <p className="font-display text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground uppercase">
          {contact.title}
        </p>
        <motion.p
          className="font-display text-base sm:text-xl font-bold text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.2 }}
          viewport={{ once: true }}
        >
          {contact.name}
        </motion.p>
      </div>

      <div className="w-8 h-px bg-primary/20 mx-auto" />

      {/* Phone number */}
      <p className="font-body text-xs sm:text-sm text-muted-foreground">{contact.phone}</p>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 pt-1">
        <motion.a
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-5 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-display text-[11px] sm:text-sm tracking-wider hover:bg-primary/15 transition-colors"
        >
          <Phone size={13} className="sm:w-4 sm:h-4" />
          <span>Call</span>
        </motion.a>

        <motion.a
          href={`https://wa.me/${contact.whatsapp.replace(/[\s+]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-5 py-2 rounded-lg gradient-gold text-primary-foreground font-display text-[11px] sm:text-sm tracking-wider font-bold"
        >
          <MessageCircle size={13} className="sm:w-4 sm:h-4" />
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

      <div className="max-w-xl mx-auto relative z-10">
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
