const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/donkey-kong.png") {
    myImage.setAttribute("src", "images/donkey-kong-2.png");
  } else {
    myImage.setAttribute("src", "images/donkey-kong.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        myHeading.textContent = `Donkey Kong is cool!`;
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Donkey Kong is cool, ${myName}!`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Donkey Kong is cool, ${storedName}!`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };