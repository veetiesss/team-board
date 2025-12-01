

let counts2 = JSON.parse(localStorage.getItem("screentimecounts")) || {
    "onetwohour": 0,
    "threefivehour": 0,
    "sixeighthour": 0,
}

const graphics = {
    "onetwohour": document.querySelector(".graphic1"),
    "threefivehour": document.querySelector(".graphic2"),
    "sixeighthour": document.querySelector(".graphic3")
}


document.addEventListener("DOMContentLoaded", function() {
  for(let key in counts2)
  graphics[key].style.setProperty("height", counts2[key] + "0vw")  
})
