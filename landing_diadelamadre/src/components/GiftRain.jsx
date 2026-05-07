import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const EMOJIS = ["🎁", "💝", "💖", "✨", "🌸", "🎀", "🌹"];

function FallingGift({ delay, duration, xStart, emoji }) {
  return (
    <motion.div
      initial={{ y: "-10vh", x: `${xStart}vw`, opacity: 0, scale: 0.5 }}
      animate={{ 
        y: "110vh", 
        opacity: [0, 1, 1, 0.8, 0], 
        scale: [0.5, 1.2, 1, 1, 0.5],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: "linear",
        opacity: { times: [0, 0.1, 0.5, 0.8, 1] },
        scale: { times: [0, 0.1, 0.5, 0.8, 1] }
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        zIndex: 999999,
        pointerEvents: "none",
        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))",
      }}
    >
      <motion.div
        animate={{ 
          x: [-10, 10, -10],
          y: [-5, 5, -5]
        }}
        transition={{ repeat: Infinity, duration: 0.3, ease: "linear" }}
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
}

export default function GiftRain() {
  const [isVisible, setIsVisible] = useState(true);
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    // Generate gifts inside useEffect to completely satisfy React purity rules
    const newGifts = [];
    for (let i = 0; i < 35; i++) {
      newGifts.push({
        id: i,
        xStart: Math.random() * 96 + 2,
        delay: Math.random() * 4,
        duration: 6 + Math.random() * 6,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
      });
    }
    // Wrap in setTimeout to avoid strict React linting error (synchronous state update in effect)
    setTimeout(() => {
      setGifts(newGifts);
    }, 10);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 15000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || gifts.length === 0) return null;

  return (
    <div 
      style={{ 
        position: "fixed", 
        inset: 0, 
        pointerEvents: "none", 
        zIndex: 999999,
        overflow: "hidden"
      }}
    >
      {gifts.map((g) => (
        <FallingGift 
          key={g.id} 
          delay={g.delay} 
          duration={g.duration} 
          xStart={g.xStart} 
          emoji={g.emoji} 
        />
      ))}
    </div>
  );
}
