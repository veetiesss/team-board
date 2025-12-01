

let counts3 = JSON.parse(localStorage.getItem("ekocounts")) || {
    "veryimportant": 0,
    "important": 0,
    "neutral": 0,
    "lessimportant": 0,
    "notimportant": 0,
}

const graphics = {
    "veryimportant": document.querySelector(".graphic1"),
    "important": document.querySelector(".graphic2"),
    "neutral": document.querySelector(".graphic3"),
    "lessimportant": document.querySelector(".graphic4"),
    "notimportant": document.querySelector(".graphic5"),
}


document.addEventListener("DOMContentLoaded", function() {
  for(let key in counts3){
  graphics[key].style.setProperty("height", counts3[key] + "0vw") 
  } 
})
