const body = document.querySelector("body");
const myName = "frank";
const container = document.createElement("h1");
container.classList.add("animation");
container.append(disintegratName(myName));
body.append(container);

function disintegratName(myName) {
  const nameLength = myName.length;
  const myArray = myName.split("");
  // console.log(myArray);
  const container = document.createElement("div");
  container.classList.add("container__characters");
  container.setAttribute("data-js", "containerCharacters");
  myArray.forEach((element, index) => {
    // console.log(index);
    container.append(styleCharacter(element, index));
  });
  return container;
}

function styleCharacter(value, index) {
  const myElement = document.createElement("div");
  myElement.innerText = value;
  myElement.classList.add("single__letter");
  myElement.id = index;
  // myElement.addEventListener("mouseover", (event) => {});
  myElement.addEventListener("click", (event) => {
    clickCharacter(index);
  });
  return myElement;
}

function clickCharacter(index) {
  const resetFirstElement = document.getElementsByClassName(
    "single__letter__first"
  );
  if (resetFirstElement.length > 0) {
    // console.log(resetFirstElement[0]);
    resetFirstElement[0].classList.remove("single__letter__first");
  }
  const setFirstElement = document.getElementById(index);
  setFirstElement.classList.add("single__letter__first");
}
