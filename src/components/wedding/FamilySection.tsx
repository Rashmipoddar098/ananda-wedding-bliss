import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users } from "lucide-react";

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

const FamilyColumn = ({
  title,
  keyMembers,
  allMembers,
}: {
  title: string;
  keyMembers: FamilyMember[];
  allMembers: FamilyMember[];
}) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex-1">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-gold mb-6 text-center">
        {title}
      </h3>

      <div className="space-y-4">
        {keyMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>

      <button
        onClick={() => setShowAll(true)}
        className="mt-6 mx-auto flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gold/40 text-gold font-display text-sm hover:bg-gold/10 transition-colors"
      >
        <Users size={16} />
        View All Members
      </button>

      {/* Modal */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 px-4"
            onClick={() => setShowAll(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-2xl p-6 md:p-8 max-w-md w-full max-h-[80vh] overflow-y-auto shadow-wedding border border-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-display text-xl font-bold text-primary">
                  {title}
                </h4>
                <button
                  onClick={() => setShowAll(false)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-3">
                {allMembers.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MemberCard = ({ member }: { member: FamilyMember }) => (
  <div className="flex items-center gap-4 bg-maroon/40 backdrop-blur-sm rounded-xl p-4 border border-gold/15 shadow-sm">
    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-lg flex-shrink-0">
      {member.name.charAt(0)}
    </div>
    <div>
      <p className="font-display font-semibold text-gold-light">{member.name}</p>
      <p className="font-body text-sm text-gold-light/60">{member.relation}</p>
    </div>
  </div>
);

const FamilySection = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <p className="font-script text-3xl text-gold mb-2">Our Families</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            The Two Families Becoming One
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <FamilyColumn
            title="Bride's Family"
            keyMembers={brideFamilyKey}
            allMembers={brideFamilyAll}
          />
          <div className="hidden md:block w-px bg-gold/20" />
          <FamilyColumn
            title="Groom's Family"
            keyMembers={groomFamilyKey}
            allMembers={groomFamilyAll}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default FamilySection;
