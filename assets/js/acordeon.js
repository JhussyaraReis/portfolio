const acordeonTrigger = document.querySelectorAll(".acordeon .trigger");

const abrir = (e) => {
  const acordeon = e.parentElement;
  const isOpen = acordeon.classList.contains("open");

  if (isOpen) {
    acordeon.classList.remove("open");
  } else {
    acordeon.classList.add("open");
  }
};

acordeonTrigger.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    abrir(e.target);
  });
  trigger.children[0].addEventListener("click", (e) => {
    abrir(e.target.parentElement);
  });
  trigger.children[1].addEventListener("click", (e) => {
    abrir(e.target.parentElement);
  });
});
