import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import momentHaldi from "@/assets/moment-haldi.jpg";
import momentMehandi from "@/assets/moment-mehandi.jpg";
import momentWedding from "@/assets/moment-wedding.jpg";
import momentCouple from "@/assets/moment-couple.jpg";
import momentJaimala from "@/assets/moment-jaimala.jpg";
import momentSindoor from "@/assets/moment-sindoor.jpg";
import momentSangeet from "@/assets/moment-sangeet.jpg";
import momentVidaai from "@/assets/moment-vidaai.jpg";

interface Moment {
  img: string;
  title: string;
  caption: string;
  span?: string;
}

const moments: Moment[] = [
  {
    img: momentCouple,
    title: "Together Forever",
    caption: "A love written in the stars",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: momentHaldi,
    title: "Haldi Ceremony",
    caption: "Blessed with turmeric & love",
  },
  {
    img: momentMehandi,
    title: "Mehandi Night",
    caption: "Stories told through henna",
  },
  {
    img: momentJaimala,
    title: "Jaimala",
    caption: "Garlands of eternal promise",
  },
  {
    img: momentWedding,
    title: "Sacred Pheras",
    caption: "Seven vows around the holy fire",
  },
  {
    img: momentSindoor,
    title: "Sindoor Moment",
    caption: "The mark of togetherness",
  },
  {
    img: momentSangeet,
    title: "Sangeet Night",
    caption: "Dancing into forever",
  },
  {
    img: momentVidaai,
    title: "Vidaai",
    caption: "A tearful farewell, a beautiful beginning",
  },
];

const MomentsSection = () => {
  return (
    <section className="py-10 sm:py-16 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
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
            Beautiful Moments
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Our Wedding Celebrations
          </motion.h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-accent/40" />
            <Heart size={14} className="text-accent fill-accent/50" />
            <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-accent/40" />
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl overflow-hidden shadow-wedding border border-primary/10 ${moment.span || ""}`}
            >
              <div className="relative w-full h-64 sm:h-72 md:h-full min-h-[250px]">
                <img
                  src={moment.img}
                  alt={moment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="font-script text-lg sm:text-xl text-gold-light drop-shadow-md">
                    {moment.caption}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground drop-shadow-lg mt-1">
                    {moment.title}
                  </h3>
                </div>
                {/* Corner accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Heart size={20} className="text-primary-foreground/80 fill-primary-foreground/30 drop-shadow-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MomentsSection;
