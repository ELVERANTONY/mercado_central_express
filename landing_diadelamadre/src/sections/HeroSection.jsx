import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";
import { FadeInUp, ScaleIn } from "../components/Animations";
import { GiftBadge, BenefitItem } from "../components/UIKit";
import { KITS } from "../constants/config";
import heroImage from "../assets/hero_woman.png";
import mceLogo from "../assets/logo-MCE.png";

const kit = KITS.bienestar;

export default function HeroSection() {
  return (
    <section
      className="bg-hero"
      style={{ position: "relative", overflow: "hidden", paddingBottom: 40 }}
    >
      {/* ── Decorative Blobs ── */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 280,
          height: 280,
          background:
            "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: -60,
          width: 200,
          height: 200,
          background:
            "radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* ── Top Banner "MCE + DÍA DE LA MADRE" ── */}
      <FadeInUp delay={0}>
        <div
          style={{
            background: "linear-gradient(90deg, #9333ea 0%, #ec4899 100%)",
            padding: "20px 16px", // EVEN TALLER
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-14"
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
            }}
          >
            {/* Logo + Brand */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img
                src={mceLogo}
                alt="MCE Logo"
                style={{ height: 26, filter: "brightness(0) invert(1)" }}
              />
              <span style={{ fontSize: "0.7rem", opacity: 0.95, letterSpacing: "0.15em" }}>
                MERCADO CENTRAL EXPRESS
              </span>
            </div>

            {/* Divider (Hidden on mobile) */}
            <div className="hidden md:block" style={{ width: 1, height: 16, background: "rgba(255,255,255,0.3)", margin: "0 4px" }} />

            {/* Campaign Name */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Heart size={14} fill="white" />
              <span>DÍA DE LA MADRE</span>
              <Heart size={14} fill="white" />
            </div>
          </div>
        </div>
      </FadeInUp>

      <div style={{ padding: "24px 20px 0" }}>
        {/* ── Hero Grid: Text + Image ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12"
          style={{
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <div className="text-center md:text-left">
            <FadeInUp delay={0.1}>
              <p
                style={{
                  color: "#6b21a8",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 5vw, 2.2rem)",
                  lineHeight: 1.15,
                }}
              >
                Kits De Regalos
                <br />
                Perfectos
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p
                className="font-dancing"
                style={{
                  background: "linear-gradient(135deg, #ec4899, #be185d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "clamp(3rem, 9vw, 4rem)",
                  lineHeight: 1,
                  marginTop: -4,
                }}
              >
                para Mamá
              </p>
            </FadeInUp>
            <FadeInUp delay={0.25}>
              <p
                style={{
                  color: "#4b2d63",
                  fontSize: "clamp(0.85rem, 2.5vw, 0.92rem)",
                  lineHeight: 1.5,
                  marginTop: 8,
                  fontWeight: 500,
                }}
              >
                Porque ella lo da todo,{" "}
                <span className="font-extrabold">regálale lo mejor</span> para
                que se sienta{" "}
                <span className="text-pink-500 font-bold">
                  única y especial
                </span>
              </p>
            </FadeInUp>

            {/* General Benefits for all Kits */}
            <div className="flex flex-col items-center md:items-start gap-3 w-full">
              {[
                "Calidad premium en cada detalle",
                "Sorpréndela con un regalo único",
                "El detalle perfecto para su día"
              ].map((text, i) => (
                <FadeInUp key={i} delay={0.3 + i * 0.1}>
                  <BenefitItem
                    text={text}
                    icon={i === 0 ? Sparkles : i === 1 ? Heart : Star}
                    center={true}
                  />
                </FadeInUp>
              ))}
            </div>
          </div>

          <div className="relative mt-8 md:mt-0 flex justify-center items-end min-h-[380px] md:min-h-[420px]">
            <ScaleIn delay={0.15}>
              <div className="relative inline-block w-full max-w-[280px] md:max-w-[340px]">
                {/* Woman image (BACKGROUND LAYER) */}
                <motion.img
                  src={heroImage}
                  alt="Mamá feliz"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="w-[125%] md:w-[115%] h-auto block mx-auto relative z-10 -mt-20 md:-mt-32 mb-16 md:mb-20"
                  style={{ mixBlendMode: "multiply" }}
                />

                {/* Purple Box "El regalo que ella merece" (FOREGROUND LAYER) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 md:-bottom-8 left-1/2 -translate-x-1/2 w-[95%] md:w-[105%] max-w-[300px] md:max-w-[340px] min-h-[110px] md:min-h-[130px] bg-gradient-to-br from-purple-600 to-purple-400 rounded-[2.5rem] shadow-2xl z-20 flex flex-col items-center justify-center p-4 border-2 border-white/30"
                >
                  <p className="text-white font-black text-lg md:text-xl leading-tight text-center uppercase tracking-wide">
                    ❤️ ¡EL REGALO QUE<br />ELLA MERECE! ❤️
                  </p>
                </motion.div>
              </div>
            </ScaleIn>
          </div>
        </div>

      </div>
    </section>
  );
}
