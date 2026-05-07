import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, Clock, Gift, ChevronUp } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { KITS, WHATSAPP_NUMBER } from "../constants/config";

// Countdown to Saturday, May 9, 2026, 12:00 PM Peru Time (GMT-5)
function useCountdown() {
  const getTimeLeft = () => {
    const TARGET_DATE = new Date("2026-05-09T12:00:00-05:00");
    const now = new Date();
    const diff = TARGET_DATE - now;

    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };

    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / 1000 / 60) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

function pad(n) {
  return String(n).padStart(2, "0");
}

/**
 * StickyCTA — Barra fija inferior con oferta limitada y countdown
 */
export function StickyCTA() {
  const { d, h, m, s } = useCountdown();
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="sticky-cta w-full left-0 right-0" 
      style={{ 
        padding: "0",
        background: "linear-gradient(90deg, #9333ea 0%, #ec4899 100%)",
        minHeight: "75px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: "0 -4px 15px rgba(0,0,0,0.15)"
      }}
    >
      {/* Expandable panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: "hidden",
              background: "rgba(0,0,0,0.15)",
              padding: "16px",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 max-w-[600px] mx-auto">
              {[
                { kit: "bienestar", label: "Kit Bienestar", precio: "S/ 74" },
                { kit: "belleza", label: "Kit Belleza", precio: "S/ 48" },
                { kit: "cocina", label: "Combo Cocina", precio: "S/ 120" },
              ].map((item) => (
                <a
                  key={item.kit}
                  href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(KITS[item.kit].whatsappMessage)}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-3 text-center no-underline border border-white/20 block"
                >
                  <p className="text-white font-extrabold text-[0.65rem] md:text-xs mb-1 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-amber-300 font-black text-lg md:text-xl leading-none">
                    {item.precio}
                  </p>
                  <p className="text-white/60 text-[0.55rem] mt-2 font-bold uppercase">
                    PEDIR →
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full px-4 md:px-10 py-3 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 h-full">
        {/* Left/Top: Offer tag */}
        <div className="flex items-center h-full">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer outline-none hover:scale-105 transition-transform"
          >
            <div className="bg-white/20 rounded-xl px-4 py-2 flex items-center gap-2 border border-white/30">
              <Gift size={16} className="text-amber-200" />
              <span className="text-amber-200 font-black text-[0.8rem] md:text-sm tracking-tight uppercase">
                ¡OFERTA!
              </span>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronUp size={16} className="text-white/70" />
              </motion.div>
            </div>
          </button>
        </div>

        {/* Center: countdown */}
        <div className="flex items-center gap-2 md:gap-8 justify-center h-full">
          <div className="flex flex-col items-center gap-2 text-center py-1">
            <span className="text-white font-extrabold text-[0.7rem] md:text-sm uppercase tracking-widest whitespace-nowrap opacity-90">
              VENCE: <span className="text-white underline underline-offset-4 decoration-pink-300">Sáb. 9 de mayo - 12 PM</span>
            </span>
            <div className="flex gap-1.5 md:gap-3 items-center justify-center">
              {[pad(d), pad(h), pad(m), pad(s)].map((val, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="bg-pink-500 text-white font-black text-[0.9rem] md:text-xl px-2.5 py-1.5 md:px-3.5 md:py-2 rounded-xl tabular-nums shadow-lg border border-white/20 min-w-[34px] md:min-w-[46px] text-center">
                    {val}
                  </span>
                  {i < 3 && <span className="text-white/40 font-black text-sm md:text-lg">:</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right/Bottom: Decoration */}
        <div className="flex items-center h-full">
          <div className="flex items-center gap-2 bg-white/20 text-white font-black text-[0.7rem] md:text-xs px-4 py-2 rounded-full border border-white/40 uppercase tracking-[0.15em]">
            <Heart size={14} fill="white" className="hidden sm:block" />
            <span className="whitespace-nowrap">HAZLA FELIZ</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * FooterSection — cierre de página
 */
export default function FooterSection() {
  return (
    <section
      className="bg-footer"
      style={{
        padding: "40px 20px 100px", // Increased bottom padding for StickyCTA
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -60,
          left: -60,
          width: 200,
          height: 200,
          background: "rgba(255,255,255,0.06)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -40,
          right: -40,
          width: 160,
          height: 160,
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        {/* Floaty banner */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ marginBottom: 20 }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: 20,
              padding: "12px 20px",
              border: "1px solid rgba(255,255,255,0.25)",
              display: "inline-block",
            }}
          >
            <p style={{ color: "#fde68a", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em" }}>
              ¡OFERTAS LIMITADAS!
            </p>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.8rem", marginTop: 2 }}>
              HAZLA FELIZ HOY — ANTES QUE SE ACABE ❤️
            </p>
          </div>
        </motion.div>

        {/* Headline */}
        <p
          style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: "clamp(1.4rem, 5vw, 2rem)",
            lineHeight: 1.2,
            marginBottom: 6,
          }}
        >
          Elige el kit perfecto
        </p>
        <p
          className="font-dancing"
          style={{
            color: "#fde68a",
            fontSize: "clamp(2rem, 8vw, 3.2rem)",
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          para Mamá
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            marginBottom: 28,
          }}
        >
          Cada kit está diseñado con amor para que ella se sienta única, especial y cuidada. 💕
        </p>


        {/* Footer credits */}
        <div style={{ marginTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 16 }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", fontWeight: 500 }}>
            © 2026 Mercado Central Express · Todos los derechos reservados
          </p>
        </div>
      </div>
    </section>
  );
}
