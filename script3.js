const changetheme = document.querySelector(".changetheme")
const wrapper = document.querySelector(".wrapper")
const pagename = document.querySelectorAll(".pagename")
const changelanguage = document.querySelector(".changelanguage")

changetheme.addEventListener("click", function(){
    document.body.classList.toggle("lightbody")
    wrapper.classList.toggle("lightwrapper")
    pagename.forEach(el => el.classList.toggle("lightpagename"))
    changelanguage.classList.toggle("lightchangelanguage")
})

let firstsurvey = document.querySelector(".surveytitle1").textContent
let secondsurvey = document.querySelector(".surveytitle2").textContent
let thirdsurvey = document.querySelector(".surveytitle3").textContent
let fourthsurvey = document.querySelector(".surveytitle4").textContent
let fifthsurvey = document.querySelector(".surveytitle5").textContent
let sixthsurvey = document.querySelector(".surveytitle6").textContent


const survey1 = document.querySelector(".survey1")
const survey2 = document.querySelector(".survey2")
const survey3 = document.querySelector(".survey3")
const survey4 = document.querySelector(".survey4")
const survey5 = document.querySelector(".survey5")
const survey6 = document.querySelector(".survey6")

const results1 = document.querySelector("#results1")
const results2 = document.querySelector("#results2")
const results3 = document.querySelector("#results3")
const results4 = document.querySelector("#results4")
const results5 = document.querySelector("#results5")
const results6 = document.querySelector("#results6")

let counts1 = JSON.parse(localStorage.getItem("gendercounts")) || {
    "male": 0,
    "female": 0,
}
let counts2 = JSON.parse(localStorage.getItem("screentimecounts")) || {
    "onetwohour": 0,
    "threefivehour": 0,
    "sixeighthour": 0,
}
let counts3 = JSON.parse(localStorage.getItem("ekocounts")) || {
    "veryimportant": 0,
    "important": 0,
    "neutral": 0,
    "lessimportant": 0,
    "notimportant": 0,
}
let counts4 = JSON.parse(localStorage.getItem("mediacounts")) || {
    "totallyagree": 0,
    "agree": 0,
    "neutral": 0,
    "disagree": 0,
    "totallydisagree": 0,
}
let counts5 = JSON.parse(localStorage.getItem("practicecounts")) || {
    "absolutelyyes": 0,
    "mostlyyes": 0,
    "neutral": 0,
    "mostlyno": 0,
    "absolutelyno": 0,
}
let counts6 = JSON.parse(localStorage.getItem("freetimecounts")) || {
    "sport": 0,
    "reading": 0,
    "videogames": 0,
    "films": 0,
    "friends": 0,
}

function displayResults1(){
    results1.innerHTML = ""
    for(let key in counts1) {
        let li = document.createElement("li")
            li.textContent = `${counts1[key]}`
        results1.appendChild(li)
    }
}
displayResults1()
function displayResults2(){
    results2.innerHTML = ""
    for(let key in counts2) {
        let li = document.createElement("li")
            li.textContent = `${counts2[key]}`
        results2.appendChild(li)
    }
}
displayResults2()
function displayResults3(){
    results3.innerHTML = ""
    for(let key in counts3) {
        let li = document.createElement("li")
            li.textContent = `${counts3[key]}`
        results3.appendChild(li)
    }
}
displayResults3()
function displayResults4(){
    results4.innerHTML = ""
    for(let key in counts4) {
        let li = document.createElement("li")
            li.textContent = `${counts4[key]}`
        results4.appendChild(li)
    }
}
displayResults4()
function displayResults5(){
    results5.innerHTML = ""
    for(let key in counts5) {
        let li = document.createElement("li")
            li.textContent = `${counts5[key]}`
        results5.appendChild(li)
    }
}
displayResults5()
function displayResults6(){
    results6.innerHTML = ""
    for(let key in counts6) {
        let li = document.createElement("li")
            li.textContent = `${counts6[key]}`
        results6.appendChild(li)
    }
}
displayResults6()

