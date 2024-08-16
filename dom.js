const populateTextToScreen = () => {
  const screen = document.querySelector(".screen");
  const text =
    "This was created by a function in the dom.js file => then an ONCLICK attribute links this function to the button HTML element you've just pressed. => THAT'S DOM MANIPULATION!";
  screen.innerHTML = text;
};

const launchPrompt = () => {
  const dynamicText = prompt("Enter something:");
  const screen = document.querySelector(".screen");
  screen.innerHTML = dynamicText;
};

const launchAlert = () => {
  const text =
    "This is a function that allows you to launch an alert to the user.";
  alert(text);
};

const addPic = () => {
  const screen = document.querySelector(".screen");
  const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/I_Love_New_York.svg/1101px-I_Love_New_York.svg.png";
  const picture = document.createElement("img");
  picture.setAttribute("src", imgUrl);
  picture.setAttribute("class", "nyPic");
  screen.append(picture);
};

const changeColor = (color) => {
  document.body.style.backgroundColor = color;
};

const addhtml = () => {
  const title = document.querySelector(".title");
  title.innerHTML = "This has Changed..Boooyyah!!!";
};

const toggleItem = () => {
  const box = document.querySelector(".box");
  box.classList.toggle("circle");
  box.innerHTML = "Welcome to the Matrix";
};

const createVadim = () => {
  const vadim = document.createElement("div");
  vadim.setAttribute("class", "vadim2");
  const box = document.querySelector(".box");
  box.prepend(vadim);
};

const createVadim2 = () => {
  const vadim = document.createElement("img");
  vadim.setAttribute(
    "src",
    "https://media1.giphy.com/media/NUBp5KcV0PJBe/200.gif?cid=790b7611ijd36q1au2gxai8pk8inuhft0ynpjieve11w3jkn&ep=v1_gifs_search&rid=200.gif&ct=g"
  );
  const box = document.querySelector(".box");
  box.append(vadim);
};

const findInputs = () => {
  const inputs = document.getElementsByTagName("input");
  for (const input of inputs) {
    console.log(input.value);
  }
};

const append_is = () => {
  const box = document.querySelector(".box");
  box.append("downHere");
};

const prepend_is = () => {
  const box = document.querySelector(".box");
  box.prepend("upHere");
};

const useToggleFeature = () => {
  const greenBox = document.querySelector(".jordanEx");
  greenBox.classList.toggle("anti-jordan");
};
