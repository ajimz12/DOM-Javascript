  // Crear Div
  const divCard = document.createElement("div");
  divCard.id = "card";
  divCard.classList.add("primary card");

  const parrafo = document.createElement("p");
  parrafo.textContent = "Hola Mundo";

  divCard.appendChild(parrafo);

  const mensajeBtn = document.createElement("button");
  mensajeBtn.textContent = "Mostrar Mensaje";

  divCard.appendChild(mensajeBtn);