survey1.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='gender']:checked").value
    counts1[choice]++
    localStorage.setItem("gendercounts", JSON.stringify(counts1))

    displayResults1()


})
survey2.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='screentime']:checked").value
    counts2[choice]++
    localStorage.setItem("screentimecounts", JSON.stringify(counts2))

    displayResults2()

})
survey3.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='eko']:checked").value
    counts3[choice]++
    localStorage.setItem("ekocounts", JSON.stringify(counts3))

    displayResults3()

})
survey4.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='media']:checked").value
    counts4[choice]++
    localStorage.setItem("mediacounts", JSON.stringify(counts4))

    displayResults4()

})
survey5.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='practice']:checked").value
    counts5[choice]++
    localStorage.setItem("practicecounts", JSON.stringify(counts5))

    displayResults5()

})
survey6.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='freetime']:checked").value
    counts6[choice]++
    localStorage.setItem("freetimecounts", JSON.stringify(counts6))

    displayResults6()

})

const newspage = document.querySelector(".newspage")
const surveyspage = document.querySelector(".surveyspage")
const nav = document.querySelector(".nav")
const surveytitle1 = document.querySelector(".surveytitle1")
const surveytitle2 = document.querySelector(".surveytitle2")
const surveytitle3 = document.querySelector(".surveytitle3")
const surveytitle4 = document.querySelector(".surveytitle4")
const surveytitle5 = document.querySelector(".surveytitle5")
const surveytitle6 = document.querySelector(".surveytitle6")
const surveyquestion1 = document.querySelector(".surveyquestion1")
const surveyquestion2 = document.querySelector(".surveyquestion2")
const surveyquestion3 = document.querySelector(".surveyquestion3")
const surveyquestion4 = document.querySelector(".surveyquestion4")
const surveyquestion5 = document.querySelector(".surveyquestion5")
const surveyquestion6 = document.querySelector(".surveyquestion6")
const male = document.querySelector(".male")
const female = document.querySelector(".female")
const onetwohour = document.querySelector(".onetwohour")
const threefivehour = document.querySelector(".threefivehour")
const sixeighthour = document.querySelector(".sixeighthour")
const veryimportant = document.querySelector(".veryimportant")
const important = document.querySelector(".important")
const neutral1 = document.querySelector(".neutral1")
const lessimportant = document.querySelector(".lessimportant")
const notimportant = document.querySelector(".notimportant")
const totallyagree = document.querySelector(".totallyagree")
const agree = document.querySelector(".agree")
const neutral2 = document.querySelector(".neutral2")
const disagree = document.querySelector(".disagree")
const totallydisagree = document.querySelector(".totallydisagree")
const absolutelyyes = document.querySelector(".absolutelyyes")
const mostlyyes = document.querySelector(".mostlyyes")
const neutral3 = document.querySelector(".neutral3")
const mostlyno = document.querySelector(".mostlyno")
const absolutelyno = document.querySelector(".absolutelyno")
const sport = document.querySelector(".sport")
const reading = document.querySelector(".reading")
const videogames = document.querySelector(".videogames")
const films = document.querySelector(".films")
const friends = document.querySelector(".friends")
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const button4 = document.querySelector(".button4")
const button5 = document.querySelector(".button5")
const button6 = document.querySelector(".button6")


