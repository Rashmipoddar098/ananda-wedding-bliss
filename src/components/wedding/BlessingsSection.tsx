import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Send, MessageCircleHeart } from "lucide-react";
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
  { id: 4, name: "Kavita Didi", message: "Wishing you a lifetime of love, laughter and happily ever after! 🎊", emoji: "🎊" },
  { id: 5, name: "Ravi Bhaiya", message: "May your journey together be filled with beautiful memories and endless joy! ✨", emoji: "✨" },
  { id: 6, name: "Sunita Masi", message: "What a beautiful couple! May God shower his choicest blessings on you both! 🪷", emoji: "🪷" },
  { id: 7, name: "Ankit & Pooja", message: "You two are perfect together! Wishing you all the happiness in the world! 💝", emoji: "💝" },
  { id: 8, name: "Meera Chachi", message: "So proud and happy for this beautiful union. Many blessings to the lovely couple! 🌸", emoji: "🌸" },
];

const BlessingBubble = ({ blessing }: { blessing: Blessing }) => (
  <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-3.5 sm:p-4 border border-accent/15 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_4px_20px_-4px_hsl(var(--gold)/0.2)] cursor-default">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-base flex-shrink-0 group-hover:scale-110 transition-transform">
        {blessing.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h4 className="font-display font-bold text-primary text-xs sm:text-sm truncate">{blessing.name}</h4>
          <Heart size={9} className="text-accent/50 fill-accent/30 flex-shrink-0" />
        </div>
        <p className="font-body text-xs sm:text-sm text-foreground/75 leading-relaxed line-clamp-2">{blessing.message}</p>
      </div>
    </div>
  </div>
);

const MarqueeColumn = ({ blessings, direction = "up", speed = 30 }: { blessings: Blessing[]; direction?: "up" | "down"; speed?: number }) => {
  const doubled = [...blessings, ...blessings];
  
  return (
    <div className="overflow-hidden h-[380px] sm:h-[420px] relative">
      {/* Fade edges */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none" />
      
      <div
        className="blessings-marquee flex flex-col gap-3"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "down" ? "reverse" : "normal",
        }}
      >
        {doubled.map((b, i) => (
          <BlessingBubble key={`${b.id}-${i}`} blessing={b} />
        ))}
      </div>
    </div>
  );
};

const BlessingsSection = () => {
  const [blessings, setBlessings] = useState<Blessing[]>(defaultBlessings);
  const [message, setMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("🙏");
  const [isSending, setIsSending] = useState(false);

  // Split blessings into two columns
  const col1 = blessings.filter((_, i) => i % 2 === 0);
  const col2 = blessings.filter((_, i) => i % 2 !== 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSending(true);
    setTimeout(() => {
      setBlessings((prev) => [
        { id: Date.now(), name: "Guest", message: message.trim(), emoji: selectedEmoji },
        ...prev,
      ]);
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Marquee Wall - takes more space */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-display text-sm font-semibold text-primary/70">
                💌 {blessings.length} Blessing{blessings.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Dual column marquee */}
            <div className="grid grid-cols-2 gap-3">
              <MarqueeColumn blessings={col1} direction="up" speed={35} />
              <MarqueeColumn blessings={col2} direction="down" speed={40} />
            </div>
          </motion.div>

          {/* Form Card - compact */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            <div className="animate-rotating-border rounded-2xl sm:rounded-3xl">
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-wedding relative overflow-hidden">
                <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/30 via-accent/40 to-gold/30" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }} />

                <div className="flex items-center gap-3 mb-5">
                  <motion.div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center" whileHover={{ rotate: 15, scale: 1.1 }}>
                    <Send size={16} className="text-accent" />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-primary">Write a Blessing</h3>
                    <p className="font-body text-xs text-muted-foreground">Share your wishes for the couple</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your heartfelt blessing..." className="bg-background/60 border-primary/10 focus:border-accent/40 font-body min-h-[90px] resize-none text-sm" required />

                  <div>
                    <p className="font-body text-xs text-muted-foreground mb-1.5">Pick a vibe ✨</p>
                    <div className="flex flex-wrap gap-1.5">
                      {emojis.map((emoji) => (
                        <motion.button key={emoji} type="button" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedEmoji(emoji)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-base transition-all ${selectedEmoji === emoji ? "bg-accent/20 border-2 border-accent/50 shadow-md" : "bg-background/50 border border-primary/10 hover:bg-accent/10"}`}
                        >
                          {emoji}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" disabled={isSending || !message.trim()} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display text-sm py-4 rounded-xl shadow-wedding">
                      <AnimatePresence mode="wait">
                        {isSending ? (
                          <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                            <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>✨</motion.span>
                            Sending...
                          </motion.span>
                        ) : (
                          <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                            <Send size={14} /> Send Blessing
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlessingsSection;
