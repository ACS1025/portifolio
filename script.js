document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     MENU MOBILE
     ============================ */

  const toggle = document.getElementById("mobileMenuToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const isOpen = mobileNav.getAttribute("aria-hidden") === "false";

      mobileNav.setAttribute("aria-hidden", String(isOpen));
      toggle.setAttribute("aria-expanded", String(!isOpen));

      mobileNav.style.display = isOpen ? "none" : "flex";
    });
  }

  /* ============================
     PROJETOS (hover informativo)
     ============================ */

  const projetos = document.querySelectorAll(".projeto");

  projetos.forEach(projeto => {
    const info = projeto.querySelector(".projeto-info");

    if (!info) return;

    projeto.addEventListener("mouseenter", () => {
      info.style.opacity = "0.7";
      info.style.backgroundColor = "#000";
    });

    projeto.addEventListener("mouseleave", () => {
      info.style.opacity = "0";
      info.style.backgroundColor = "transparent";
    });
  });

});
