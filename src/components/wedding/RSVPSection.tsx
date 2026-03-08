import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    guests: "1",
    attending: "yes",
    message: "",
  });

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
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <div className="text-center mb-10">
          <p className="font-script text-3xl text-gold mb-2">RSVP</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-light">
            Confirm Your Attendance
          </h2>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="bg-maroon/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-wedding border border-gold/20 space-y-5"
            >
              <div>
                <label className="font-display text-sm font-semibold text-gold block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-maroon/30 font-body text-gold-light focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder:text-gold-light/40"
                  placeholder="Enter your full name"
                  maxLength={100}
                />
              </div>

              <div>
                <label className="font-display text-sm font-semibold text-primary block mb-2">
                  Number of Guests
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-display text-sm font-semibold text-primary block mb-2">
                  Will you attend?
                </label>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {["yes", "no"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, attending: opt })}
                      className={`flex-1 py-3 rounded-lg font-display text-xs sm:text-sm border-2 transition-all ${
                        form.attending === opt
                          ? "border-gold bg-gold/10 text-primary"
                          : "border-input text-muted-foreground hover:border-gold/40"
                      }`}
                    >
                      {opt === "yes" ? "🎉 Yes, I'll be there!" : "😢 Sorry, can't make it"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-display text-sm font-semibold text-primary block mb-2">
                  Message (Optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                  rows={3}
                  placeholder="Write your wishes..."
                  maxLength={500}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 gradient-gold text-primary-foreground font-display text-lg rounded-xl shadow-wedding flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Confirm Attendance
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-background rounded-2xl p-10 shadow-wedding border border-gold/20 text-center"
            >
              <CheckCircle size={64} className="text-gold mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-primary mb-2">
                Thank You!
              </h3>
              <p className="font-body text-lg text-muted-foreground">
                We look forward to celebrating with you! 💕
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
