import { motion } from "framer-motion";
import { Heart, Sparkles, Shield, Eye } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { FadeInUp, ScaleIn } from "../components/Animations";
import { GiftBadge, BenefitItem, CheckItem } from "../components/UIKit";
import { KITS } from "../constants/config";

const kit = KITS.bienestar;

import imgCepillo from "../assets/product_cepillo-5.png";
import imgPlancha from "../assets/product_cepillo_miniplancha_solo.png";
import imgParches from "../assets/product_dos_parches.png";

const productImages = [imgCepillo, imgPlancha, imgParches];
const PRODUCT_ICONS_2 = ["🔋", "❄️"];

import imgCabelloMom from "../assets/cabello_mom.png";

export default function KitBienestarSection() {
  return (
    <section
      id="kit-bienestar"
      className="bg-belleza"
      style={{ padding: "48px 20px", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
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
            que brilla con{" "}
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
            ❤️ Estilo, suavidad y peinado perfecto para su día a día ❤️
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
            {/* Grid: Text + Gift Badge */}
            <div
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center text-center md:text-left"
            >
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
                  Porque ella lo da todo,{" "}
                  <strong>regálale lo mejor</strong> para que se sienta{" "}
                  <span style={{ color: "#ec4899", fontWeight: 700 }}>
                    única y especial
                  </span>
                </p>

                <div className="space-y-1">
                  {kit.beneficios.map((b, i) => (
                    <BenefitItem
                      key={i}
                      text={b}
                      icon={i === 0 ? Sparkles : i === 1 ? Heart : Shield}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-center md:min-w-[90px]">
                <GiftBadge>
                  <p>¡EL LOOK</p>
                  <p>QUE ELLA</p>
                  <p>MERECE!</p>
                </GiftBadge>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Products Section */}
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
              3 PRODUCTOS <Heart size={14} fill="white" />
            </span>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start mt-8">
          {kit.productos.map((p, i) => (
            <ScaleIn key={i} delay={0.3 + i * 0.1}>
              <motion.div
                className="glass-card"
                style={{ 
                  padding: "110px 12px 12px", // REDUCED BOTTOM PADDING
                  textAlign: "center", 
                  height: "auto", // AUTO HEIGHT
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
                {/* Floating Product Image */}
                <div className="absolute -top-16 md:-top-20 left-0 right-0 flex justify-center pointer-events-none z-10">
                  <img 
                    src={productImages[i]} 
                    alt={p.nombre} 
                    className="h-[140px] md:h-[180px] max-w-[130%] object-contain drop-shadow-xl"
                  />
                </div>

                <p
                  style={{
                    color: "#ec4899",
                    fontWeight: 800,
                    fontSize: "clamp(0.65rem, 2vw, 0.78rem)",
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                    marginBottom: 6,
                  }}
                >
                  {p.nombre}
                </p>
                <p
                  style={{
                    fontSize: "clamp(0.6rem, 1.8vw, 0.72rem)",
                    color: "#6b21a8",
                    lineHeight: 1.35,
                    marginBottom: 10,
                  }}
                >
                  {p.descripcion}
                </p>
                <div
                  style={{
                    marginTop: 12, // CLOSER
                    padding: "6px 8px",
                    background: "rgba(168,85,247,0.08)",
                    borderRadius: 8,
                    fontSize: "clamp(0.55rem, 1.5vw, 0.65rem)",
                    color: "#9333ea",
                    fontWeight: 600,
                    width: "100%"
                  }}
                >
                  {p.extra}
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        {/* ── Final CTA ── */}
        <FadeInUp delay={0.55}>
          <div className="mt-16 md:mt-24 flex justify-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 items-center max-w-[680px] w-full">
              {/* Gift box + image */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-[32px] p-6 border-2 border-purple-200/50 w-full max-w-[320px] relative shadow-xl">
                  <div className="relative mb-4 h-[240px] md:h-[280px]">
                    <img src={imgCabelloMom} alt="Mamá feliz" className="w-full h-full object-contain absolute bottom-0 left-0 z-10 mix-blend-multiply" />
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
      </div>
    </section>
  );
}
