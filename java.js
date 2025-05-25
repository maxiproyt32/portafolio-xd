document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleModeBtn");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Mostrar secciones al hacer scroll
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Traducciones simples
  const langEn = document.getElementById("lang-en");
  const langEs = document.getElementById("lang-es");

  const translations = {
    es: {
      welcome: "☁ ● Bienvenido a Mi Portafolio ● ☁",
      introText: "Me especializo en animaciones R6 y R15 para Roblox. ¡Los precios varían según la complejidad!",
      title: "💥 Animador de Roblox – R6 & R15 💥",
      desc: "Soy un animador de Roblox con experiencia en crear animaciones de combate movimientos escenas etc.",
      offersTitle: "📝 Lo que ofrezco:",
      offer1: "Animaciones de ataque personalizadas",
      offer2: "Movimiento limpio y fluido",
      offer3: "Calidad profesional para juegos de pelea",
      offer4: "Soporte para R6 y R15",
      pricingTitle: "💰 Precios:",
      price1: "Combate/movimiento simple (M1, dashes, etc.): 400+ Robux / $4 USD",
      price2: "Movimientos (caminar, correr, etc.): 500+ Robux / $5 USD",
      price3: "Habilidades y poderes: 800+ Robux / $10 USD",
      price4: "Cinemáticas: 1000+ Robux / $15 USD",
      taxNote: "Pagos en Robux son después de impuestos. USD preferido. 💸",
      videosTitle: "Videos de YouTube",
      contactTitle: "Contáctame"
    },
    en: {
      welcome: "☁ ● Welcome to My Portfolio ● ☁",
      introText: "I specialize in Roblox R6 and R15 animations. Prices vary depending on the complexity!",
      title: "💥 Roblox Animator 💥",
      desc: "I'm a Roblox animator with experience in creating high-quality combat animations for both R6 and R15 rigs.",
      offersTitle: "📝 What I Offer:",
      offer1: "Custom attack animations",
      offer2: "Run walk and jums animations",
      offer3: "M1 animations",
      offer4: "R6 and R15 support",
      pricingTitle: "💰 Prices:",
      price1: "Simple combat/movement (M1, dashes, etc.): 400+ Robux / $4 USD",
      price2: "Movements (Walk, Run, etc.): 500+ Robux / $5 USD",
      price3: "Abilities, skills: 800+ Robux / $10 USD",
      price4: "Cutscenes: 1000+ Robux / $15 USD",
      taxNote: "Robux payments are post-tax prices. USD preferred. 💸",
      videosTitle: "YouTube Videos",
      contactTitle: "Contact Me"
    }
  };

  function switchLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key];
    });
  }

  langEn.addEventListener("click", () => switchLanguage("en"));
  langEs.addEventListener("click", () => switchLanguage("es"));
});
