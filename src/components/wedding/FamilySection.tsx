import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Heart } from "lucide-react";
import bouquetLeft from "@/assets/floral-bouquet-left.png";
import bouquetRight from "@/assets/floral-bouquet-right.png";

interface FamilyMember {
  name: string;
  relation: string;
}

const brideFamilyKey: FamilyMember[] = [
  { name: "Mr. Suresh Sharma", relation: "Father" },
  { name: "Mrs. Meena Sharma", relation: "Mother" },
];

const brideFamilyAll: FamilyMember[] = [
  ...brideFamilyKey,
  { name: "Priya Sharma", relation: "Sister" },
  { name: "Mr. Ramesh Sharma", relation: "Uncle" },
  { name: "Mrs. Sunita Sharma", relation: "Aunt" },
  { name: "Vikram Sharma", relation: "Brother" },
];

const groomFamilyKey: FamilyMember[] = [
  { name: "Mr. Rajendra Verma", relation: "Father" },
  { name: "Mrs. Kavita Verma", relation: "Mother" },
];

const groomFamilyAll: FamilyMember[] = [
  ...groomFamilyKey,
  { name: "Amit Verma", relation: "Brother" },
  { name: "Mr. Dinesh Verma", relation: "Uncle" },
  { name: "Mrs. Asha Verma", relation: "Aunt" },
  { name: "Neha Verma", relation: "Cousin" },
];

const MemberCard = ({ member, index }: { member: FamilyMember; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="relative flex items-center gap-4 rounded-2xl p-4 sm:p-5 border border-gold/20 bg-gradient-to-br from-maroon/60 to-maroon/30 backdrop-blur-sm shadow-lg hover:border-gold/40 hover:shadow-wedding transition-all duration-300">
      {/* Avatar */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
        <div className="absolute inset-0 gradient-gold opacity-90" />
        <span className="relative font-display font-bold text-xl sm:text-2xl text-primary-foreground drop-shadow-md">
          {member.name.charAt(0)}
        </span>
      </div>
      {/* Info */}
      <div className="min-w-0">
        <p className="font-display font-semibold text-gold-light text-base sm:text-lg leading-snug truncate">
          {member.name}
        </p>
        <p className="font-body text-sm text-gold/70 italic">{member.relation}</p>
      </div>
      {/* Decorative accent */}
      <div className="absolute top-2 right-3 w-6 h-6 opacity-10 group-hover:opacity-25 transition-opacity">
        <Heart className="w-full h-full text-gold fill-gold" />
      </div>
    </div>
  </motion.div>
);

const FamilyColumn = ({
  title,
  subtitle,
  keyMembers,
  allMembers,
  floral,
  floralPosition,
}: {
  title: string;
  subtitle: string;
  keyMembers: FamilyMember[];
  allMembers: FamilyMember[];
  floral: string;
  floralPosition: "left" | "right";
}) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: floralPosition === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex-1 relative"
    >
      {/* Decorative floral corner */}
      <img
        src={floral}
        alt=""
        className={`absolute -top-8 ${floralPosition === "left" ? "-left-6 sm:-left-10" : "-right-6 sm:-right-10"} w-16 sm:w-24 opacity-40 pointer-events-none`}
        style={{ transform: floralPosition === "right" ? "scaleX(-1)" : undefined }}
      />

      {/* Card wrapper */}
      <div className="relative rounded-3xl border border-gold/15 bg-gradient-to-b from-maroon/50 via-maroon/30 to-transparent p-5 sm:p-8 backdrop-blur-sm">
        {/* Top decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] gradient-gold rounded-full" />

        <div className="text-center mb-6 sm:mb-8">
          <p className="font-script text-xl sm:text-2xl text-gold mb-1">{subtitle}</p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-gold-light">
            {title}
          </h3>
          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <Heart size={12} className="text-gold fill-gold/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {keyMembers.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowAll(true)}
          className="mt-6 sm:mt-8 mx-auto flex items-center gap-2 px-7 py-3 rounded-full border border-gold/30 bg-gradient-to-r from-gold/10 to-gold/5 text-gold font-display text-sm sm:text-base hover:from-gold/20 hover:to-gold/10 hover:border-gold/50 transition-all duration-300 shadow-md"
        >
          <Users size={16} />
          View All Members
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm px-4"
            onClick={() => setShowAll(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-gradient-to-b from-maroon to-maroon/95 rounded-3xl p-6 sm:p-8 max-w-md w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-gold/25"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] gradient-gold rounded-full" />

              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="font-script text-lg text-gold">{subtitle}</p>
                  <h4 className="font-display text-xl font-bold text-gold-light">{title}</h4>
                </div>
                <button
                  onClick={() => setShowAll(false)}
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold-light/60 hover:text-gold hover:border-gold/40 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3">
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
    <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-script text-3xl sm:text-4xl text-gold mb-2"
          >
            Our Families
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gold-light mb-4"
          >
            The Two Families Becoming One
          </motion.h2>
          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-3 h-3 rounded-full border border-gold/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            </div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </div>

        {/* Family Columns */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
          <FamilyColumn
            title="Sharma Family"
            subtitle="Bride's Side"
            keyMembers={brideFamilyKey}
            allMembers={brideFamilyAll}
            floral={bouquetLeft}
            floralPosition="left"
          />

          {/* Center divider */}
          <div className="hidden md:flex flex-col items-center gap-4 py-8">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
            <Heart size={16} className="text-gold/40 fill-gold/20 flex-shrink-0" />
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
          </div>
          {/* Mobile divider */}
          <div className="flex md:hidden items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
            <Heart size={14} className="text-gold/40 fill-gold/20 flex-shrink-0" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/25 to-transparent" />
          </div>

          <FamilyColumn
            title="Verma Family"
            subtitle="Groom's Side"
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
