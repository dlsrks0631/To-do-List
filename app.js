const h1 = document.querySelector("#hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedList);
  } else {
    h1.classList.add(clickedClass);
  }
  h1.classList.toogle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);
