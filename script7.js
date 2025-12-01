

let counts4 = JSON.parse(localStorage.getItem("mediacounts")) || {
    "totallyagree": 0,
    "agree": 0,
    "neutral": 0,
    "disagree": 0,
    "totallydisagree": 0,
}

const graphics = {
    "totallyagree": document.querySelector(".graphic1"),
    "agree": document.querySelector(".graphic2"),
    "neutral": document.querySelector(".graphic3"),
    "disagree": document.querySelector(".graphic4"),
    "totallydisagree": document.querySelector(".graphic5"),
}


document.addEventListener("DOMContentLoaded", function() {
  for(let key in counts4)
  graphics[key].style.setProperty("height", counts4[key] + "0vw")  
})