changelanguage.addEventListener("click", function(){
    nav.classList.toggle("navenglish")
    function displayResults1(){
    results1.innerHTML = ""
    for(let key in counts1) {
        let li = document.createElement("li")
        li.textContent = `${counts1[key]} Votes`
        results1.appendChild(li)
    }
}

    if(changelanguage.textContent === "EN"){
        changelanguage.textContent = "DEU"
        newspage.textContent = "News"
        surveyspage.textContent = "Surveys"

        let firstsurvey = "About you"
        let secondsurvey = "Screen time"
        let thirdsurvey = "Environmental and climate protection"
        let fourthsurvey = "Social media"
        let fifthsurvey = "School/work"
        let sixthsurvey = "Free time activities"

        let surveyslist = document.querySelector(".surveyslist")
        surveyslist.innerHTML = `${firstsurvey} <br> ${secondsurvey} <br> ${thirdsurvey} <br>
        ${fourthsurvey} <br> ${fifthsurvey} <br> ${sixthsurvey} <br>`

        surveytitle1.textContent = "About you"
        surveytitle2.textContent = "Screen time"
        surveytitle3.innerHTML = "Environmental and <br> climate protection"
        surveytitle4.textContent = "Social media"
        surveytitle5.textContent = "School/work"
        surveytitle6.textContent = "Free time activities"

        surveyquestion1.textContent = "Your gender:"
        surveyquestion2.textContent = "How much time do you spend on gadgets?"
        surveyquestion3.textContent = "How important is environmental and climate protection to you?"
        surveyquestion4.textContent = 'Do you agree with the statement: "Social media strongly influences our everyday lives"?'
        surveyquestion5.textContent = "Do you think that school/work prepares you enough for practical skills?"
        surveyquestion6.textContent = "What free time activity do you prefer?"

        male.innerHTML = '<input type="radio" name="gender" value="male">male'
        female.innerHTML = '<input type="radio" name="gender" value="female">female'
        onetwohour.innerHTML = '<input type="radio" name="screentime" value="onetwohour">1-2 hours'
        threefivehour.innerHTML = '<input type="radio" name="screentime" value="threefivehour">3-5 hours'
        sixeighthour.innerHTML = '<input type="radio" name="screentime" value="sixeighthour">6-8 hours'
        veryimportant.innerHTML = '<input type="radio" name="eko" value="veryimportant">very important'
        important.innerHTML = '<input type="radio" name="eko" value="important">important'
        neutral1.innerHTML = '<input type="radio" name="eko" value="neutral">neutral'
        lessimportant.innerHTML = '<input type="radio" name="eko" value="lessimportant">less important'
        notimportant.innerHTML = '<input type="radio" name="eko" value="notimportant">not important'
        totallyagree.innerHTML = '<input type="radio" name="media" value="totallyagree">totally agree'
        agree.innerHTML = '<input type="radio" name="media" value="agree">agree'
        neutral2.innerHTML = '<input type="radio" name="media" value="neutral">neutral'
        disagree.innerHTML = '<input type="radio" name="media" value="disagree">disagree'
        totallydisagree.innerHTML = '<input type="radio" name="media" value="totallydisagree">totally disagree'
        absolutelyyes.innerHTML = '<input type="radio" name="practice" value="absolutelyyes">absolutely yes'
        mostlyyes.innerHTML = '<input type="radio" name="practice" value="mostlyyes">mostly yes'
        neutral3.innerHTML = '<input type="radio" name="practice" value="neutral">neutral'
        mostlyno.innerHTML = '<input type="radio" name="practice" value="mostlyno">mostly no'
        absolutelyno.innerHTML = '<input type="radio" name="practice" value="absolutelyno">absolutely no'
        sport.innerHTML = '<input type="radio" name="freetime" value="sport">sport'
        reading.innerHTML = '<input type="radio" name="freetime" value="reading">reading'
        videogames.innerHTML = '<input type="radio" name="freetime" value="videogames">videogames'
        films.innerHTML = '<input type="radio" name="freetime" value="films">watching films'
        friends.innerHTML = '<input type="radio" name="freetime" value="friends">meeting friends'

        button1.textContent = "Submit"
        button2.textContent = "Submit"
        button3.textContent = "Submit"
        button4.textContent = "Submit"
        button5.textContent = "Submit"
        button6.textContent = "Submit"

function displayResults1(){
    results1.innerHTML = ""
    for(let key in counts1) {
        let li = document.createElement("li")
        li.textContent = `${counts1[key]} Votes`
        results1.appendChild(li)
    }
}
displayResults1()
function displayResults2(){
    results2.innerHTML = ""
    for(let key in counts2) {
        let li = document.createElement("li")
        li.textContent = `${counts2[key]} Votes`
        results2.appendChild(li)
    }
}
displayResults2()
function displayResults3(){
    results3.innerHTML = ""
    for(let key in counts3) {
        let li = document.createElement("li")
        li.textContent = `${counts3[key]} Votes`
        results3.appendChild(li)
    }
}
displayResults3()
function displayResults4(){
    results4.innerHTML = ""
    for(let key in counts4) {
        let li = document.createElement("li")
        li.textContent = `${counts4[key]} Votes`
        results4.appendChild(li)
    }
}
displayResults4()
function displayResults5(){
    results5.innerHTML = ""
    for(let key in counts5) {
        let li = document.createElement("li")
        li.textContent = `${counts5[key]} Votes`
        results5.appendChild(li)
    }
}
displayResults5()
function displayResults6(){
    results6.innerHTML = ""
    for(let key in counts6) {
        let li = document.createElement("li")
        li.textContent = `${counts6[key]} Votes`
        results6.appendChild(li)
}
} 
displayResults6() 



    } else {
        changelanguage.textContent ="EN"
        newspage.textContent = "Ankündigungen"
        surveyspage.textContent = "Umfragen"

        let firstsurvey = document.querySelector(".surveytitle1").textContent
        let secondsurvey = document.querySelector(".surveytitle2").textContent
        let thirdsurvey = document.querySelector(".surveytitle3").textContent
        let fourthsurvey = document.querySelector(".surveytitle4").textContent
        let fifthsurvey = document.querySelector(".surveytitle5").textContent
        let sixthsurvey = document.querySelector(".surveytitle6").textContent

        surveytitle1.textContent = "Über Sie"
        surveytitle2.textContent = "Bildschirmzeit"
        surveytitle3.innerHTML = "Umwelt- und <br> Klimaschutz"
        surveytitle4.textContent = "Social Media"
        surveytitle5.textContent = "Schule/Arbeit"
        surveytitle6.textContent = "Freizeitaktivität"

        surveyquestion1.textContent = "Ihr Geschlecht:"
        surveyquestion2.textContent = "Wie viel Zeit verbringst du in Gadgets?"
        surveyquestion3.textContent = "Wie wichtig ist dir Umwelt- und Klimaschutz?"
        surveyquestion4.textContent = 'Stimmst du der Aussage zu: "Social Media beeinflusst unseren Alltag stark"?'
        surveyquestion5.textContent = "Meinst du, dass Schule/Arbeit genug auf praktische Fähigkeiten vorbereitet?"
        surveyquestion6.textContent = "Welche Freizeitaktivität bevorzugst du?"

        let surveyslist = document.querySelector(".surveyslist")
        surveyslist.innerHTML = `${firstsurvey} <br> ${secondsurvey} <br> ${thirdsurvey} <br>
        ${fourthsurvey} <br> ${fifthsurvey} <br> ${sixthsurvey} <br>`

        male.innerHTML = '<input type="radio" name="gender" value="male">männlich'
        female.innerHTML = '<input type="radio" name="gender" value="female">weiblich'
        onetwohour.innerHTML = '<input type="radio" name="screentime" value="onetwohour">1-2 Stunden'
        threefivehour.innerHTML = '<input type="radio" name="screentime" value="threefivehour">3-5 Stunden'
        sixeighthour.innerHTML = '<input type="radio" name="screentime" value="sixeighthour">6-8 Stunden'
        veryimportant.innerHTML = '<input type="radio" name="eko" value="veryimportant">Sehr wichtig'
        important.innerHTML = '<input type="radio" name="eko" value="important">Wichtig'
        neutral1.innerHTML = '<input type="radio" name="eko" value="neutral">Neutral'
        lessimportant.innerHTML = '<input type="radio" name="eko" value="lessimportant">Weniger wichtig'
        notimportant.innerHTML = '<input type="radio" name="eko" value="notimportant">Überhaupt nicht wichtig'
        totallyagree.innerHTML = '<input type="radio" name="media" value="totallyagree">Stimme voll zu'
        agree.innerHTML = '<input type="radio" name="media" value="agree">Stimme zu'
        neutral2.innerHTML = '<input type="radio" name="media" value="neutral">Neutral'
        disagree.innerHTML = '<input type="radio" name="media" value="disagree">Stimme nicht zu'
        totallydisagree.innerHTML = '<input type="radio" name="media" value="totallydisagree">Stimme überhaupt nicht zu'
        absolutelyyes.innerHTML = '<input type="radio" name="practice" value="absolutelyyes">Ja, absolut'
        mostlyyes.innerHTML = '<input type="radio" name="practice" value="mostlyyes">Meistens ja'
        neutral3.innerHTML = '<input type="radio" name="practice" value="neutral">Neutral'
        mostlyno.innerHTML = '<input type="radio" name="practice" value="mostlyno">Meistens nein'
        absolutelyno.innerHTML = '<input type="radio" name="practice" value="absolutelyno">Nein, überhaupt nicht'
        sport.innerHTML = '<input type="radio" name="freetime" value="sport">Sport treiben'
        reading.innerHTML = '<input type="radio" name="freetime" value="reading">Lesen'
        videogames.innerHTML = '<input type="radio" name="freetime" value="videogames">Videospiele'
        films.innerHTML = '<input type="radio" name="freetime" value="films">Filme anschauen'
        friends.innerHTML = '<input type="radio" name="freetime" value="friends">Freunde treffen'

        button1.textContent = "Abstimmen"
        button2.textContent = "Abstimmen"
        button3.textContent = "Abstimmen"
        button4.textContent = "Abstimmen"
        button5.textContent = "Abstimmen"
        button6.textContent = "Abstimmen"

        function displayResults1(){
    results1.innerHTML = ""
    for(let key in counts1) {
        let li = document.createElement("li")
        li.textContent = `${counts1[key]} Stimmen`
        results1.appendChild(li)
    }
}
displayResults1()
function displayResults2(){
    results2.innerHTML = ""
    for(let key in counts2) {
        let li = document.createElement("li")
        li.textContent = `${counts2[key]} Stimmen`
        results2.appendChild(li)
    }
}
displayResults2()
function displayResults3(){
    results3.innerHTML = ""
    for(let key in counts3) {
        let li = document.createElement("li")
        li.textContent = `${counts3[key]} Stimmen`
        results3.appendChild(li)
    }
}
displayResults3()
function displayResults4(){
    results4.innerHTML = ""
    for(let key in counts4) {
        let li = document.createElement("li")
        li.textContent = `${counts4[key]} Stimmen`
        results4.appendChild(li)
    }
}
displayResults4()
function displayResults5(){
    results5.innerHTML = ""
    for(let key in counts5) {
        let li = document.createElement("li")
        li.textContent = `${counts5[key]} Stimmen`
        results5.appendChild(li)
    }
}
displayResults5()
function displayResults6(){
    results6.innerHTML = ""
    for(let key in counts6) {
        let li = document.createElement("li")
        li.textContent = `${counts6[key]} Stimmen`
        results6.appendChild(li)
}
} 
displayResults6() 

    }
})

