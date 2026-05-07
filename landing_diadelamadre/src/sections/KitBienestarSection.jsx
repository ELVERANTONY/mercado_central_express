import { motion } from "framer-motion";
import { Heart, Sparkles, Shield } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { FadeInUp, ScaleIn } from "../components/Animations";
import { GiftBadge, BenefitItem, PriceBadge } from "../components/UIKit";
import { KITS } from "../constants/config";

const kit = KITS.bienestar;

import imgCepillo from "../assets/product_cepillo-5.png";
import imgPlancha from "../assets/product_cepillo_miniplancha_solo.png";
import imgParches from "../assets/product_dos_parches.png";
import imgCabelloMom from "../assets/cabello_mom.png";

const productImages = [imgCepillo, imgPlancha, imgParches];

// Configuración de colores para el Kit Bienestar (Rosa/Fucsia)
const colorConfig = {
  primary: "#db2777",
  secondary: "#ec4899",
  text: "#4b2d63",
  bgLight: "rgba(219, 39, 119, 0.12)",
  border: "rgba(219, 39, 119, 0.25)",
  gradient: "linear-gradient(135deg, #db2777, #ec4899)",
  shadow: "rgba(219, 39, 119, 0.4)"
};

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
            "radial-gradient(circle, rgba(219,39,119,0.1) 0%, transparent 70%)",
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
                background: colorConfig.gradient,
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
              color: "#9f1239",
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
              background: "linear-gradient(135deg, #db2777, #be185d)",
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
              color: "#be123c",
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
                background: "linear-gradient(135deg, #db2777, #f59e0b)",
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
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <p
                  className="text-center md:text-left"
                  style={{
                    color: colorConfig.text,
                    fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
                    lineHeight: 1.55,
                    marginBottom: 16,
                  }}
                >
                  Porque ella lo da todo,{" "}
                  <strong>regálale lo mejor</strong> para que se sienta{" "}
                  <span style={{ color: colorConfig.primary, fontWeight: 700 }}>
                    única y especial
                  </span>
                </p>

                <div className="space-y-1">
                  {kit.beneficios.map((b, i) => (
                    <BenefitItem
                      key={i}
                      text={b}
                      icon={i === 0 ? Sparkles : i === 1 ? Heart : Shield}
                      colorConfig={colorConfig}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-center md:min-w-[90px]">
                <GiftBadge colorConfig={colorConfig}>
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
                background: colorConfig.gradient,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 items-start mt-32 md:mt-48">
          {kit.productos.map((p, i) => (
            <ScaleIn key={i} delay={0.3 + i * 0.1}>
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
                    src={productImages[i]} 
                    alt={p.nombre} 
                    className="h-[200px] md:h-[260px] w-auto object-contain drop-shadow-2xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  />
                </div>

                <p
                  className="font-black"
                  style={{
                    color: colorConfig.primary,
                    fontSize: "clamp(1rem, 2.8vw, 1.2rem)",
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                    marginBottom: 10,
                    letterSpacing: "0.05em"
                  }}
                >
                  {p.nombre}
                </p>
                <p
                  style={{
                    fontSize: "clamp(0.85rem, 2.2vw, 0.95rem)",
                    color: "#6b1a3e", // Darker version of primary for readability
                    lineHeight: 1.5,
                    marginBottom: 16,
                    fontWeight: 500
                  }}
                >
                  {p.descripcion}
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    padding: "10px 16px",
                    background: colorConfig.bgLight,
                    borderRadius: 14,
                    fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                    color: colorConfig.primary,
                    fontWeight: 800,
                    width: "100%",
                    border: `1px solid ${colorConfig.border}`
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
        <div className="mt-48 md:mt-72 flex justify-center px-4">
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
                    <img src={imgCabelloMom} alt="Mamá feliz" className="w-full h-full object-contain absolute bottom-0 left-0 z-10 mix-blend-multiply" />
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
