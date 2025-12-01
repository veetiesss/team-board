

let counts1 = JSON.parse(localStorage.getItem("gendercounts")) || {
    "male": 0,
    "female": 0,
}

const graphics = {
    "male": document.querySelector(".graphic1"),
    "female": document.querySelector(".graphic2")
}


document.addEventListener("DOMContentLoaded", function() {
  for(let key in counts1)
  graphics[key].style.setProperty("height", counts1[key] + "0vw")  
})
