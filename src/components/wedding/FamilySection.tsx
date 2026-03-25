import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Heart, Sparkles, Crown } from "lucide-react";
import bouquetLeft from "@/assets/floral-bouquet-left.png";
import bouquetRight from "@/assets/floral-bouquet-right.png";
import portraitMale from "@/assets/portrait-male.png";
import portraitFemale from "@/assets/portrait-female.png";
import portraitYoungMale from "@/assets/portrait-young-male.png";
import portraitYoungFemale from "@/assets/portrait-young-female.png";
import portraitGroomMale from "@/assets/portrait-groom-male.png";
import portraitGroomFemale from "@/assets/portrait-groom-female.png";
import portraitGroomYoungMale from "@/assets/portrait-groom-young-male.png";
import portraitGroomYoungFemale from "@/assets/portrait-groom-young-female.png";

interface FamilyMember {
  name: string;
  relation: string;
  gender: "male" | "female";
  young?: boolean;
  side?: "bride" | "groom";
}

const getPortrait = (member: FamilyMember) => {
  if (member.side === "groom") {
    if (member.young) return member.gender === "male" ? portraitGroomYoungMale : portraitGroomYoungFemale;
    return member.gender === "male" ? portraitGroomMale : portraitGroomFemale;
  }
  if (member.young) return member.gender === "male" ? portraitYoungMale : portraitYoungFemale;
  return member.gender === "male" ? portraitMale : portraitFemale;
};

const brideFamilyKey: FamilyMember[] = [
  { name: "Mr. Suresh Sharma", relation: "Father", gender: "male" },
  { name: "Mrs. Meena Sharma", relation: "Mother", gender: "female" },
];
const brideFamilyAll: FamilyMember[] = [
  ...brideFamilyKey,
  { name: "Priya Sharma", relation: "Sister", gender: "female", young: true },
  { name: "Mr. Ramesh Sharma", relation: "Uncle", gender: "male" },
  { name: "Mrs. Sunita Sharma", relation: "Aunt", gender: "female" },
  { name: "Vikram Sharma", relation: "Brother", gender: "male", young: true },
];
const groomFamilyKey: FamilyMember[] = [
  { name: "Mr. Rajendra Verma", relation: "Father", gender: "male", side: "groom" },
  { name: "Mrs. Kavita Verma", relation: "Mother", gender: "female", side: "groom" },
];
const groomFamilyAll: FamilyMember[] = [
  ...groomFamilyKey,
  { name: "Amit Verma", relation: "Brother", gender: "male", young: true, side: "groom" },
  { name: "Mr. Dinesh Verma", relation: "Uncle", gender: "male", side: "groom" },
  { name: "Mrs. Asha Verma", relation: "Aunt", gender: "female", side: "groom" },
  { name: "Neha Verma", relation: "Cousin", gender: "female", young: true, side: "groom" },
];

const MemberCard = ({ member, index }: { member: FamilyMember; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, scale: 0.9 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 120 }}
    viewport={{ once: true }}
    whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
    className="group relative"
  >
    <div className="relative flex items-center gap-3 sm:gap-4 rounded-2xl p-3 sm:p-4 border border-primary/10 bg-card/70 backdrop-blur-sm shadow-md hover:border-accent/40 hover:shadow-wedding transition-all duration-300 overflow-hidden">
      {/* Shimmer on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />

      {/* Portrait with golden frame */}
      <motion.div
        className="relative flex-shrink-0"
        whileHover={{ rotate: [0, -3, 3, 0] }}
        transition={{ duration: 0.4 }}
      >
        {/* Outer golden ring */}
        <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full p-[3px] bg-gradient-to-br from-gold via-gold-light to-gold-dark shadow-md">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-card">
            <img
              src={getPortrait(member)}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Sparkle indicator for parents */}
        {(member.relation === "Father" || member.relation === "Mother") && (
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-gold flex items-center justify-center shadow-sm"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Crown size={10} className="text-primary-foreground" />
          </motion.div>
        )}
      </motion.div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <p className="font-display font-semibold text-primary text-sm sm:text-base leading-snug truncate">
          {member.name}
        </p>
        <p className="font-body text-xs sm:text-sm text-muted-foreground italic flex items-center gap-1.5">
          <Heart size={10} className="text-accent/50 fill-accent/30" />
          {member.relation}
        </p>
      </div>

      {/* Hover heart */}
      <motion.div
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Heart size={14} className="text-accent/40 fill-accent/20" />
      </motion.div>
    </div>
  </motion.div>
);

