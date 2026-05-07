import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/**
 * PriceBadge — muestra el precio especial con sello visual
 */
export function PriceBadge({ precio, variant = "purple" }) {
  const isGold = variant === "gold";
  return (
    <motion.div
      className={isGold ? "price-badge-gold" : "price-badge"}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p
        style={{
          color: isGold ? "#78350f" : "rgba(255,255,255,0.9)",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 2,
        }}
      >
        POR SOLO
      </p>
      <p
        style={{
          color: isGold ? "#1c0a00" : "#fff",
          fontSize: "3rem",
          fontWeight: 900,
          lineHeight: 1,
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {precio}
      </p>
      <p
        style={{
          color: isGold ? "#92400e" : "rgba(255,255,255,0.85)",
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          marginTop: 4,
        }}
      >
        PRECIO ESPECIAL
      </p>
    </motion.div>
  );
}

/**
 * GiftBadge — "El regalo que ella merece"
 */
export function GiftBadge({ children }) {
  return (
    <motion.div
      className="badge-gift"
      animate={{ rotate: [0, -2, 2, -1, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
    >
      <p style={{ fontSize: "0.7rem", opacity: 0.9 }}>❤️</p>
      {children ? (
        children
      ) : (
        <>
          <p>¡EL REGALO</p>
          <p>QUE ELLA</p>
          <p>MERECE!</p>
        </>
      )}
      <p style={{ fontSize: "0.75rem", marginTop: 4 }}>❤️</p>
    </motion.div>
  );
}

/**
 * BenefitItem — ítem de beneficio con ícono circular
 */
export function BenefitItem({ text, icon: Icon }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
      <div className="benefit-icon">
        {Icon ? (
          <Icon size={16} color="#9333ea" strokeWidth={2.5} />
        ) : (
          <CheckCircle2 size={16} color="#9333ea" strokeWidth={2.5} />
        )}
      </div>
      <p style={{ fontSize: "0.92rem", color: "#4b2d63", lineHeight: 1.5, fontWeight: 500 }}>
        {text}
      </p>
    </div>
  );
}

/**
 * SectionTag — etiqueta de sección con gradiente
 */
export function SectionTag({ children }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 8 }}>
      <span className="section-tag">{children}</span>
    </div>
  );
}

/**
 * CheckItem — check con texto para listas de calidad
 */
export function CheckItem({ text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <CheckCircle2 size={18} color="#a855f7" strokeWidth={2.5} />
      <span style={{ fontSize: "0.9rem", color: "#4b2d63", fontWeight: 500 }}>{text}</span>
    </div>
  );
}

/**
 * KitBox — caja "TODO LO QUE MAMÁ NECESITA EN UN SOLO KIT"
 */
export function KitBox() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fce7f3, #ede9fe)",
        borderRadius: 20,
        padding: "16px 20px",
        border: "2px solid rgba(168, 85, 247, 0.25)",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <span style={{ fontSize: "2rem" }}>🎁</span>
      <p
        style={{
          fontSize: "0.85rem",
          fontWeight: 800,
          color: "#7c3aed",
          lineHeight: 1.3,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        TODO LO QUE MAMÁ NECESITA EN UN SOLO KIT
      </p>
    </div>
  );
}
