const perritos = {
  Luna: {
    nombre: "Luna",
    edad: "2 años",
    raza: "Labrador",
    descripcion: "Juguetona, le encantan las pelotas y correr en el parque."
  },
  Max: {
    nombre: "Max",
    edad: "4 años",
    raza: "Beagle",
    descripcion: "Curioso y siempre con la nariz en el suelo buscando aventuras."
  },
  Rocky: {
    nombre: "Rocky",
    edad: "3 años",
    raza: "Bulldog Francés",
    descripcion: "Tranquilo y cariñoso, le encanta dormir la siesta."
  },
  Bella: {
    nombre: "Bella",
    edad: "1 año",
    raza: "Golden Retriever",
    descripcion: "Muy dulce y sociable, se lleva bien con todos los perritos."
  }
};

function mostrarInfo(nombre) {
  const perrito = perritos[nombre];
  const infoDiv = document.getElementById("infoPerrito");
  infoDiv.style.display = "block";
  infoDiv.querySelector("h2").textContent = perrito.nombre;
  infoDiv.querySelector("p").innerHTML = `
    🐾 Edad: ${perrito.edad}<br>
    🐾 Raza: ${perrito.raza}<br>
    🐾 ${perrito.descripcion}
  `;
}
function cerrarInfo() {
  document.getElementById("infoPerrito").style.display = "none";
}
document.getElementById("cerrarBtn").addEventListener("click", cerrarInfo);
document.getElementById("cerrarBtn2").addEventListener("click", cerrarInfo);
document.getElementById("cerrarBtn3").addEventListener("click", cerrarInfo);
document.getElementById("cerrarBtn4").addEventListener("click", cerrarInfo);

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}