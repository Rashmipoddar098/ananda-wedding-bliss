import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Send, User, MessageCircleHeart, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Blessing {
  id: number;
  name: string;
  message: string;
  emoji: string;
}

const emojis = ["🙏", "💐", "✨", "💕", "🌸", "🪷", "🎊", "💝"];

const defaultBlessings: Blessing[] = [
  { id: 1, name: "Priya Aunty", message: "May your love story be as beautiful as a blooming garden. Wishing you both eternal happiness! 🌺", emoji: "💐" },
  { id: 2, name: "Vikram Uncle", message: "Two beautiful souls united! May God bless this wonderful couple with joy and prosperity. 🙏", emoji: "🙏" },
  { id: 3, name: "Neha & Arjun", message: "So happy for you both! Can't wait to celebrate this magical union. Love you guys! 💕", emoji: "💕" },
];

const BlessingCard = ({ blessing, index }: { blessing: Blessing; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.85 }}
    transition={{ duration: 0.4, delay: index * 0.05, type: "spring", stiffness: 150 }}
    whileHover={{ y: -3, transition: { duration: 0.2 } }}
    className="group bg-card/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-primary/10 animate-border-glow relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />
    <div className="flex items-start gap-3 relative z-10">
      <motion.div
        className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-base flex-shrink-0"
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
      >
        {blessing.emoji}
      </motion.div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h4 className="font-display font-bold text-primary text-sm truncate">{blessing.name}</h4>
          <Heart size={10} className="text-accent/50 fill-accent/30 flex-shrink-0" />
        </div>
        <p className="font-body text-sm text-foreground/75 leading-relaxed line-clamp-3">{blessing.message}</p>
      </div>
    </div>
  </motion.div>
);

const BlessingsSection = () => {
  const [blessings, setBlessings] = useState<Blessing[]>(defaultBlessings);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("🙏");
  const [isSending, setIsSending] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const visibleBlessings = showAll ? blessings : blessings.slice(0, 6);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setIsSending(true);
    setTimeout(() => {
      setBlessings((prev) => [
        { id: Date.now(), name: name.trim(), message: message.trim(), emoji: selectedEmoji },
        ...prev,
      ]);
      setName("");
      setMessage("");
      setSelectedEmoji("🙏");
      setIsSending(false);
    }, 600);
  };

  return (
    <section className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-10 right-[10%] w-48 h-48 rounded-full bg-accent/[0.04] blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <MessageCircleHeart size={14} className="text-accent" />
            <span className="font-body text-xs sm:text-sm text-accent-foreground/70">Wishing Wall</span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="font-script text-3xl sm:text-4xl text-gold mb-2">
            Send Your Blessings
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Shower Us With Love
          </motion.h2>

          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-accent/40" />
            <Sparkles size={12} className="text-accent/50" />
            <Heart size={10} className="text-accent fill-accent/50" />
            <Sparkles size={12} className="text-accent/50" />
            <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-accent/40" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-wedding border border-primary/15 animate-border-glow relative overflow-hidden"
          >
            <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/30 via-accent/40 to-gold/30" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }} />

            <div className="flex items-center gap-3 mb-6">
              <motion.div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center" whileHover={{ rotate: 15, scale: 1.1 }}>
                <Send size={18} className="text-accent" />
              </motion.div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary">Write a Blessing</h3>
                <p className="font-body text-sm text-muted-foreground">Share your wishes for the couple</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="pl-10 bg-background/60 border-primary/10 focus:border-accent/40 font-body" required />
              </div>

              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your heartfelt blessing..." className="bg-background/60 border-primary/10 focus:border-accent/40 font-body min-h-[100px] resize-none" required />

              <div>
                <p className="font-body text-sm text-muted-foreground mb-2">Pick a vibe ✨</p>
                <div className="flex flex-wrap gap-2">
                  {emojis.map((emoji) => (
                    <motion.button key={emoji} type="button" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedEmoji(emoji)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all ${selectedEmoji === emoji ? "bg-accent/20 border-2 border-accent/50 shadow-md" : "bg-background/50 border border-primary/10 hover:bg-accent/10"}`}
                    >
                      {emoji}
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" disabled={isSending || !name.trim() || !message.trim()} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display text-base py-5 rounded-xl shadow-wedding">
                  <AnimatePresence mode="wait">
                    {isSending ? (
                      <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>✨</motion.span>
                        Sending Blessing...
                      </motion.span>
                    ) : (
                      <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <Send size={16} /> Send Your Blessing
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Wishing Wall - Fixed height scrollable */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-display text-sm font-semibold text-primary/70">
                💌 {blessings.length} Blessing{blessings.length !== 1 ? "s" : ""}
              </p>
              {blessings.length > 6 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAll(!showAll)}
                  className="font-body text-xs text-accent hover:text-accent/80 flex items-center gap-1 transition-colors"
                >
                  {showAll ? "Show Less" : `View All (${blessings.length})`}
                  <motion.div animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={14} />
                  </motion.div>
                </motion.button>
              )}
            </div>

            <div
              ref={scrollRef}
              className={`space-y-3 pr-1 blessings-scroll ${showAll ? "max-h-[420px] overflow-y-auto" : ""}`}
            >
              <AnimatePresence>
                {visibleBlessings.map((blessing, index) => (
                  <BlessingCard key={blessing.id} blessing={blessing} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {!showAll && blessings.length > 6 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-3"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAll(true)}
                  className="font-body text-sm text-accent/80 hover:text-accent py-2 px-6 rounded-full border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-all"
                >
                  View All {blessings.length} Blessings ✨
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlessingsSection;
