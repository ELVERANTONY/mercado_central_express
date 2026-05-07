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
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap"
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

            {/* Divider */}
            <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.3)", margin: "0 4px" }} />

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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            alignItems: "center",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {/* LEFT: Title */}
          <div>
            <FadeInUp delay={0.1}>
              <p
                style={{
                  color: "#6b21a8",
                  fontWeight: 800,
                  fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
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
                  fontSize: "clamp(2.2rem, 9vw, 4rem)",
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
                  fontSize: "clamp(0.78rem, 2.5vw, 0.92rem)",
                  lineHeight: 1.5,
                  marginTop: 8,
                  fontWeight: 500,
                }}
              >
                Porque ella lo da todo,{" "}
                <span style={{ fontWeight: 800 }}>regálale lo mejor</span> para
                que se sienta{" "}
                <span style={{ color: "#ec4899", fontWeight: 700 }}>
                  única y especial
                </span>
              </p>
            </FadeInUp>

            {/* General Benefits for all Kits */}
            <div style={{ marginTop: 12 }}>
              {[
                "Calidad premium en cada detalle",
                "Sorpréndela con un regalo único",
                "El detalle perfecto para su día"
              ].map((text, i) => (
                <FadeInUp key={i} delay={0.3 + i * 0.1}>
                  <BenefitItem
                    text={text}
                    icon={i === 0 ? Sparkles : i === 1 ? Heart : Star}
                  />
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* RIGHT: Hero Image with Layered Effect */}
          <div style={{ position: "relative", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "flex-end", minHeight: 380 }}>
            <ScaleIn delay={0.15}>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "100%",
                  maxWidth: 320,
                }}
              >
                {/* Woman image (BACKGROUND LAYER) */}
                <motion.img
                  src={heroImage}
                  alt="Mamá feliz"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  style={{
                    width: "115%",
                    height: "auto",
                    display: "block",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 1, // Behind the box
                    marginTop: "-80px", // More UP
                    marginBottom: "60px", // More space for box
                    mixBlendMode: "multiply"
                  }}
                />

                {/* Purple Box "El regalo que ella merece" (FOREGROUND LAYER) */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: "absolute",
                    bottom: -15, // Lowered
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "105%",
                    maxWidth: 280,
                    minHeight: 110,
                    background: "linear-gradient(135deg, #9333ea, #c084fc)",
                    borderRadius: 24,
                    boxShadow: "0 15px 40px rgba(147, 51, 234, 0.45)",
                    zIndex: 2, // In front to hide the cut
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    marginLeft: "-140px" // half of 280
                  }}
                >
                  <p style={{
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: "1.05rem",
                    lineHeight: 1.2,
                    textAlign: "center",
                    textTransform: "uppercase"
                  }}>
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