const form = document.querySelector(".createsurveywindow")
const createsurveytitle = document.querySelector("#createsurveytitle") 
const createsurveyquestion = document.querySelector("#createsurveyquestion")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const option5 = document.querySelector("#option5")
const allsurveys = document.querySelector(".allsurveys")

let savedsurveys = JSON.parse(localStorage.getItem("surveys")) || []

function renderSurveys() {
    savedsurveys.forEach(item => {
        allsurveys.innerHTML += `<div class="survey">
    <h2 class="surveytitle">${item.title}</h2>
    <h2 class="surveyquestion">${item.question}</h2>
    ${item.option1 ? `<label><input type="radio" name="${item.title}">${item.option1}</label>` : ""}
    ${item.option2 ? `<label><input type="radio" name="${item.title}">${item.option2}</label>` : ""}
    ${item.option3 ? `<label><input type="radio" name="${item.title}">${item.option3}</label>` : ""}
    ${item.option4 ? `<label><input type="radio" name="${item.title}">${item.option4}</label>` : ""}
    ${item.option5 ? `<label><input type="radio" name="${item.title}">${item.option5}</label>` : ""}
    <button class="button6" type="submit">Abstimmen</button>
</div>`      
    })    
}

renderSurveys()

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const newitem = {
        title: createsurveytitle.value,
        question: createsurveyquestion.value,
        option1 : option1.value,
        option2 : option2.value,
        option3 : option3.value,
        option4 : option4.value,
        option5 : option5.value,
    }

    savedsurveys.push(newitem)

    localStorage.setItem("surveys", JSON.stringify(savedsurveys))


    renderSurveys()

    form.reset()
})

const createsurvey = document.querySelector(".createsurvey")
const createsurveywindow = document.querySelector(".createsurveywindow")

createsurvey.addEventListener("click", function(){
    createsurveywindow.classList.toggle("hidden")
})