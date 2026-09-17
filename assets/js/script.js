const heroImg = new Image();
heroImg.onload = () => document.body.classList.add("hero-loaded");
heroImg.src = "assets/images/hero-facial.png";

/* Keep anchor scrolling perfectly aligned with the sticky header,
   including when the header changes height at tablet/mobile breakpoints. */
const header = document.querySelector(".site-header");

function updateHeaderOffset() {
  if (!header) return;
  const height = Math.ceil(header.getBoundingClientRect().height);
  document.documentElement.style.setProperty("--header-offset", `${Math.max(height - 4, 0)}px`);
}

updateHeaderOffset();
window.addEventListener("resize", updateHeaderOffset);

if ("ResizeObserver" in window && header) {
  const observer = new ResizeObserver(updateHeaderOffset);
  observer.observe(header);
}
