function mostrarInfo(nombre) {
  let titulo = document.querySelector("#infoPerrito div h2");
  let texto = document.querySelector("#infoPerrito div p");

  let perrito = {
    "Luna y Scott": "🐶 Luna y Scott son dos perritos tranquilos y cariñosos, les encanta dormir la siesta.",
    "Max y Marshall": "🐶 Max y Marshall son dos perritos juguetones, les encantan las pelotas y correr en el parque.",
    "Bella": "🐶 Bella es una perrita dulce que le encanta jugar con sus amigos.",
    "Rocky": "🐶 Rocky es un perrito tranquilo que disfruta de las siestas."
  };

  titulo.textContent = nombre;
  texto.textContent = perrito[nombre];
  document.getElementById("infoPerrito").style.display = "block";
}



function mostrarInfo(nombre) {
  let titulo = document.querySelector("#infoGatito h2");
  let texto = document.querySelector("#infoGatito p");

  let gatitos = {
    "Lia": "🐱 Lia es una gatita juguetona que ama descubrir cosas nuevas.",
    "Tob": "🐱 Tob es muy tranquilo y siempre estará para ti.",
    "Lumi": "🐱 Lumi es inquieto pero muy cariñoso con los niños.",
    "Linda": "🐱 Linda es dulce, tranquila y adora dormir en el sofá."
  };

  titulo.textContent = nombre;
  texto.textContent = gatitos[nombre];
  document.getElementById("infoGatito").style.display = "block";
}
