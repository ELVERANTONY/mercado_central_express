import { motion } from "framer-motion";
import { Heart, Sparkles, Shield, Snowflake, Calendar, Check } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { FadeInUp, ScaleIn } from "../components/Animations";
import { GiftBadge, BenefitItem, CheckItem } from "../components/UIKit";
import { KITS } from "../constants/config";

const kit = KITS.belleza;
import imgMasajeador from "../assets/product_masajeador.png";
import imgCajaParches from "../assets/product_caja_parches.png";
import imgBienestarMom from "../assets/bienestar_mom.png";

export default function KitBellezaSection() {
  return (
    <section
      id="kit-belleza"
      className="bg-bienestar"
      style={{ padding: "48px 20px", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: "absolute",
          bottom: -60,
          right: -60,
          width: 240,
          height: 240,
          background: "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <FadeInUp>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <span
              style={{
                background: "linear-gradient(90deg, #9333ea, #ec4899)",
                color: "#fff",
                fontWeight: 800,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                padding: "5px 16px",
                borderRadius: 999,
              }}
            >
              DÍA DE LA MADRE ♥
            </span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p
            style={{
              color: "#6b21a8",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Kit Regalo
            <br />
            Perfecto
          </p>
          <p
            className="font-dancing"
            style={{
              background: "linear-gradient(135deg, #ec4899, #be185d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "clamp(2.2rem, 9vw, 4rem)",
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            Mamá
          </p>
          <p
            style={{
              color: "#6b21a8",
              fontWeight: 800,
              fontSize: "clamp(1rem, 3.5vw, 1.5rem)",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            que se cuida con{" "}
            <span
              className="font-dancing"
              style={{
                background: "linear-gradient(135deg, #ec4899, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "clamp(1.4rem, 5vw, 2rem)",
              }}
            >
              amor
            </span>
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#9333ea",
              fontSize: "clamp(0.78rem, 2.2vw, 0.9rem)",
              fontWeight: 600,
              marginTop: 6,
              fontStyle: "italic",
            }}
          >
            ❤️ Rostro radiante, frescura y cuidado profesional ❤️
          </p>
        </FadeInUp>

        {/* Subtitle Card */}
        <FadeInUp delay={0.15}>
          <div
            className="glass-card-dark"
            style={{ padding: "22px 20px", marginTop: 20, position: "relative" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 16,
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#4b2d63",
                    fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
                    lineHeight: 1.55,
                    marginBottom: 16,
                  }}
                >
                  Porque ella merece el mejor cuidado,{" "}
                  <strong>regálale belleza</strong> para que se{" "}
                  <span style={{ color: "#ec4899", fontWeight: 700 }}>
                    sienta única y especial
                  </span>
                </p>

                {kit.beneficios.map((b, i) => (
                  <BenefitItem
                    key={i}
                    text={b}
                    icon={i === 0 ? Sparkles : i === 1 ? Shield : Snowflake}
                  />
                ))}
              </div>
              <div style={{ minWidth: 90, alignSelf: "center" }}>
                <GiftBadge>
                  <p>¡PIEL</p>
                  <p>RADIANTE</p>
                  <p>SIEMPRE!</p>
                </GiftBadge>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Productos Clave Tag */}
        <FadeInUp delay={0.25}>
          <div style={{ textAlign: "center", margin: "28px 0 16px" }}>
            <span
              style={{
                background: "linear-gradient(90deg, #a855f7, #ec4899)",
                color: "#fff",
                fontWeight: 800,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                padding: "7px 20px",
                borderRadius: 999,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              PRODUCTOS CLAVE <Heart size={14} fill="white" />
            </span>
          </div>
        </FadeInUp>

        {/* Product Cards — 2 columnas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            alignItems: "stretch",
          }}
        >
          {/* Masajeador */}
          <ScaleIn delay={0.3}>
            <motion.div
              className="glass-card"
              style={{ 
                padding: "110px 16px 16px", 
                height: "100%", 
                position: "relative",
                overflow: "visible",
                marginTop: 60,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              whileHover={{ y: -5, boxShadow: "0 20px 45px rgba(168,85,247,0.25)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                style={{ 
                  position: "absolute",
                  top: -65,
                  left: 0,
                  right: 0,
                  display: "flex", 
                  justifyContent: "center",
                  pointerEvents: "none",
                  zIndex: 10
                }}
              >
                <img 
                  src={imgMasajeador} 
                  alt="Masajeador de Rostro" 
                  style={{ 
                    height: "clamp(120px, 25vw, 180px)", 
                    maxWidth: "130%", 
                    objectFit: "contain", 
                    filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.12))"
                  }} 
                />
              </div>

              <p
                style={{
                  color: "#ec4899",
                  fontWeight: 800,
                  fontSize: "clamp(0.7rem, 2.2vw, 0.85rem)",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                  marginBottom: 8,
                  textAlign: "center",
                }}
              >
                Masajeador de Rostro Recargable
              </p>
              <p
                style={{
                  fontSize: "clamp(0.65rem, 2vw, 0.78rem)",
                  color: "#6b21a8",
                  lineHeight: 1.45,
                  marginBottom: 16,
                  textAlign: "center",
                }}
              >
                Alivia tensiones, mejora la circulación y reduce líneas finas. Diseño ergonómico y portátil.
              </p>

              {/* Beneficios List */}
              <div style={{ alignSelf: "stretch", marginBottom: 20 }}>
                {[
                  { icon: <Sparkles size={14} />, text: "Rejuvenece tu piel" },
                  { icon: <Heart size={14} />, text: "Efecto lifting natural" },
                  { icon: <Check size={14} />, text: "Resultados profesionales" },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div style={{ color: "#ec4899" }}>{b.icon}</div>
                    <span style={{ fontSize: "0.72rem", color: "#4b5563", fontWeight: 500 }}>{b.text}</span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  padding: "6px 10px",
                  background: "rgba(168,85,247,0.08)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: "auto",
                }}
              >
                <Calendar size={14} color="#9333ea" />
                <span
                  style={{
                    fontSize: "clamp(0.58rem, 1.6vw, 0.68rem)",
                    color: "#9333ea",
                    fontWeight: 600,
                  }}
                >
                  Uso diario
                </span>
              </div>
            </motion.div>
          </ScaleIn>

          {/* Parches */}
          <ScaleIn delay={0.4}>
            <motion.div
              className="glass-card"
              style={{ 
                padding: "110px 16px 16px", 
                height: "100%", 
                position: "relative",
                overflow: "visible",
                marginTop: 60,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              whileHover={{ y: -5, boxShadow: "0 20px 45px rgba(168,85,247,0.25)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                style={{ 
                  position: "absolute",
                  top: -65,
                  left: 0,
                  right: 0,
                  display: "flex", 
                  justifyContent: "center",
                  pointerEvents: "none",
                  zIndex: 10
                }}
              >
                <img 
                  src={imgCajaParches} 
                  alt="Parches de Hidrogel" 
                  style={{ 
                    height: "clamp(120px, 25vw, 180px)", 
                    maxWidth: "130%", 
                    objectFit: "contain", 
                    filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.12))"
                  }} 
                />
              </div>

              <p
                style={{
                  color: "#ec4899",
                  fontWeight: 800,
                  fontSize: "clamp(0.7rem, 2.2vw, 0.85rem)",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                  marginBottom: 8,
                  textAlign: "center",
                }}
              >
                Parches de Hidrogel
              </p>
              <p
                style={{
                  fontSize: "clamp(0.65rem, 2vw, 0.78rem)",
                  color: "#6b21a8",
                  lineHeight: 1.45,
                  marginBottom: 16,
                  textAlign: "center",
                }}
              >
                Hidrata intensamente, reduce ojeras y desinflama. Ideal para un momento de spa en casa.
              </p>

              {/* Beneficios List */}
              <div style={{ alignSelf: "stretch", marginBottom: 20 }}>
                {[
                  { icon: <Sparkles size={14} />, text: "Hidratación profunda" },
                  { icon: <Heart size={14} />, text: "Elimina signos de fatiga" },
                  { icon: <Check size={14} />, text: "Colágeno concentrado" },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div style={{ color: "#ec4899" }}>{b.icon}</div>
                    <span style={{ fontSize: "0.72rem", color: "#4b5563", fontWeight: 500 }}>{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Unidades badge */}
              <div
                style={{
                  padding: "8px 10px",
                  background: "linear-gradient(135deg, #ede9fe, #fce7f3)",
                  borderRadius: 10,
                  border: "1px solid rgba(168,85,247,0.2)",
                  marginBottom: 8,
                  width: "100%",
                  textAlign: "center",
                  marginTop: 6, // CLOSER
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(0.6rem, 1.6vw, 0.7rem)",
                    color: "#7c3aed",
                    fontWeight: 700,
                  }}
                >
                  Unidades: 12 Parches / 6 Pares
                </p>
              </div>

              <div
                style={{
                  padding: "6px 10px",
                  background: "rgba(168,85,247,0.08)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: "auto",
                }}
              >
                <Snowflake size={14} color="#9333ea" />
                <span
                  style={{
                    fontSize: "clamp(0.58rem, 1.6vw, 0.68rem)",
                    color: "#9333ea",
                    fontWeight: 600,
                  }}
                >
                  Efecto frescura
                </span>
              </div>
            </motion.div>
          </ScaleIn>
        </div>

        {/* ── Final CTA (COPIED FROM COCINA) ── */}
          <div style={{ marginTop: 80, display: "flex", justifyContent: "center", padding: "0 20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "center", maxWidth: 680, width: "100%" }}>
              {/* Gift box + image */}
              <div style={{ textAlign: "center", position: "relative" }}>
                <div style={{ background: "linear-gradient(135deg, #fce7f3, #ede9fe)", borderRadius: 28, padding: "20px 16px", border: "2px solid rgba(168,85,247,0.25)", maxWidth: 320, width: "100%", position: "relative", boxShadow: "0 15px 35px rgba(124, 58, 237, 0.2)" }}>
                  <div style={{ position: "relative", marginBottom: 10, height: 280 }}>
                    <img src={imgBienestarMom} alt="Mamá feliz" style={{ width: "100%", height: "100%", objectFit: "contain", position: "absolute", bottom: 0, left: 0, zIndex: 2, mixBlendMode: "multiply" }} />
                  </div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 900, color: "#7c3aed", lineHeight: 1.3, textTransform: "uppercase", marginTop: 4 }}>
                    EL REGALO QUE ELLA MERECE ❤️
                  </p>
                </div>
              </div>

              {/* Offer + CTA */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 300 }}>
                <div style={{ background: "linear-gradient(135deg, #fce7f3, #fff7ed)", borderRadius: 16, padding: "14px 18px", border: "1px solid rgba(245,158,11,0.25)" }}>
                  <p style={{ color: "#6b21a8", fontWeight: 800, fontSize: "0.95rem", marginBottom: 2 }}>¡OFERTA LIMITADA!</p>
                  <p style={{ color: "#4b2d63", fontSize: "0.8rem", lineHeight: 1.4 }}>Hazla feliz hoy, sorprenderla es fácil ❤️</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "stretch" }}>
                  <div className="price-badge-gold" style={{ padding: "12px 20px", minWidth: 120 }}>
                    <p style={{ color: "#78350f", fontSize: "0.7rem", fontWeight: 700 }}>POR SOLO</p>
                    <p style={{ color: "#1c0a00", fontSize: "2.4rem", fontWeight: 900, lineHeight: 1 }}>{kit.precio}</p>
                  </div>
                  <WhatsAppButton message={kit.whatsappMessage} label="PEDIR AHORA" size="md" pulse />
                </div>
              </div>
            </div>
          </div>

        {/* Disclaimer */}
        <FadeInUp delay={0.6}>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.7rem",
              color: "#9333ea",
              marginTop: 14,
              fontStyle: "italic",
              opacity: 0.8,
            }}
          >
            *No incluye la caja decorativa
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
