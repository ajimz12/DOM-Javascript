document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el elemento `h1` por su ID.
  const elementH1v2 = document
    .getElementById("contenedorPrincipal")
    .querySelector("h1");
  console.log(elementH1v2.textContent);

  // Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorSecundario`.
  const elementsP = document.querySelectorAll("#contenedorPrincipal .parrafo");
  console.log(elementsP);

  // Selecciona el elemento `img` por su atributo `src`.
  const elementImg = document.querySelector("img[src = 'imagen.png']");
  console.log(elementImg);

  // Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.
  const elementsId = document.querySelectorAll("#contenedorSecundario span");
  console.log(elementsId);

  // Selecciona el primer párrafo con la clase "importante".
  const elementImportant = document.querySelector(".parrafo.importante");
  console.log(elementImportant);

  // Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".
  const elementsParrafoPrincipal = document.querySelectorAll(
    "#contenedorPrincipal p"
  );
  console.log(elementsParrafoPrincipal);

  // Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".
  const elementsAtributo = document.querySelectorAll(
    '[data-atributo="valor1"]'
  );
  console.log(elementsAtributo);

  // Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
  const parrafosImportantes = document.querySelectorAll(".parrafo.importante");
  parrafosImportantes.length > 1 ? console.log(parrafosImportantes[1]) : null;

  // Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".
  const elemetsSpanContenedor = document.querySelectorAll(
    "#contenedorSecundario span"
  );
  console.log(elemetsSpanContenedor);

  // Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".
  const parrafosPrincipal = document.querySelectorAll(
    "#contenedorPrincipal .parrafo"
  );
  parrafosPrincipal.length > 1 ? console.log(parrafosPrincipal[2]) : null;

});
