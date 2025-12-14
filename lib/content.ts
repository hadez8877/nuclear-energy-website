// =====================================================
// CONTENIDO EDITABLE - Modifica los textos aquí
// =====================================================

export const siteContent = {
  // Navegación
  nav: {
    brand: "Nuclear",
    links: [
      { label: "Qué Es", href: "#que-es" },
      { label: "Cómo Funciona", href: "#como-funciona" },
      { label: "Ventajas", href: "#ventajas" },
      { label: "Desventajas", href: "#desventajas" },
      { label: "Futuro", href: "#futuro" },
    ],
    cta: "Explorar",
  },

  // Hero Section
  hero: {
    badge: "Energía del Futuro",
    title: "La Base Energética",
    titleHighlight: "del Mañana",
    description:
      "La energía nuclear representa una de las fuentes más potentes y eficientes para satisfacer las demandas energéticas globales, con mínimas emisiones de carbono.",
    cta: {
      primary: "Descubrir Más",
      secondary: "Ver Datos",
    },
    stats: [
      { value: "10%", label: "Electricidad Mundial" },
      { value: "440+", label: "Reactores Activos" },
      { value: "0", label: "Emisiones CO₂" },
    ],
  },

  // Qué Es Section
  whatIs: {
    badge: "Fundamentos",
    title: "¿Qué es la",
    titleHighlight: "Energía Nuclear?",
    description:
      "La energía nuclear es la energía contenida en el núcleo de los átomos. Se libera mediante reacciones nucleares, principalmente la fisión, donde núcleos pesados se dividen en núcleos más ligeros, liberando enormes cantidades de energía.",
    features: [
      {
        title: "Densidad Energética",
        description: "Un kilogramo de uranio produce tanta energía como 20,000 kg de carbón.",
        icon: "zap",
      },
      {
        title: "Energía de Base",
        description: "Proporciona electricidad constante las 24 horas, independiente del clima.",
        icon: "clock",
      },
      {
        title: "Bajas Emisiones",
        description: "Prácticamente cero emisiones de gases de efecto invernadero durante operación.",
        icon: "leaf",
      },
    ],
  },

  // Cómo Funciona Section
  howItWorks: {
    badge: "El Proceso",
    title: "¿Cómo",
    titleHighlight: "Funciona?",
    steps: [
      {
        number: "01",
        title: "Fisión Nuclear",
        description:
          "Neutrones impactan núcleos de uranio-235 o plutonio-239, dividiéndolos y liberando energía y más neutrones.",
      },
      {
        number: "02",
        title: "Reacción en Cadena",
        description: "Los neutrones liberados provocan más fisiones, creando una reacción controlada y sostenida.",
      },
      {
        number: "03",
        title: "Generación de Calor",
        description: "La energía liberada calienta agua a más de 300°C, generando vapor a alta presión.",
      },
      {
        number: "04",
        title: "Producción Eléctrica",
        description: "El vapor impulsa turbinas conectadas a generadores, produciendo electricidad limpia.",
      },
    ],
  },

  // Ventajas Section
  advantages: {
    badge: "Beneficios",
    title: "Ventajas de la",
    titleHighlight: "Energía Nuclear",
    items: [
      {
        title: "Alta Eficiencia",
        description: "Factor de capacidad superior al 90%, mucho mayor que solar (25%) o eólica (35%).",
        stat: "93%",
        statLabel: "Factor de capacidad",
      },
      {
        title: "Cero Emisiones",
        description: "Durante la operación no produce CO₂ ni otros gases de efecto invernadero.",
        stat: "0g",
        statLabel: "CO₂ por kWh",
      },
      {
        title: "Espacio Reducido",
        description: "Una planta nuclear ocupa mucho menos terreno que parques solares o eólicos equivalentes.",
        stat: "1km²",
        statLabel: "Por 1000MW",
      },
      {
        title: "Suministro Estable",
        description: "Reservas de uranio suficientes para más de 100 años al ritmo actual de consumo.",
        stat: "100+",
        statLabel: "Años de reservas",
      },
    ],
  },

  // Desventajas Section
  disadvantages: {
    badge: "Desafíos",
    title: "Desventajas y",
    titleHighlight: "Consideraciones",
    items: [
      {
        title: "Residuos Radiactivos",
        description:
          "Los residuos de alta actividad requieren almacenamiento seguro durante miles de años. Sin embargo, el volumen total es pequeño comparado con otros sectores energéticos.",
      },
      {
        title: "Altos Costes Iniciales",
        description:
          "La construcción de plantas nucleares requiere inversiones significativas y largos períodos de construcción, aunque los costes operativos son bajos.",
      },
      {
        title: "Riesgo de Accidentes",
        description:
          "Aunque muy raros, los accidentes nucleares pueden tener consecuencias graves. Los diseños modernos incorporan múltiples sistemas de seguridad pasiva.",
      },
      {
        title: "Proliferación Nuclear",
        description:
          "La tecnología nuclear puede ser desviada para fines militares, requiriendo estrictos controles internacionales y salvaguardias.",
      },
    ],
  },

  // Futuro Section
  future: {
    badge: "Horizonte 2050",
    title: "El Futuro de la",
    titleHighlight: "Energía Nuclear",
    description:
      "La energía nuclear jugará un papel fundamental en la transición energética. Nuevas tecnologías prometen reactores más seguros, eficientes y económicos.",
    innovations: [
      {
        title: "Reactores Modulares Pequeños (SMR)",
        description: "Diseños compactos y prefabricados que reducen costes y tiempos de construcción.",
      },
      {
        title: "Reactores de IV Generación",
        description: "Mayor seguridad, eficiencia y capacidad de utilizar residuos como combustible.",
      },
      {
        title: "Fusión Nuclear",
        description: "El 'santo grial' energético: energía prácticamente ilimitada y limpia.",
      },
    ],
    stats: [
      { value: "2050", label: "Meta Net Zero" },
      { value: "25%", label: "Mix Energético Proyectado" },
      { value: "50+", label: "Nuevos Reactores en Construcción" },
    ],
  },

  // Footer
  footer: {
    brand: "Nuclear",
    tagline: "Energía para un futuro sostenible",
    copyright: "© 2025 Nuclear Energy Initiative. Información con fines educativos.",
    links: [
      { label: "IAEA", href: "https://www.iaea.org" },
      { label: "World Nuclear", href: "https://world-nuclear.org" },
      { label: "NEA", href: "https://www.oecd-nea.org" },
    ],
  },
}
