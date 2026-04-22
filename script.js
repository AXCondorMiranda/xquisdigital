/* =========================
   THEME TOGGLE
========================= */

const toggle = document.getElementById("theme-toggle");

/* Cargar preferencia guardada */
if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.add("light-mode");
}

/* Cambiar modo al hacer click */
toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

/* =========================
   NAVBAR BLUR ON SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =========================
   MOCKUP 3D EFFECT
========================= */

const mockup = document.querySelector(".mockup");
const container = document.querySelector(".hero-right");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 6;
  const rotateY = ((x - centerX) / centerX) * 6;

  mockup.style.transform = `
    rotateX(${-rotateX}deg)
    rotateY(${rotateY}deg)
  `;

  mockup.style.boxShadow = `
    ${-rotateY * 5}px ${rotateX * 5}px 100px rgba(0,0,0,0.6),
    ${-rotateY * 2}px ${rotateX * 2}px 40px rgba(99,102,241,0.2)
  `;
});

container.addEventListener("mouseleave", () => {
  mockup.style.transform = "rotateX(0deg) rotateY(0deg)";
  mockup.style.boxShadow = `
    0 40px 100px rgba(0,0,0,0.6),
    0 15px 40px rgba(99,102,241,0.15)
  `;
});

/* =========================
   HAMBURGER MENU PREMIUM
========================= */

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const body = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("menu-open");
});

// Cerrar al hacer click en enlace
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("menu-open");
  });
});
/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

const animateCounters = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = +counter.getAttribute("data-target");

    let count = 0;
    const speed = target / 60;

    const updateCount = () => {
      if (count < target) {
        count += speed;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
    observer.unobserve(counter);
  });
};

const observer = new IntersectionObserver(animateCounters, {
  threshold: 0.6
});

counters.forEach(counter => {
  observer.observe(counter);
});
/* =========================
   PROCESS TIMELINE ANIMATION
========================= */

const timeline = document.querySelector(".timeline");
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      timeline.classList.add("active");

      timelineItems.forEach((item, index) => {

        setTimeout(() => {
          item.classList.add("visible");
        }, index * 250);

      });

    });

  },
  {
    threshold: 0.3
  }
);

timelineObserver.observe(timeline);
const pricingBtn = document.getElementById("pricingBtn");
const pricingDrawer = document.getElementById("pricingDrawer");
const closePricing = document.getElementById("closePricing");

pricingBtn.addEventListener("click", () => {
  pricingDrawer.classList.add("active");
});

closePricing.addEventListener("click", () => {
  pricingDrawer.classList.remove("active");
});