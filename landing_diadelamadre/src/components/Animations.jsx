import { motion } from "framer-motion";

/**
 * FadeInUp — wrapper que aplica fade-in desde abajo al entrar al viewport.
 */
export function FadeInUp({ children, delay = 0, duration = 0.6, className = "", style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeIn — fade simple sin desplazamiento vertical.
 */
export function FadeIn({ children, delay = 0, duration = 0.5 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScaleIn — scale desde 0.88 a 1 al entrar.
 */
export function ScaleIn({ children, delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