/* Decorative corner ornament */
const CornerOrnament = ({ position }: { position: "tl" | "tr" | "bl" | "br" }) => {
  const posClass = {
    tl: "top-2 left-2",
    tr: "top-2 right-2 rotate-90",
    bl: "bottom-2 left-2 -rotate-90",
    br: "bottom-2 right-2 rotate-180",
  }[position];

  return (
    <div className={`absolute ${posClass} w-6 h-6 sm:w-8 sm:h-8 pointer-events-none opacity-30`}>
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M2 2 L2 15 Q2 2 15 2" stroke="hsl(var(--gold))" strokeWidth="1.5" fill="none" />
        <circle cx="2" cy="2" r="2" fill="hsl(var(--gold))" opacity="0.6" />
      </svg>
    </div>
  );
};

const FamilyColumn = ({
  title, subtitle, keyMembers, allMembers, floral, floralPosition, emoji,
}: {
  title: string; subtitle: string; keyMembers: FamilyMember[]; allMembers: FamilyMember[];
  floral: string; floralPosition: "left" | "right"; emoji: string;
}) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: floralPosition === "left" ? -50 : 50, rotate: floralPosition === "left" ? -2 : 2 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      viewport={{ once: true }}
      className="flex-1 relative"
    >
      {/* Decorative floral corners */}
      <motion.img
        src={floral}
        alt=""
        className={`absolute -top-6 sm:-top-8 ${floralPosition === "left" ? "-left-4 sm:-left-8" : "-right-4 sm:-right-8"} w-14 sm:w-20 md:w-24 opacity-35 pointer-events-none`}
        style={{ transform: floralPosition === "right" ? "scaleX(-1)" : undefined }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.35, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.img
        src={floral}
        alt=""
        className={`absolute -bottom-6 sm:-bottom-8 ${floralPosition === "left" ? "-right-4 sm:-right-8" : "-left-4 sm:-left-8"} w-14 sm:w-20 md:w-24 opacity-25 pointer-events-none rotate-180`}
        style={{ transform: floralPosition === "left" ? "scaleX(-1) rotate(180deg)" : "rotate(180deg)" }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      />

      {/* Card */}
      <div className="animate-rotating-border rounded-3xl">
      <motion.div
        className="relative rounded-3xl bg-card/50 backdrop-blur-sm overflow-hidden"
        whileHover={{ boxShadow: "0 15px 50px -15px hsl(var(--gold) / 0.15)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Corner ornaments */}
        <CornerOrnament position="tl" />
        <CornerOrnament position="tr" />
        <CornerOrnament position="bl" />
        <CornerOrnament position="br" />

        {/* Top golden border */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full gradient-gold opacity-60" />
        </motion.div>

        {/* Bottom golden border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full gradient-gold opacity-40" />
        </motion.div>

        {/* Shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.03] to-transparent pointer-events-none"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        />

        <div className="p-5 sm:p-7 md:p-8">
          {/* Header */}
          <div className="text-center mb-5 sm:mb-7">
            <motion.span
              className="text-2xl sm:text-3xl block mb-2"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {emoji}
            </motion.span>

            <motion.p
              className="font-script text-lg sm:text-xl md:text-2xl text-gold mb-1"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>

            <motion.h3
              className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h3>

            {/* Ornamental divider */}
            <motion.div
              className="flex items-center justify-center gap-2 sm:gap-3 mt-3"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-accent/40" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                <Sparkles size={10} className="text-accent/50" />
              </motion.div>
              <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <Heart size={10} className="text-accent fill-accent/50" />
              </motion.div>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                <Sparkles size={10} className="text-accent/50" />
              </motion.div>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-accent/40" />
            </motion.div>
          </div>

          {/* Members */}
          <div className="space-y-2.5 sm:space-y-3">
            {keyMembers.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </div>

          {/* View All Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -8px hsl(var(--gold) / 0.3)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll(true)}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-5 sm:mt-7 mx-auto flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full border border-accent/30 bg-gradient-to-r from-accent/10 to-accent/5 text-primary font-display text-xs sm:text-sm hover:from-accent/20 hover:to-accent/10 hover:border-accent/50 transition-all duration-300 shadow-md relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent pointer-events-none"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            />
            <Users size={14} />
            <span className="relative">View All Members</span>
          </motion.button>
        </div>
      </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-md px-3 sm:px-4"
            onClick={() => setShowAll(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 30, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 20, stiffness: 250 }}
              className="relative bg-card rounded-3xl p-5 sm:p-7 max-w-md w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-primary/15"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner ornaments */}
              <CornerOrnament position="tl" />
              <CornerOrnament position="tr" />
              <CornerOrnament position="bl" />
              <CornerOrnament position="br" />

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] gradient-gold opacity-60" />

              <div className="flex justify-between items-center mb-5">
                <div>
                  <p className="font-script text-base sm:text-lg text-gold">{subtitle}</p>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-primary">{title}</h4>
                </div>
                <motion.button
                  onClick={() => setShowAll(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <X size={18} />
                </motion.button>
              </div>

              <div className="space-y-2.5">
                {allMembers.map((member, i) => (
                  <MemberCard key={member.name} member={member} index={i} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FamilySection = () => {
  return (
    <section className="pt-14 sm:pt-20 pb-8 sm:pb-12 px-3 sm:px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] rounded-full bg-accent/[0.03] blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gold/[0.02] blur-2xl"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-primary/[0.02] blur-2xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
          >
            <Heart size={14} className="text-accent fill-accent/50" />
            <span className="font-body text-xs sm:text-sm text-accent-foreground/70">Two Hearts, One Family</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="font-script text-3xl sm:text-4xl md:text-5xl text-gold mb-2"
          >
            Our Families
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3"
          >
            The Two Families Becoming One
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 sm:gap-4 mt-3"
          >
            <div className="w-12 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent to-accent/40" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={12} className="text-accent/50" />
            </motion.div>
            <motion.div
              className="w-3 h-3 rounded-full border border-accent/40 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            </motion.div>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={12} className="text-accent/50" />
            </motion.div>
            <div className="w-12 sm:w-20 md:w-24 h-px bg-gradient-to-l from-transparent to-accent/40" />
          </motion.div>
        </div>

        {/* Family Columns */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <FamilyColumn
            title="Sharma Family"
            subtitle="Bride's Side"
            emoji="👰"
            keyMembers={brideFamilyKey}
            allMembers={brideFamilyAll}
            floral={bouquetLeft}
            floralPosition="left"
          />

          {/* Center divider */}
          <div className="hidden md:flex flex-col items-center gap-3 py-8">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-accent/25 to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Heart size={16} className="text-accent/40 fill-accent/20 flex-shrink-0" />
            </motion.div>
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-accent/25 to-transparent" />
          </div>
          {/* Mobile divider */}
          <div className="flex md:hidden items-center justify-center gap-4 py-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Heart size={14} className="text-accent/40 fill-accent/20 flex-shrink-0" />
            </motion.div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-accent/25 to-transparent" />
          </div>

          <FamilyColumn
            title="Verma Family"
            subtitle="Groom's Side"
            emoji="🤵"
            keyMembers={groomFamilyKey}
            allMembers={groomFamilyAll}
            floral={bouquetRight}
            floralPosition="right"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default FamilySection;
