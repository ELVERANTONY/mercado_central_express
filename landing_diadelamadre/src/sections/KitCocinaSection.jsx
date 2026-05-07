import { motion } from "framer-motion";
import { Heart, CheckCircle2, Star, Zap, ThumbsUp } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { FadeInUp, ScaleIn } from "../components/Animations";
import { GiftBadge, BenefitItem, PriceBadge } from "../components/UIKit";
import { KITS } from "../constants/config";
import imgProcesadora from "../assets/product_procesador_electrico.png";
import imgMolino from "../assets/product_molino_electrico.png";
import imgMomCocina from "../assets/cocina_mom.png";

const kit = KITS.cocina;

// Configuración de colores para el Combo Cocina (Ámbar/Naranja)
const colorConfig = {
  primary: "#d97706",
  secondary: "#fbbf24",
  text: "#451a03",
  bgLight: "rgba(217, 119, 6, 0.12)",
  border: "rgba(217, 119, 6, 0.25)",
  gradient: "linear-gradient(135deg, #d97706, #fbbf24)",
  shadow: "rgba(217, 119, 6, 0.4)"
};

export default function KitCocinaSection() {
  return (
    <section
      id="kit-cocina"
      className="bg-bienestar"
      style={{
        padding: "48px 20px 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <FadeInUp>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <span
              style={{
                background: colorConfig.gradient,
                color: "#fff",
                fontWeight: 800,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                padding: "5px 16px",
                borderRadius: 999,
              }}
            >
              COMBO PERFECTO ♥
            </span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p
            style={{
              color: "#92400e",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Para una
          </p>
          <p
            className="font-dancing"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
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
              color: "#92400e",
              fontWeight: 800,
              fontSize: "clamp(1rem, 3.5vw, 1.5rem)",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            que cocina con{" "}
            <span
              className="font-dancing"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #ea580c)",
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
              color: colorConfig.primary,
              fontSize: "clamp(0.78rem, 2.2vw, 0.9rem)",
              fontWeight: 600,
              marginTop: 6,
              fontStyle: "italic",
            }}
          >
            ❤️ Potencia, rapidez y practicidad para su día a día ❤️
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
                  Porque ella merece lo mejor en su cocina,{" "}
                  <strong>regálale potencia</strong> para que sus preparaciones sean{" "}
                  <span style={{ color: colorConfig.primary, fontWeight: 700 }}>
                    más fáciles y rápidas
                  </span>
                </p>

                <div className="space-y-1">
                  <BenefitItem text="Ahorra tiempo en cada comida" icon={Zap} colorConfig={colorConfig} />
                  <BenefitItem text="Resultados profesionales en casa" icon={Star} colorConfig={colorConfig} />
                  <BenefitItem text="Fácil de usar y de limpiar" icon={ThumbsUp} colorConfig={colorConfig} />
                </div>
              </div>

              <div className="flex justify-center md:min-w-[90px]">
                <GiftBadge colorConfig={colorConfig}>
                  <p>¡EL CHEF</p>
                  <p>QUE ELLA</p>
                  <p>MERECE!</p>
                </GiftBadge>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* 2 PRODUCTOS Badge */}
        <FadeInUp delay={0.25}>
          <div style={{ textAlign: "center", margin: "40px 0 20px" }}>
            <span
              style={{
                background: colorConfig.gradient,
                color: "#fff",
                fontWeight: 900,
                fontSize: "1rem",
                letterSpacing: "0.1em",
                padding: "10px 28px",
                borderRadius: 999,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: `0 10px 25px ${colorConfig.shadow}`
              }}
            >
              2 PRODUCTOS CLAVE <Heart size={18} fill="white" />
            </span>
          </div>
        </FadeInUp>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start mt-16 md:mt-24">
          {/* Procesadora */}
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
              whileHover={{ y: -8, boxShadow: `0 25px 50px ${colorConfig.shadow}` }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-24 md:-top-32 left-0 right-0 flex justify-center pointer-events-none z-10">
                <motion.img
                  src={imgProcesadora}
                  alt="Procesadora Eléctrica"
                  className="h-[200px] md:h-[260px] w-auto object-contain drop-shadow-2xl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <p
                className="font-black"
                style={{
                  color: colorConfig.primary,
                  fontSize: "clamp(1rem, 2.8vw, 1.2rem)",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  marginBottom: 10,
                }}
              >
                Procesadora Eléctrica
              </p>

              <div style={{ alignSelf: "stretch", marginTop: 10, marginBottom: 20 }}>
                {kit.procesadora.specs.slice(0, 4).map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <div style={{ color: colorConfig.primary }}><CheckCircle2 size={16} /></div>
                    <span style={{ fontSize: "0.82rem", color: "#4b5563", fontWeight: 600, textAlign: "left" }}>{s}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto w-full">
                <div
                  style={{
                    padding: "10px 16px",
                    background: colorConfig.bgLight,
                    borderRadius: 14,
                    fontSize: "0.75rem",
                    color: colorConfig.primary,
                    fontWeight: 800,
                    width: "100%",
                    border: `1px solid ${colorConfig.border}`,
                  }}
                >
                  Perfecta para tamales, humitas, moler carnes, semillas y verduras🥩
                </div>
              </div>
            </motion.div>
          </ScaleIn>

          {/* Molino */}
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
              whileHover={{ y: -8, boxShadow: `0 25px 50px ${colorConfig.shadow}` }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-24 md:-top-32 left-0 right-0 flex justify-center pointer-events-none z-10">
                <motion.img
                  src={imgMolino}
                  alt="Molino Granos Secos"
                  className="h-[180px] md:h-[240px] w-auto object-contain drop-shadow-2xl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </div>

              <p
                className="font-black"
                style={{
                  color: colorConfig.primary,
                  fontSize: "clamp(1rem, 2.8vw, 1.2rem)",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  marginBottom: 10,
                }}
              >
                Molino Granos Secos
              </p>

              <div style={{ alignSelf: "stretch", marginTop: 10, marginBottom: 20 }}>
                {kit.molino.specs.slice(0, 4).map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <div style={{ color: colorConfig.primary }}><CheckCircle2 size={16} /></div>
                    <span style={{ fontSize: "0.82rem", color: "#4b5563", fontWeight: 600, textAlign: "left" }}>{s}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto w-full">
                <div
                  style={{
                    padding: "10px 16px",
                    background: colorConfig.bgLight,
                    borderRadius: 14,
                    fontSize: "0.75rem",
                    color: colorConfig.primary,
                    fontWeight: 800,
                    width: "100%",
                    border: `1px solid ${colorConfig.border}`,
                  }}
                >
                  Ideal para granos y semillas secos🌾
                </div>
              </div>
            </motion.div>
          </ScaleIn>
        </div>

        {/* Aliados Indispensables */}
        <FadeInUp delay={0.5}>
          <div style={{ marginTop: 80, marginBottom: 40 }}>
            <div className="glass-card" style={{ padding: "20px 32px", borderRadius: 30 }}>
              <p 
                className="text-center font-black text-[0.7rem] uppercase tracking-widest mb-6 opacity-70"
                style={{ color: colorConfig.primary }}
              >
                ❤️ DOS ALIADOS INDISPENSABLES ❤️
              </p>
              <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                {[
                  { emoji: "🥩", label: "PICA CARNES" },
                  { emoji: "🥗", label: "MEZCLAS" },
                  { emoji: "🌾", label: "GRANOS" },
                  { emoji: "🌿", label: "ESPECIAS" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className="text-3xl bg-white/40 p-3 rounded-2xl shadow-sm">{item.emoji}</span>
                    <p className="text-[0.65rem] font-bold uppercase" style={{ color: colorConfig.primary }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Final Offer */}
        <FadeInUp delay={0.6}>
          <div className="mt-20 flex justify-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 items-center max-w-[680px] w-full">
              {/* Gift box + image */}
              <div className="flex justify-center">
                <div 
                  className="rounded-[32px] p-6 w-full max-w-[320px] relative shadow-xl"
                  style={{ 
                    background: `linear-gradient(to bottom right, #fff, ${colorConfig.bgLight})`,
                    border: `2px solid ${colorConfig.border}` 
                  }}
                >
                  <div className="relative mb-4 h-[240px] md:h-[280px]">
                    <img src={imgMomCocina} alt="Mamá en la cocina" className="w-full h-full object-contain absolute bottom-0 left-0 z-10 mix-blend-multiply" />
                  </div>
                  <p 
                    className="text-xs md:text-sm font-black leading-tight uppercase tracking-wider text-center"
                    style={{ color: colorConfig.primary }}
                  >
                    EL REGALO QUE ELLA MERECE ❤️
                  </p>
                </div>
              </div>

              {/* Offer + CTA */}
              <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                <div 
                  className="rounded-2xl p-5 border w-full max-w-[300px]"
                  style={{ 
                    background: `linear-gradient(to bottom right, #fff, ${colorConfig.bgLight})`,
                    borderColor: colorConfig.border 
                  }}
                >
                  <p style={{ color: colorConfig.text, fontWeight: 800, fontSize: "1.125rem", marginBottom: 4 }}>¡OFERTA LIMITADA!</p>
                  <p style={{ color: colorConfig.primary, fontSize: "0.875rem", fontWeight: 600, opacity: 0.9 }}>Hazla feliz hoy, sorprenderla es fácil ❤️</p>
                </div>

                <div className="flex flex-col gap-4 w-full max-w-[300px]">
                  <PriceBadge precio={kit.precio} colorConfig={colorConfig} />
                  <WhatsAppButton message={kit.whatsappMessage} label="PEDIR AHORA" size="lg" pulse />
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}