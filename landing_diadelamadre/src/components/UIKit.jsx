import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/**
 * PriceBadge — muestra el precio especial con sello visual
 */
export function PriceBadge({ precio, variant = "purple", colorConfig = {} }) {
  const isGold = variant === "gold";
  const styles = {
    "--kit-gradient": colorConfig.gradient,
    "--kit-shadow": colorConfig.shadow,
    ...colorConfig.vars
  };
  
  return (
    <motion.div
      className={isGold ? "price-badge-gold" : "price-badge"}
      style={styles}
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
export function GiftBadge({ children, colorConfig = {} }) {
  const styles = {
    "--kit-gradient": colorConfig.gradient,
    "--kit-shadow": colorConfig.shadow,
  };
  
  return (
    <motion.div
      className="badge-gift"
      style={styles}
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
export function BenefitItem({ text, icon: Icon, center = false, colorConfig = {} }) {
  const primaryColor = colorConfig.primary || "#9333ea";
  const textColor = colorConfig.text || "#4b2d63";
  const styles = {
    "--kit-bg-light": colorConfig.bgLight,
    "--kit-border": colorConfig.border,
  };

  return (
    <div 
      className={`flex items-start gap-4 mb-4 ${center ? 'justify-center text-center' : 'justify-start text-left'}`}
      style={{ width: '100%', ...styles }}
    >
      <div className="benefit-icon shrink-0">
        {Icon ? (
          <Icon size={18} color={primaryColor} strokeWidth={2.5} />
        ) : (
          <CheckCircle2 size={18} color={primaryColor} strokeWidth={2.5} />
        )}
      </div>
      <p 
        style={{ 
          fontSize: "clamp(0.88rem, 2.8vw, 1.05rem)", 
          color: textColor, 
          lineHeight: 1.4, 
          fontWeight: 600,
          marginTop: 2
        }}
      >
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
