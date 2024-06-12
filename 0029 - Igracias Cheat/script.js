let x = document.querySelectorAll(".answerlist2 input");
var index = 0;
for (let value of x) {
  if (index % 4 == 0) value.setAttribute("checked", "");
  index++;
}

// Alternative

let x = document.querySelectorAll(".answerlist2");
let textArea = document.querySelectorAll("textarea");
let save = document.querySelector("input.floatL3");
for (const value of textArea) {
  value.value = "Baik";
}
for (let value of x) {
  if (value.nextSibling.innerHTML == "Sangat puas")
    value.querySelector("input").setAttribute("checked", "");
  if (value.nextSibling.innerHTML == "Ya")
    value.querySelector("input").setAttribute("checked", "");
  if (value.nextSibling.innerHTML == "Sangat setuju")
    value.querySelector("input").setAttribute("checked", "");
}
save.click();

// udemy all checklist
let y = document.querySelectorAll("div.ud-btn.ud-btn-large.ud-btn-link.ud-heading-md.ud-accordion-panel-toggler")
for (let val of y) {
  val.click()
}

let x = document.querySelectorAll("input.ud-sr-only.ud-real-toggle-input")
for (let val of x) {
  val.click()
}
