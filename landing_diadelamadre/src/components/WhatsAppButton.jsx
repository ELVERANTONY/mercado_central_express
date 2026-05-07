import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../constants/config";

/**
 * WhatsApp CTA Button — dispara link directo con mensaje personalizado.
 * Props:
 *   message: string  <- TEXTO PLANO (sin encodeURIComponent; se aplica aqui en el browser)
 *   label: string
 *   pulse: boolean
 *   size: "sm" | "md" | "lg"
 *   fullWidth: boolean
 */
export default function WhatsAppButton({
  message,
  label = "PEDIR POR WHATSAPP",
  pulse = true,
  size = "md",
  fullWidth = false,
}) {
  // encodeURIComponent AQUI: el browser ya tiene los surrogate pairs
  // correctamente resueltos en memoria antes de codificarlos a %xx.
  const encoded = encodeURIComponent(String(message));
  const href = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}&type=phone_number&app_absent=0`;

  const sizes = {
    sm: { padding: "12px 20px", fontSize: "0.875rem", gap: "8px" },
    md: { padding: "16px 28px", fontSize: "1rem", gap: "10px" },
    lg: { padding: "18px 36px", fontSize: "1.125rem", gap: "12px" },
  };

  const s = sizes[size] || sizes.md;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${pulse ? "btn-whatsapp-pulse" : ""}`}
      style={{
        padding: s.padding,
        fontSize: s.fontSize,
        gap: s.gap,
        width: fullWidth ? "100%" : "auto",
        maxWidth: "100%",
      }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <MessageCircle size={size === "lg" ? 24 : 20} strokeWidth={2.5} />
      <span>{label}</span>
    </motion.a>
  );
}
