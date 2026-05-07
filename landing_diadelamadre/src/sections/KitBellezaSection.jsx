import { motion } from "framer-motion";
import { Heart, Sparkles, Shield, Snowflake, Check } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { FadeInUp, ScaleIn } from "../components/Animations";
import { GiftBadge, BenefitItem } from "../components/UIKit";
import { KITS } from "../constants/config";

const kit = KITS.belleza;
import imgMasajeador from "../assets/product_masajeador.png";
import imgParches from "../assets/product_caja_parches.png";
import imgBellezaMom from "../assets/bienestar_mom.png";

export default function KitBellezaSection() {
  return (
    <section
      id="kit-belleza"
      className="bg-bienestar"
      style={{ padding: "48px 20px", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <FadeInUp>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <span
              style={{
                background: "linear-gradient(90deg, #0891b2, #06b6d4)",
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
              color: "#0e7490",
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
              background: "linear-gradient(135deg, #06b6d4, #2563eb)",
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
              color: "#0e7490",
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
                background: "linear-gradient(135deg, #0891b2, #f59e0b)",
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
              color: "#0891b2",
              fontSize: "clamp(0.78rem, 2.2vw, 0.9rem)",
              fontWeight: 600,
              marginTop: 6,
              fontStyle: "italic",
            }}
          >
            ❤️ Rostro radiante, frescura y cuidado profesional ❤️
          </p>
        </FadeInUp>

        {/* Hero Card */}
        <FadeInUp delay={0.15}>
          <div
            className="glass-card-dark"
            style={{
              padding: "24px 20px",
              marginTop: 20,
              position: "relative",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <p
                  className="text-center md:text-left"
                  style={{
                    color: "#4b2d63",
                    fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
                    lineHeight: 1.55,
                    marginBottom: 16,
                  }}
                >
                  Porque ella merece el mejor cuidado,{" "}
                  <strong>regálale belleza</strong> para que se sienta{" "}
                  <span style={{ color: "#0891b2", fontWeight: 700 }}>
                    única y especial
                  </span>
                </p>

                <div className="space-y-1">
                  {kit.beneficios.map((b, i) => (
                    <BenefitItem
                      key={i}
                      text={b}
                      icon={i === 0 ? Sparkles : i === 1 ? Shield : Snowflake}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-center md:min-w-[90px]">
                <GiftBadge>
                  <p>¡PIEL</p>
                  <p>RADIANTE</p>
                  <p>SIEMPRE!</p>
                </GiftBadge>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* 3 PRODUCTOS Badge */}
        <FadeInUp delay={0.25}>
          <div style={{ textAlign: "center", margin: "40px 0 20px" }}>
            <span
              style={{
                background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                color: "#fff",
                fontWeight: 900,
                fontSize: "1rem",
                letterSpacing: "0.1em",
                padding: "10px 28px",
                borderRadius: 999,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 10px 25px rgba(6,182,212,0.3)"
              }}
            >
              PRODUCTOS CLAVE <Heart size={18} fill="white" />
            </span>
          </div>
        </FadeInUp>

        {/* Product Cards — Matching KitBienestar style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start mt-16 md:mt-24">
          {/* Masajeador */}
          <ScaleIn delay={0.3}>
            <motion.div
              className="glass-card w-full"
              style={{ 
                padding: "140px 20px 24px", 
                textAlign: "center", 
                height: "100%", 
                position: "relative",
                overflow: "visible",
                marginTop: 80,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(168,85,247,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-24 md:-top-32 left-0 right-0 flex justify-center pointer-events-none z-10">
                <motion.img 
                  src={imgMasajeador} 
                  alt="Masajeador de Rostro" 
                  className="h-[200px] md:h-[260px] w-auto object-contain drop-shadow-2xl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <p
                className="font-black"
                style={{
                  color: "#0891b2",
                  fontSize: "clamp(1.1rem, 3.2vw, 1.4rem)",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  marginBottom: 12,
                  letterSpacing: "-0.02em"
                }}
              >
                Masajeador de Rostro Recargable
              </p>
              <p
                style={{
                  fontSize: "clamp(0.85rem, 2.2vw, 0.95rem)",
                  color: "#164e63",
                  lineHeight: 1.5,
                  marginBottom: 16,
                  fontWeight: 500
                }}
              >
                Alivia tensiones, mejora la circulación y reduce líneas finas. Diseño ergonómico y portátil.
              </p>
              
              <div style={{ alignSelf: "stretch", marginTop: "auto" }}>
                {[
                  { icon: <Sparkles size={16} />, text: "Rejuvenece tu piel" },
                  { icon: <Heart size={16} />, text: "Efecto lifting natural" },
                  { icon: <Check size={16} />, text: "Resultados profesionales" },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{ color: "#06b6d4" }}>{b.icon}</div>
                    <span style={{ fontSize: "0.85rem", color: "#4b5563", fontWeight: 600 }}>{b.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </ScaleIn>

          {/* Parches */}
          <ScaleIn delay={0.4}>
            <motion.div
              className="glass-card w-full"
              style={{ 
                padding: "140px 20px 24px", 
                textAlign: "center", 
                height: "100%", 
                position: "relative",
                overflow: "visible",
                marginTop: 80,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(168,85,247,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-24 md:-top-32 left-0 right-0 flex justify-center pointer-events-none z-10">
                <motion.img 
                  src={imgParches} 
                  alt="Parches de Hidrogel" 
                  className="h-[200px] md:h-[260px] w-auto object-contain drop-shadow-2xl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </div>

              <p
                className="font-black"
                style={{
                  color: "#0891b2",
                  fontSize: "clamp(1.1rem, 3.2vw, 1.4rem)",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  marginBottom: 12,
                  letterSpacing: "-0.02em"
                }}
              >
                Parches de Hidrogel
              </p>
              <p
                style={{
                  fontSize: "clamp(0.85rem, 2.2vw, 0.95rem)",
                  color: "#164e63",
                  lineHeight: 1.5,
                  marginBottom: 16,
                  fontWeight: 500
                }}
              >
                Hidrata intensamente, reduce ojeras y desinflama. Ideal para un momento de spa en casa.
              </p>

              <div style={{ alignSelf: "stretch", marginTop: "auto", marginBottom: 16 }}>
                {[
                  { icon: <Sparkles size={16} />, text: "Hidratación profunda" },
                  { icon: <Heart size={16} />, text: "Elimina signos de fatiga" },
                  { icon: <Check size={16} />, text: "Colágeno concentrado" },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{ color: "#06b6d4" }}>{b.icon}</div>
                    <span style={{ fontSize: "0.85rem", color: "#4b5563", fontWeight: 600 }}>{b.text}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: "10px 16px",
                  background: "rgba(6,182,212,0.12)",
                  borderRadius: 14,
                  fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                  color: "#0891b2",
                  fontWeight: 800,
                  width: "100%",
                  border: "1px solid rgba(6,182,212,0.25)",
                  textAlign: "center"
                }}
              >
                Unidades: 12 Parches / 6 Pares
              </div>
            </motion.div>
          </ScaleIn>
        </div>

        {/* ── Final CTA ── */}
        <FadeInUp delay={0.55}>
          <div className="mt-16 md:mt-24 flex justify-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 items-center max-w-[680px] w-full">
              {/* Gift box + image */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-[32px] p-6 border-2 border-purple-200/50 w-full max-w-[320px] relative shadow-xl">
                  <div className="relative mb-4 h-[240px] md:h-[280px]">
                    <img src={imgBellezaMom} alt="Mamá feliz" className="w-full h-full object-contain absolute bottom-0 left-0 z-10 mix-blend-multiply" />
                  </div>
                  <p className="text-xs md:text-sm font-black text-purple-600 leading-tight uppercase tracking-wider text-center">
                    EL REGALO QUE ELLA MERECE ❤️
                  </p>
                </div>
              </div>

              {/* Offer + CTA */}
              <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-5 border border-orange-200/30 w-full max-w-[300px]">
                  <p className="text-purple-900 font-extrabold text-lg mb-1">¡OFERTA LIMITADA!</p>
                  <p className="text-purple-800 text-sm opacity-90">Hazla feliz hoy, sorprenderla es fácil ❤️</p>
                </div>

                <div className="flex flex-col gap-4 w-full max-w-[300px]">
                  <div className="price-badge-gold py-4 px-6">
                    <p className="text-amber-900 text-xs font-bold uppercase tracking-widest mb-1">POR SOLO</p>
                    <p className="text-black text-5xl font-black leading-none">{kit.precio}</p>
                  </div>
                  <WhatsAppButton message={kit.whatsappMessage} label="PEDIR AHORA" size="lg" pulse />
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Disclaimer */}
        <FadeInUp delay={0.6}>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.7rem",
              color: "#0891b2",
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
