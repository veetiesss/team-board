

let counts5 = JSON.parse(localStorage.getItem("practicecounts")) || {
    "absolutelyyes": 0,
    "mostlyyes": 0,
    "neutral": 0,
    "mostlyno": 0,
    "absolutelyno": 0,
}
const graphics = {
    "absolutelyyes": document.querySelector(".graphic1"),
    "mostlyyes": document.querySelector(".graphic2"),
    "neutral": document.querySelector(".graphic3"),
    "mostlyno": document.querySelector(".graphic4"),
    "absolutelyno": document.querySelector(".graphic5"),
}


document.addEventListener("DOMContentLoaded", function() {
  for(let key in counts5)
  graphics[key].style.setProperty("height", counts5[key] + "0vw")  
})
