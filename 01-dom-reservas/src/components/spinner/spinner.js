const createSpinner = () => {
  const spinner = document.createElement("div");
  spinner.id = "spinner";
  spinner.classList.add("spinner hidden");
  spinner.style.color = "black";
  spinner.textContent = "Cargando...";
};

const showSpinner = () => {};

const hideSpinner = () => {};
