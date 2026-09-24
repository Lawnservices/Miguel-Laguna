const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const youtubeUrl = "https://www.youtube.com/channel/UCvQGGUoVlrZbyHybgE5HNCQ";

document.querySelectorAll("[data-youtube-link]").forEach(link => {
  link.href = youtubeUrl;
});
