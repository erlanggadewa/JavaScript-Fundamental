let x = document.querySelectorAll(".answerlist2 input");
var index = 0;
for (let value of x) {
  if (index % 4 == 0) value.setAttribute("checked", "");
  index++;
}

// Alternative

let x = document.querySelectorAll(".answerlist2");
for (let value of x) {
  if (value.nextSibling.innerHTML == "Sangat puas") 
    value.querySelector("input").setAttribute("checked", "");
}

// udemy all checklist
let x = document.querySelectorAll("input.ud-sr-only.ud-real-toggle-input")
for(let val of x){
    val.click()
}
