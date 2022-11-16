const count = document.getElementById("count");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const reset = document.getElementById("reset");

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
