// Declaracion de variables
// Declaracion de funciones

const handlerClickSpan = (event) => {
  const span = event.target;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  span.style.backgroundColor = `#${randomColor}`;
};

const handlerClickAlert = (event) => {
  const p = event.target;
  alert(p.textContent);
};

// ----- Inicio de la aplicación -----

document.addEventListener("DOMContentLoaded", () => {
  // 1. Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`. Cuando se haga clic, cambia el color de fondo del elemento al azar.
  document.querySelectorAll("#contenedorSecundario span").forEach((span) => {
    span.addEventListener("click", handlerClickSpan);
  });

  // 2. Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.
  document.querySelectorAll(".parrafo").forEach((p) => {
    p.addEventListener("dblclick", handlerClickAlert);
  });

  // 4. Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      document.querySelectorAll("#contenedorSecundario p").forEach((p) => {
        p.textContent = "Has pulsado Enter";
      });
    }
  });

  // 5. Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.
  document.querySelectorAll(".etiqueta").forEach((tag) => {
    tag.addEventListener("click", () => {
      tag.remove();
    });
  });

  // 6. Crea una función que cambie el color de todos los elementos `<span>` dentro del `contenedorSecundario` cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.
  document.querySelectorAll("#contenedorSecundario span").forEach((span) => {
    span.addEventListener("mouseover", () => {
      span.style.color = "blue";
    });
    span.addEventListener("mouseout", () => {
      span.style.color = "";
    });
  });

  // 8. Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal` cuando se haga clic en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.
  document.querySelector("img").addEventListener("click", () => {
    document.querySelectorAll("#contenedorPrincipal p").forEach((p) => {
      const currentSize = window.getComputedStyle(p).fontSize;
      p.style.fontSize = `${parseInt(currentSize) * 2}px`;
    });
  });

  // 9. Añade un evento de teclado a la página. Cuando se presione cualquier tecla, muestra una alerta con el código de la tecla presionada.
  document.addEventListener("keydown", (event) => {
    alert(`Tecla presionada: ${event.key}`);
  });

  // 10. Crea una función que cambie el color de fondo del `contenedorPrincipal` cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.
  document.querySelector("#contenedorPrincipal").addEventListener("click", (event) => {
    document.querySelector("#contenedorPrincipal").style.backgroundColor = "green";
  });
});
