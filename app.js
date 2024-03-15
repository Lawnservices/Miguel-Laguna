const saluda = document.getElementById("cavesa");
const saludar = document.getElementById("muchos");
const sala = document.getElementById("foto");
const salas = document.getElementById("acento");

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 200) {
    cavesa.style.backgroundColor = "#f6f6f6";
    muchos.style.color = "#000";
    foto.style.display = "none";
    acento.style.display = "block";
    acento.style.color = '#000';
  } else {
    cavesa.style.backgroundColor = "#003349";
    muchos.style.color = "#fff";
    foto.style.display = "block";
     acento.style.display = "none";
     
  }
});
