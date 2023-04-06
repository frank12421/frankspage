const body = document.querySelector("body");
// console.log(body);

const myName = "frank";

const container = document.createElement("h1");
//container.style.color = `hsl(${count} 80% 40%)`;
//container.innerText = "frank";
container.classList.add("animation");
// console.log(container);
//disintegratName(myName);
container.append(disintegratName(myName));
body.append(container);

function disintegratName(myName) {
  const nameLength = myName.length;
  const container = document.createElement("div");
  container.classList.add("container__characters");
  container.setAttribute("data-js", "containerCharacters");
  //  console.log(nameLength);
  for (i = 0; i < myName.length; i++) {
    // console.log(myName.at(i));
    const myLetter = myName.at(i);
    const myElement = document.createElement("div" + i);
    myElement.innerText = myLetter;
    myElement.classList.add("single__letter");
    myElement.addEventListener("mouseover", (event) => {
      console.log(`Over: ${myLetter}`);
    });
    myElement.addEventListener("click", (event) => {
      console.log(`click: ${myLetter}`);
      letterClick_NewSort();
    });
    console.log(myElement);
    container.append(myElement);
  }
  return container;
}

function letterClick_NewSort() {
  const myDiv = document.querySelector(`[data-js="containerCharacters"]`);
  console.log.apply(myDiv);
}
