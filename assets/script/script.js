const counter1 = document.querySelector("#counter1");
const container = document.createElement("div");
const counter = document.createElement("div");
const count = document.createElement("p");
const buttons = document.createElement("div");
const add = document.createElement("button");
const sub = document.createElement("button");
const reset = document.createElement("button");

count.textContent = "0";
add.textContent = "+";
sub.textContent = "-";
reset.textContent = "reset";

counter1.appendChild(container);
container.appendChild(counter);

counter.appendChild(count);
counter.appendChild(buttons);

buttons.append(add, reset, sub);

//Add css style:
container.setAttribute("class", "container");
counter.setAttribute("class", "counter");
buttons.setAttribute("class", "buttons");

//Css style for buttons:

//Add:
add.setAttribute("class", "counter", "buttons");
add.style.background = "green";
add.style.color = "#fff";

//Reset:
reset.setAttribute("class", "counter", "buttons");

//Sub:
sub.setAttribute("class", "counter", "buttons");
sub.style.background = "red";
sub.style.color = "#fff";

//Function to increase the number
add.addEventListener("click", () => {
  count.innerHTML++;
  applyColor();
});

//Function to descrese the number
sub.addEventListener("click", () => {
  count.innerHTML--;
  applyColor();
});

//Function to reset to 0 the number
reset.addEventListener("click", () => {
  count.innerHTML = 0;
  applyColor();
});

/* The function that changes the color of the number 
based on whether we are above or below 0
When we are above to zero became green
When we are below to zero became red
When we are to zero became black*/
function applyColor() {
  if (count.innerHTML > 0) {
    count.style.color = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "black";
  }
}
