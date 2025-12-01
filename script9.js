

let counts6 = JSON.parse(localStorage.getItem("freetimecounts")) || {
    "sport": 0,
    "reading": 0,
    "videogames": 0,
    "films": 0,
    "friends": 0,
}

const graphics = {
    "sport": document.querySelector(".graphic1"),
    "reading": document.querySelector(".graphic2"),
    "videogames": document.querySelector(".graphic3"),
    "films": document.querySelector(".graphic4"),
    "friends": document.querySelector(".graphic5"),
}


document.addEventListener("DOMContentLoaded", function() {
  for(let key in counts6)
  graphics[key].style.setProperty("height", counts6[key] + "0vw")  
})
