const petals = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 6,
  size: 8 + Math.random() * 12,
}));

const FloatingPetals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            top: "-20px",
          }}
        >
          <div
            className="rounded-full opacity-60"
            style={{
              width: petal.size,
              height: petal.size,
              background: `radial-gradient(circle, hsl(350, 60%, 75%), hsl(40, 70%, 60%))`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
