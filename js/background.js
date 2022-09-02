const images = ["4.jpg", "5.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement: JS -> HTML
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

bgImage.id = "bgImage";
