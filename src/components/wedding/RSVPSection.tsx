import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Heart, Sparkles, PartyPopper } from "lucide-react";
import { toast } from "sonner";

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    guests: "1",
    attending: "yes",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you for your response!");
  };

  return (
    <section className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-gold/[0.03] blur-2xl"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
          >
            <Heart size={14} className="text-accent fill-accent/50" />
            <span className="font-body text-xs sm:text-sm text-accent-foreground/70">Join Us</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-script text-3xl sm:text-4xl text-gold mb-2"
          >
            RSVP
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary"
          >
            Confirm Your Attendance
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-accent/40" />
            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Sparkles size={12} className="text-accent/60" />
            </motion.div>
            <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-accent/40" />
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              onSubmit={handleSubmit}
              className="relative bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-wedding border border-primary/15 space-y-4 sm:space-y-5 overflow-hidden"
            >
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
              />

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="font-display text-sm font-semibold text-primary block mb-2">
                  Full Name *
                </label>
                <motion.div animate={focusedField === "name" ? { scale: 1.01 } : { scale: 1 }}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/60 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 placeholder:text-muted-foreground/60 transition-all duration-300"
                    placeholder="Enter your full name"
                    maxLength={100}
                  />
                </motion.div>
              </motion.div>

              {/* Guests */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="font-display text-sm font-semibold text-primary block mb-2">
                  Number of Guests
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/60 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all duration-300"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Attending */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="font-display text-sm font-semibold text-primary block mb-2">
                  Will you attend?
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  {["yes", "no"].map((opt) => (
                    <motion.button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, attending: opt })}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex-1 py-3 rounded-xl font-display text-xs sm:text-sm border-2 transition-all duration-300 ${
                        form.attending === opt
                          ? "border-accent bg-accent/10 text-primary shadow-md"
                          : "border-primary/20 text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {opt === "yes" ? "🎉 Yes, I'll be there!" : "😢 Sorry, can't make it"}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="font-display text-sm font-semibold text-primary block mb-2">
                  Message (Optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/60 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 resize-none placeholder:text-muted-foreground/60 transition-all duration-300"
                  rows={3}
                  placeholder="Write your wishes..."
                  maxLength={500}
                />
              </motion.div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, boxShadow: "0 15px 40px -10px hsl(40 70% 50% / 0.4)" }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="relative w-full py-3.5 sm:py-4 gradient-gold text-primary-foreground font-display text-base sm:text-lg rounded-xl shadow-wedding flex items-center justify-center gap-2 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <Send size={18} />
                <span className="relative">Confirm Attendance</span>
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-wedding border border-primary/15 text-center overflow-hidden"
            >
              {/* Confetti particles */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 3 === 0 ? "hsl(40,70%,50%)" : i % 3 === 1 ? "hsl(350,60%,70%)" : "hsl(0,60%,30%)",
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1, 0],
                    y: [0, -80 - Math.random() * 60],
                    x: [-30 + Math.random() * 60],
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 1.5, delay: i * 0.08 }}
                />
              ))}

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <PartyPopper size={56} className="text-gold mx-auto mb-3 sm:mb-4" />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <CheckCircle size={48} className="text-gold mx-auto mb-4" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-display text-xl sm:text-2xl font-bold text-primary mb-2"
              >
                Thank You!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="font-body text-base sm:text-lg text-muted-foreground"
              >
                We look forward to celebrating with you! 💕
              </motion.p>

              <motion.div
                className="mt-6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="font-script text-lg sm:text-xl text-gold/70">✨ See you at the celebration ✨</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
