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
    <div className="sticky-cta" style={{ padding: "0" }}>
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
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 8,
                maxWidth: 500,
                margin: "0 auto",
              }}
            >
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
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: 12,
                    padding: "10px 8px",
                    textAlign: "center",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "block",
                  }}
                >
                  <p style={{ color: "#fff", fontWeight: 800, fontSize: "0.68rem", marginBottom: 2 }}>
                    {item.label}
                  </p>
                  <p style={{ color: "#fde68a", fontWeight: 900, fontSize: "1.1rem", lineHeight: 1 }}>
                    {item.precio}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.6rem", marginTop: 4 }}>
                    PEDIR →
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 16px",
          gap: 8,
        }}
      >
        {/* Left: Offer tag */}
        <button
          onClick={() => setExpanded((e) => !e)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: 0,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.2)",
              borderRadius: 8,
              padding: "4px 8px",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Gift size={14} color="#fde68a" />
            <span style={{ color: "#fde68a", fontWeight: 800, fontSize: "0.85rem", whiteSpace: "nowrap" }}>
              ¡OFERTA!
            </span>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronUp size={18} color="rgba(255,255,255,0.8)" />
          </motion.div>
        </button>

        {/* Center: countdown */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Clock size={16} color="rgba(255,255,255,0.85)" />
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.8rem", fontWeight: 700, whiteSpace: "nowrap" }}>
            Vence: Sáb. 9 de mayo - 12 PM
          </span>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {[pad(d), pad(h), pad(m), pad(s)].map((val, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 2 }}>
                <span
                  style={{
                    background: "rgba(255,255,255,0.25)",
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: "0.95rem",
                    padding: "3px 6px",
                    borderRadius: 6,
                    fontVariantNumeric: "tabular-nums",
                    minWidth: 28,
                    textAlign: "center"
                  }}
                >
                  {val}
                </span>
                {i < 3 && (
                  <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 700, fontSize: "0.8rem" }}>
                    :
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Decoration only */}
        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            color: "#fff",
            fontWeight: 800,
            fontSize: "0.85rem",
            padding: "8px 16px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.4)",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            gap: 6,
            cursor: "default",
          }}
        >
          <Heart size={14} fill="white" />
          HAZLA FELIZ
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
        padding: "40px 20px 24px",
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
