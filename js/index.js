const body = document.querySelector("body");
console.log(body);

const container = document.createElement("h1");
//container.style.color = `hsl(${count} 80% 40%)`;
container.innerText = "frank";
container.classList.add("animation");
//container.style.color = "hsl(200, 100%, 50%)";
console.log(container);
body.append(container);
