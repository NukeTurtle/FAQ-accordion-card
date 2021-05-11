const x = document.getElementsByClassName("question");
const arrow = document.getElementsByClassName("arrow");
let i;
for (i = 0; i < x.length; i++) {
x[i].addEventListener("click", function () {
  this.classList.toggle("active");
  var answer = this.nextElementSibling;
  if (answer.style.display === "block") {
  answer.style.display = "none";
  } else {
  answer.style.display = "block";
  }
  });
}
