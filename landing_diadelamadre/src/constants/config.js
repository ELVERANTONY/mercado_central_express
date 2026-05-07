// ============================================================
//  CONFIGURACIÓN CENTRAL — Mercado Central Express
//  Día de la Madre 2026
//
//  IMPORTANTE: Los mensajes se guardan como TEXTO PLANO.
//  encodeURIComponent() se aplica en WhatsAppButton.jsx
//  dentro del browser, donde el motor V8 ya resolvió
//  los surrogate pairs correctamente.
// ============================================================

export const WHATSAPP_NUMBER = "51994220535";



// Emojis generados dinámicamente con fromCodePoint para evitar corrupción de codificación
const hola = String.fromCodePoint(0x1f44b); // 👋
const regalo = String.fromCodePoint(0x1f381); // 🎁
const corazon = String.fromCodePoint(0x1f495); // 💕
const morado = String.fromCodePoint(0x1f49c); // 💜
const sarten = String.fromCodePoint(0x1f373); // 🍳

export const KITS = {
  bienestar: {
    id: "kit-belleza",
    nombre: "Kit de Bienestar para Mamá",
    precio: "S/ 74",
    precioNum: 74,
    // Texto PLANO — se encoda en WhatsAppButton.jsx
    whatsappMessage: [
      `${hola} Hola! Quiero pedir el *Kit de Bienestar Mamá*`,
      `(Cepillo One Step + Mini Plancha + un par de Parches Hidrogel)`,
      `por solo *S/ 74*. Esta disponible? ${regalo} ${corazon}`
    ].join("\n"),
    productos: [
      {
        nombre: "Cepillo One Step",
        descripcion: "Seca, alisa, da volumen y peina en un solo paso.",
        icono: "Wind",
        extra: "Cabello perfecto sin salir de casa",
      },
      {
        nombre: "Mini Plancha",
        descripcion: "Pequeña, practica y poderosa. Ideal para retoques rapidos.",
        icono: "Zap",
        extra: "Llevala a todos lados contigo",
      },
      {
        nombre: "1 Par de Parches Hidrogel",
        descripcion: "Hidrata, reduce ojeras y bolsas. Mirada fresca y descansada.",
        icono: "Eye",
        extra: "Relajacion y cuidado para mama",
      },
    ],
    beneficios: [
      "Se ve mas linda todos los dias",
      "Ahorra tiempo en su rutina diaria",
      "Relajate, cuidate y disfruta de su momento",
    ],
  },

  belleza: {
    id: "kit-bienestar",
    nombre: "Kit de Belleza para Mamá",
    precio: "S/ 54",
    precioNum: 54,
    whatsappMessage: [
      `${hola} Hola! Quiero pedir el *Kit de Belleza para Mamá*`,
      `(Masajeador Recargable + seis pares de Parches Hidrogel (12 und))`,
      `por solo *S/ 54*. Esta disponible? ${regalo} ${morado}`
    ].join("\n"),
    productos: [
      {
        nombre: "Masajeador de Rostro Recargable",
        descripcion: "Alivia tensiones, mejora la circulacion y reduce lineas finas.",
        icono: "Sparkles",
        extra: "Uso diario",
      },
      {
        nombre: "Parches de Hidrogel",
        descripcion: "Hidrata intensamente, reduce ojeras y desinflama.",
        icono: "Snowflake",
        extra: "Efecto frescura — 12 Parches / 6 Pares",
      },
    ],
    beneficios: [
      "Cuidado facial profesional todos los dias",
      "Alivia tensiones y relaja los musculos",
      "Descanso y frescura para su mirada",
    ],
  },

  cocina: {
    id: "kit-cocina",
    nombre: "Combo Cocina Perfecto",
    precio: "S/ 120",
    precioNum: 120,
    whatsappMessage: [
      `${hola} Hola! Quiero pedir el *Combo Cocina Mamá*`,
      `(Procesadora Electrica 1000W + Molino para Granos Secos)`,
      `por solo *S/ 120*. Esta disponible? ${regalo} ${sarten}`
    ].join("\n"),
    procesadora: {
      nombre: "Procesadora Electrica",
      specs: [
        "Acero inoxidable",
        "3 Litros de capacidad",
        "1000 Watts",
        "2 velocidades",
        "Para carnes, granos y especias humedas",
      ],
      usos: ["Pica carnes", "Prepara mezclas", "Muele especias humedas"],
    },
    molino: {
      nombre: "Molino para Granos Secos",
      specs: [
        "4 cuchillos de acero inoxidable",
        "Capacidad 200-250 g",
        "Motor potente de 150 Watts",
        "Facil de limpiar e higienico",
        "Ideal para granos, cereales y especias secas",
      ],
      usos: ["Muele granos", "Cereales", "Especias secas"],
    },
    badges: [
      { icono: "Shield", texto: "Acero inoxidable de alta calidad" },
      { icono: "Star", texto: "Facil de limpiar y resistente" },
      { icono: "Zap", texto: "Potencia y rendimiento" },
      { icono: "ThumbsUp", texto: "Practicos, rapidos y seguros" },
    ],
  },
};
