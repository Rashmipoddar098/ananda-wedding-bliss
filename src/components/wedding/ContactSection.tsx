import { motion } from "framer-motion";
import { Phone, MessageCircle, Sparkles, Heart } from "lucide-react";
import fatherBrideImg from "@/assets/father-bride.jpg";
import fatherGroomImg from "@/assets/father-groom.jpg";

const contacts = [
  {
    title: "Father of the Bride",
    name: "Mr. Sharma",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    image: fatherBrideImg,
    emoji: "👰",
  },
  {
    title: "Father of the Groom",
    name: "Mr. Verma",
    phone: "+91 98765 43211",
    whatsapp: "+91 98765 43211",
    image: fatherGroomImg,
    emoji: "🤵",
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
    initial={{ opacity: 0, y: 50, rotateY: -15 }}
    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
    transition={{ duration: 0.7, delay: index * 0.25, type: "spring", stiffness: 80 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="relative"
  >
    {/* Outer glow on hover */}
    <motion.div
      className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    />

    <div className="animate-rotating-border rounded-3xl">
    <div className="relative bg-gradient-to-b from-card/95 to-card/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.15)]">
      
      {/* Top decorative band */}
      <div className="h-20 sm:h-24 bg-gradient-to-r from-primary/10 via-accent/15 to-primary/10 relative overflow-hidden">
        {/* Animated pattern */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--accent)/0.3) 1px, transparent 1px),
                             radial-gradient(circle at 80% 30%, hsl(var(--accent)/0.2) 1px, transparent 1px),
                             radial-gradient(circle at 50% 80%, hsl(var(--primary)/0.2) 1px, transparent 1px)`,
            backgroundSize: "30px 30px, 40px 40px, 25px 25px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "30px 30px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* Shimmer sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-200%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        />
        {/* Floating sparkles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent/40"
            style={{ left: `${20 + i * 30}%`, top: `${20 + i * 15}%` }}
            animate={{ y: [0, -8, 0], opacity: [0.3, 0.7, 0.3], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          >
            <Sparkles size={10 + i * 2} />
          </motion.div>
        ))}
      </div>

      {/* Photo - overlapping the band */}
      <div className="flex justify-center -mt-12 sm:-mt-14 relative z-10">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.06, rotate: [0, -2, 2, 0] }}
          transition={{ duration: 0.4 }}
        >
          {/* Ring glow */}
          <motion.div
            className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent/50 via-primary/30 to-accent/50 blur-sm"
            animate={{ opacity: [0.4, 0.8, 0.4], rotate: [0, 360] }}
            transition={{ opacity: { duration: 2.5, repeat: Infinity }, rotate: { duration: 8, repeat: Infinity, ease: "linear" } }}
          />
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-card overflow-hidden relative shadow-xl">
            <img
              src={contact.image}
              alt={contact.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Emoji badge */}
          <motion.div
            className="absolute -bottom-1 -right-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-card border-2 border-accent/30 flex items-center justify-center text-sm shadow-md"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            {contact.emoji}
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-5 sm:px-7 pb-6 sm:pb-7 pt-4 text-center space-y-3">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.15 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-[10px] sm:text-xs tracking-[0.2em] text-accent/80 uppercase font-medium">
            {contact.title}
          </p>
          <p className="font-display text-lg sm:text-2xl font-bold text-primary mt-1">
            {contact.name}
          </p>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-accent/40" />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart size={10} className="text-accent/60 fill-accent/30" />
          </motion.div>
          <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-accent/40" />
        </motion.div>

        {/* Phone */}
        <motion.p
          className="font-body text-xs sm:text-sm text-muted-foreground tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {contact.phone}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex items-center gap-2.5 sm:gap-3 pt-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 sm:py-3 rounded-xl bg-primary/8 border border-primary/15 text-primary font-display text-xs sm:text-sm tracking-wider hover:bg-primary/12 hover:border-primary/25 transition-all duration-300"
          >
            <Phone size={14} />
            <span>Call</span>
          </motion.a>

          <motion.a
            href={`https://wa.me/${contact.whatsapp.replace(/[\s+]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 sm:py-3 rounded-xl gradient-gold text-primary-foreground font-display text-xs sm:text-sm tracking-wider font-bold shadow-[0_4px_15px_-3px_hsl(40_70%_50%/0.4)]"
          >
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const ContactSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-10 w-40 h-40 rounded-full bg-accent/[0.05] blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-pastel-pink/15 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </div>

      <div className="max-w-xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
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
            className="flex items-center justify-center gap-3 mt-4"
          >
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-accent/50" />
            <motion.div animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }} transition={{ duration: 4, repeat: Infinity }}>
              <Sparkles size={14} className="text-accent/70" />
            </motion.div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </motion.div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {contacts.map((contact, i) => (
            <ContactCard key={contact.title} contact={contact} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
