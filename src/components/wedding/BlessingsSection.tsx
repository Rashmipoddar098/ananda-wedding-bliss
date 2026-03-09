import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Send, User, MessageCircleHeart } from "lucide-react";
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

const BlessingsSection = () => {
  const [blessings, setBlessings] = useState<Blessing[]>(defaultBlessings);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("🙏");
  const [isSending, setIsSending] = useState(false);

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
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-[10%] w-48 h-48 rounded-full bg-accent/[0.04] blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-[10%] w-40 h-40 rounded-full bg-primary/[0.03] blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
          >
            <MessageCircleHeart size={14} className="text-accent" />
            <span className="font-body text-xs sm:text-sm text-accent-foreground/70">Wishing Wall</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="font-script text-3xl sm:text-4xl text-gold mb-2"
          >
            Send Your Blessings
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary"
          >
            Shower Us With Love
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-accent/40" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={12} className="text-accent/50" />
            </motion.div>
            <Heart size={10} className="text-accent fill-accent/50" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={12} className="text-accent/50" />
            </motion.div>
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
            className="bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-wedding border border-primary/15 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/30 via-accent/40 to-gold/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />

            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <Send size={18} className="text-accent" />
              </motion.div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary">Write a Blessing</h3>
                <p className="font-body text-sm text-muted-foreground">Share your wishes for the couple</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="pl-10 bg-background/60 border-primary/10 focus:border-accent/40 font-body"
                    required
                  />
                </div>
              </div>

              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your heartfelt blessing..."
                className="bg-background/60 border-primary/10 focus:border-accent/40 font-body min-h-[100px] resize-none"
                required
              />

              {/* Emoji Picker */}
              <div>
                <p className="font-body text-sm text-muted-foreground mb-2">Pick a vibe ✨</p>
                <div className="flex flex-wrap gap-2">
                  {emojis.map((emoji) => (
                    <motion.button
                      key={emoji}
                      type="button"
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all ${
                        selectedEmoji === emoji
                          ? "bg-accent/20 border-2 border-accent/50 shadow-md"
                          : "bg-background/50 border border-primary/10 hover:bg-accent/10"
                      }`}
                    >
                      {emoji}
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSending || !name.trim() || !message.trim()}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display text-base py-5 rounded-xl shadow-wedding"
                >
                  <AnimatePresence mode="wait">
                    {isSending ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                          ✨
                        </motion.span>
                        Sending Blessing...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <Send size={16} />
                        Send Your Blessing
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Wishing Wall */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="space-y-4 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar"
          >
            <AnimatePresence>
              {blessings.map((blessing, index) => (
                <motion.div
                  key={blessing.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 120 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-card/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-primary/10 relative overflow-hidden"
                >
                  {/* Hover shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />

                  <div className="flex items-start gap-3 relative z-10">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-lg flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                      transition={{ type: "spring" }}
                    >
                      {blessing.emoji}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-display font-bold text-primary text-sm sm:text-base truncate">
                          {blessing.name}
                        </h4>
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        >
                          <Heart size={12} className="text-accent/50 fill-accent/30 flex-shrink-0" />
                        </motion.div>
                      </div>
                      <p className="font-body text-sm sm:text-base text-foreground/75 leading-relaxed">
                        {blessing.message}
                      </p>
                    </div>
                  </div>

                  {/* Corner glow */}
                  <motion.div
                    className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-accent/[0.04] blur-xl"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 5, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlessingsSection;
