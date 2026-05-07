import { motion } from "framer-motion";
import { Heart, CheckCircle2, Shield, Star, Zap, ThumbsUp, Sparkles, Snowflake } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { FadeInUp, ScaleIn } from "../components/Animations";
import { GiftBadge, BenefitItem } from "../components/UIKit";
import { KITS } from "../constants/config";
import imgProcesadora from "../assets/product_procesador_electrico.png";
import imgMolino from "../assets/product_molino_electrico.png";
import imgMomCocina from "../assets/cocina_mom.png";

const kit = KITS.cocina;

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
                background: "linear-gradient(90deg, #d97706, #fbbf24)",
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
              color: "#d97706",
              fontSize: "clamp(0.78rem, 2.2vw, 0.9rem)",
              fontWeight: 600,
              marginTop: 6,
              fontStyle: "italic",
            }}
          >
            ❤️ Potencia, rapidez y practicidad para su día a día ❤️
          </p>
        </FadeInUp>

        {/* Hero Card - Matches KitBelleza */}
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
                  <span style={{ color: "#d97706", fontWeight: 700 }}>
                    más fáciles y rápidas
                  </span>
                </p>

                <div className="space-y-1">
                  <BenefitItem text="Ahorra tiempo en cada comida" icon={Zap} />
                  <BenefitItem text="Resultados profesionales en casa" icon={Star} />
                  <BenefitItem text="Fácil de usar y de limpiar" icon={ThumbsUp} />
                </div>
              </div>

              <div className="flex justify-center md:min-w-[90px]">
                <GiftBadge>
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
                background: "linear-gradient(90deg, #f59e0b, #ea580c)",
                color: "#fff",
                fontWeight: 900,
                fontSize: "1rem",
                letterSpacing: "0.1em",
                padding: "10px 28px",
                borderRadius: 999,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 10px 25px rgba(245,158,11,0.3)"
              }}
            >
              2 PRODUCTOS CLAVE <Heart size={18} fill="white" />
            </span>
          </div>
        </FadeInUp>

        {/* Product Cards — Exact Copy of KitBelleza style */}
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
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(168,85,247,0.3)" }}
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
                  color: "#92400e",
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
                    <div style={{ color: "#f59e0b" }}><CheckCircle2 size={16} /></div>
                    <span style={{ fontSize: "0.82rem", color: "#4b5563", fontWeight: 600, textAlign: "left" }}>{s}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto w-full">
                <div
                  style={{
                    padding: "10px 16px",
                    background: "rgba(245,158,11,0.12)",
                    borderRadius: 14,
                    fontSize: "0.75rem",
                    color: "#92400e",
                    fontWeight: 800,
                    width: "100%",
                    border: "1px solid rgba(245,158,11,0.25)",
                  }}
                >
                  Perfecta para tamales, humitas, moler carnes, semillas y verduras (crudas o cocidas)🥩
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
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(168,85,247,0.3)" }}
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
                  color: "#92400e",
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
                    <div style={{ color: "#f59e0b" }}><CheckCircle2 size={16} /></div>
                    <span style={{ fontSize: "0.82rem", color: "#4b5563", fontWeight: 600, textAlign: "left" }}>{s}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto w-full">
                <div
                  style={{
                    padding: "10px 16px",
                    background: "rgba(245,158,11,0.12)",
                    borderRadius: 14,
                    fontSize: "0.75rem",
                    color: "#92400e",
                    fontWeight: 800,
                    width: "100%",
                    border: "1px solid rgba(245,158,11,0.25)",
                  }}
                >
                  Ideal para granos y semillas secos🌾
                </div>
              </div>
            </motion.div>
          </ScaleIn>
        </div>

        {/* Aliados Indispensables — Single Glass Bar (No more crowded separate cards) */}
        <FadeInUp delay={0.5}>
          <div style={{ marginTop: 80, marginBottom: 40 }}>
            <div className="glass-card" style={{ padding: "20px 32px", borderRadius: 30 }}>
              <p className="text-center font-black text-amber-900 text-[0.7rem] uppercase tracking-widest mb-6 opacity-60">❤️ DOS ALIADOS INDISPENSABLES ❤️</p>
              <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl bg-white/40 p-3 rounded-2xl">🥩</span>
                  <p className="text-[0.65rem] font-bold text-amber-900 uppercase">PICA CARNES</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl bg-white/40 p-3 rounded-2xl">🥗</span>
                  <p className="text-[0.65rem] font-bold text-amber-900 uppercase">MEZCLAS</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl bg-white/40 p-3 rounded-2xl">🌾</span>
                  <p className="text-[0.65rem] font-bold text-amber-900 uppercase">GRANOS</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl bg-white/40 p-3 rounded-2xl">🌿</span>
                  <p className="text-[0.65rem] font-bold text-amber-900 uppercase">ESPECIAS</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Final Offer — Exact copy of KitBelleza pricing alignment */}
        <FadeInUp delay={0.6}>
          <div className="mt-20 flex justify-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 items-center max-w-[680px] w-full">
              {/* Gift box + image */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-[32px] p-6 border-2 border-purple-200/50 w-full max-w-[320px] relative shadow-xl">
                  <div className="relative mb-4 h-[240px] md:h-[280px]">
                    <img src={imgMomCocina} alt="Mamá en la cocina" className="w-full h-full object-contain absolute bottom-0 left-0 z-10 mix-blend-multiply" />
                  </div>
                  <p className="text-xs md:text-sm font-black text-purple-600 leading-tight uppercase tracking-wider text-center">
                    EL REGALO QUE ELLA MERECE ❤️
                  </p>
                </div>
              </div>

              {/* Offer + CTA — PERFECTLY CENTERED & BALANCED */}
              <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-5 border border-orange-200/30 w-full max-w-[300px]">
                  <p className="text-purple-900 font-extrabold text-lg mb-1">¡OFERTA LIMITADA!</p>
                  <p className="text-purple-800 text-sm opacity-90">Hazla feliz hoy, sorprenderla es fácil ❤️</p>
                </div>

                <div className="flex flex-col gap-4 w-full max-w-[260px]">
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
      </div>
    </section>
  );
}