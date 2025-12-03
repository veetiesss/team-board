// =================================================================
// 🚀 НАСТРОЙКИ API (Адрес должен соответствовать вашему бэкенду)
// =================================================================
const API_URL_SURVEYS = 'http://localhost:3000/api/surveys'; 

// ⚠️ ВАЖНО: ЗАМЕНИТЕ ЭТИ ЗАПОЛНИТЕЛИ НА ФАКТИЧЕСКИЕ ID ИЗ ВАШЕЙ БАЗЫ ДАННЫХ!
const STATIC_SURVEY_ID_1 = 'STATIC_SURVEY_ID_1'; // Опрос 1: Пол
const STATIC_SURVEY_ID_2 = 'STATIC_SURVEY_ID_2'; // Опрос 2: Время перед экраном
const STATIC_SURVEY_ID_3 = 'STATIC_SURVEY_ID_3'; // Опрос 3: Экология
const STATIC_SURVEY_ID_4 = 'STATIC_SURVEY_ID_4'; // Опрос 4: Социальные сети
const STATIC_SURVEY_ID_5 = 'STATIC_SURVEY_ID_5'; // Опрос 5: Школа/Работа
const STATIC_SURVEY_ID_6 = 'STATIC_SURVEY_ID_6'; // Опрос 6: Свободное время

// =================================================================
// 🎨 ЛОГИКА ТЕМЫ И ЯЗЫКА (ВАШ СУЩЕСТВУЮЩИЙ КОД)
// =================================================================
const changetheme = document.querySelector(".changetheme");
const wrapper = document.querySelector(".wrapper");
const pagename = document.querySelectorAll(".pagename");
const changelanguage = document.querySelector(".changelanguage");

changetheme.addEventListener("click", function() {
    document.body.classList.toggle("lightbody");
    wrapper.classList.toggle("lightwrapper");
    pagename.forEach(el => el.classList.toggle("lightpagename"));
    changelanguage.classList.toggle("lightchangelanguage");
    
    // Переключение темы для кнопок
    document.querySelectorAll(".survey button").forEach(el => el.classList.toggle("lightsurveybutton"));
});

// =================================================================
// 📊 СТАТИЧЕСКИЕ ЭЛЕМЕНТЫ (ВАШ СУЩЕСТВУЮЩИЙ КОД - ПЕРЕМЕННЫЕ)
// =================================================================
let firstsurvey = document.querySelector(".surveytitle1") ? document.querySelector(".surveytitle1").textContent : '';
let secondsurvey = document.querySelector(".surveytitle2") ? document.querySelector(".surveytitle2").textContent : '';
let thirdsurvey = document.querySelector(".surveytitle3") ? document.querySelector(".surveytitle3").textContent : '';
let fourthsurvey = document.querySelector(".surveytitle4") ? document.querySelector(".surveytitle4").textContent : '';
let fifthsurvey = document.querySelector(".surveytitle5") ? document.querySelector(".surveytitle5").textContent : '';
let sixthsurvey = document.querySelector(".surveytitle6") ? document.querySelector(".surveytitle6").textContent : '';


const survey1 = document.querySelector(".survey1");
const survey2 = document.querySelector(".survey2");
const survey3 = document.querySelector(".survey3");
const survey4 = document.querySelector(".survey4");
const survey5 = document.querySelector(".survey5");
const survey6 = document.querySelector(".survey6");

const results1 = document.querySelector("#results1");
const results2 = document.querySelector("#results2");
const results3 = document.querySelector("#results3");
const results4 = document.querySelector("#results4");
const results5 = document.querySelector("#results5");
const results6 = document.querySelector("#results6");

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");

const surveybuttons = document.querySelectorAll(".survey button");
changetheme.addEventListener("click", function(){
    surveybuttons.forEach(el => el.classList.toggle("lightsurveybutton"));
});

// =================================================================
// 🆕 ЛОГИКА ГОЛОСОВАНИЯ: СТАТИЧЕСКИЕ ОПРОСЫ (ЧЕРЕЗ API)
// =================================================================

/**
 * Универсальный обработчик для отправки голоса статического опроса на API.
 * @param {Event} event - Событие отправки формы.
 * @param {string} surveyId - ID опроса в MongoDB.
 * @param {string} radioGroupName - Атрибут 'name' для радиокнопок.
 */
async function handleStaticVoteSubmit(event, surveyId, radioGroupName) {
    event.preventDefault();
    
    const formEl = event.target;
    
    // Находим выбранную радиокнопку по ее 'name'
    const selectedOption = formEl.querySelector(`input[name="${radioGroupName}"]:checked`);
    
    if (!selectedOption) {
        alert('Пожалуйста, выберите вариант ответа.');
        return;
    }
    
    // Значение - это ключ опции: 'male', 'onetwohour', 'veryimportant' и т.д.
    const optionKey = selectedOption.value; 
    
    try {
        const response = await fetch(`${API_URL_SURVEYS}/static/${surveyId}/vote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ option: optionKey }),
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP при голосовании: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json(); 
        console.log(`Голос для опроса ${surveyId} успешно отправлен:`, data);
        
        alert('Ваш голос учтен!');
        
        // Отключаем форму после голосования
        formEl.querySelectorAll('input, button').forEach(el => el.disabled = true);
        
    } catch (error) {
        console.error('Ошибка голосования статического опроса:', error);
        alert('Не удалось отправить голос. Проверьте соединение с сервером и корректность ID опросов.');
    }
}

// -----------------------------------------------------------------
// ПОДКЛЮЧЕНИЕ ОБРАБОТЧИКОВ СТАТИЧЕСКИХ ОПРОСОВ К ФОРМАМ
// -----------------------------------------------------------------
// (Предполагается, что статические опросы - это формы с классом .vote-form-static)
if (survey1) {
    survey1.querySelector('form').addEventListener('submit', (e) => handleStaticVoteSubmit(e, STATIC_SURVEY_ID_1, 'gender'));
}
if (survey2) {
    survey2.querySelector('form').addEventListener('submit', (e) => handleStaticVoteSubmit(e, STATIC_SURVEY_ID_2, 'screentime'));
}
if (survey3) {
    survey3.querySelector('form').addEventListener('submit', (e) => handleStaticVoteSubmit(e, STATIC_SURVEY_ID_3, 'eko'));
}
if (survey4) {
    survey4.querySelector('form').addEventListener('submit', (e) => handleStaticVoteSubmit(e, STATIC_SURVEY_ID_4, 'media'));
}
if (survey5) {
    survey5.querySelector('form').addEventListener('submit', (e) => handleStaticVoteSubmit(e, STATIC_SURVEY_ID_5, 'practice'));
}
if (survey6) {
    survey6.querySelector('form').addEventListener('submit', (e) => handleStaticVoteSubmit(e, STATIC_SURVEY_ID_6, 'freetime'));
}

// =================================================================
// 🆕 ЛОГИКА ДИНАМИЧЕСКИХ ОПРОСОВ (ПОЛНОСТЬЮ ЧЕРЕЗ API)
// =================================================================

const createsurveybutton = document.querySelector(".createsurvey");
const form = document.querySelector(".createsurveywindow");
const createsurveytitle = document.querySelector("#createsurveytitle");
const createsurveyquestion = document.querySelector("#createsurveyquestion");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const option5 = document.querySelector("#option5");
const allsurveys = document.querySelector(".allsurveys");

let savedsurveys = []; // Массив для хранения данных опросов из API

// --- 1. Функция рендеринга и подключения обработчиков (ДИНАМИЧЕСКИЕ ОПРОСЫ) ---
function renderSurveys() {
    // Удаляем предыдущие динамические опросы, чтобы не дублировать
    document.querySelectorAll(".survey-dynamic").forEach(el => el.remove()); 

    savedsurveys.forEach(item => {
        const surveyId = item._id; // ID, полученный от MongoDB
        const radioName = `vote-${surveyId}`; 
        
        const optionsMap = [
            { key: 'option1', value: item.option1 },
            { key: 'option2', value: item.option2 },
            { key: 'option3', value: item.option3 },
            { key: 'option4', value: item.option4 },
            { key: 'option5', value: item.option5 },
        ];

        const optionsHtml = optionsMap
            .filter(opt => opt.value && opt.value.trim() !== "") 
            .map(opt => `<label class="survey-option"><input type="radio" name="${radioName}" value="${opt.key}">${opt.value}</label>`)
            .join('');

        if (allsurveys) {
            allsurveys.innerHTML += `<div class="survey survey-dynamic" data-id="${surveyId}">
                <h2 class="surveytitle">${item.title}</h2>
                <h2 class="surveyquestion">${item.question}</h2>
                <form class="vote-form-dynamic" data-survey-id="${surveyId}">
                    ${optionsHtml}
                    <button class="button6" type="submit">Abstimmen</button>
                </form>
            </div>`;
        }
    });
    
    // Переподключаем обработчик темы для новых кнопок
    if (document.body.classList.contains("lightbody")) {
         document.querySelectorAll(".survey-dynamic button").forEach(el => el.classList.add("lightsurveybutton"));
    }
    
    // Подключаем обработчик событий для всех новых форм голосования
    document.querySelectorAll(".vote-form-dynamic").forEach(formEl => {
        formEl.addEventListener('submit', handleDynamicVoteSubmit);
    });
}

// --- 2. Обработчик голосования (POST) (ДИНАМИЧЕСКИЕ ОПРОСЫ) ---
async function handleDynamicVoteSubmit(event) {
    event.preventDefault();
    
    const formEl = event.target;
    const surveyId = formEl.dataset.surveyId;
    
    const selectedOption = formEl.querySelector(`input[name="vote-${surveyId}"]:checked`);
    
    if (!selectedOption) {
        alert('Пожалуйста, выберите вариант ответа.');
        return;
    }
    
    const optionKey = selectedOption.value; 
    
    try {
        const response = await fetch(`${API_URL_SURVEYS}/${surveyId}/vote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ option: optionKey }),
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP при голосовании: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json(); 
        console.log('Голос успешно отправлен:', data);
        
        alert('Ваш голос учтен!');
        
        formEl.querySelectorAll('input, button').forEach(el => el.disabled = true);
        
    } catch (error) {
        console.error('Ошибка голосования:', error);
        alert('Не удалось отправить голос. Проверьте соединение с сервером.');
    }
}


// --- 3. Загрузка данных при старте страницы (GET) ---
async function fetchAndRenderSurveys() {
    try {
        const response = await fetch(API_URL_SURVEYS);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        savedsurveys = await response.json(); 
        renderSurveys(); 
    } catch (error) {
        console.error('Ошибка загрузки опросов с сервера:', error);
        if (allsurveys) {
            allsurveys.innerHTML = '<p>Не удалось загрузить новые опросы с сервера. Проверьте запущен ли ваш Node.js сервер!</p>';
        }
    }
}

// Запускаем загрузку данных сразу при загрузке страницы
document.addEventListener("DOMContentLoaded", fetchAndRenderSurveys);


// --- 4. Отправка нового опроса на сервер (POST) ---
if (form) { 
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        
        const newitem = {
            title: createsurveytitle.value,
            question: createsurveyquestion.value,
            option1 : option1.value.trim(),
            option2 : option2.value.trim(),
            option3 : option3.value.trim(),
            option4 : option4.value.trim(),
            option5 : option5.value.trim(),
        };

        try {
            const response = await fetch(API_URL_SURVEYS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newitem),
            });

            if (!response.ok) {
                throw new Error(`Ошибка HTTP при сохранении: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json(); 
            console.log('Опрос успешно сохранен:', data);
            
            await fetchAndRenderSurveys(); 
            
            form.classList.add("hidden");
            createsurveybutton.classList.remove("hidden");
            form.reset();
            
        } catch (error) {
            console.error('Ошибка создания опроса:', error);
            alert('Не удалось создать опрос. Проверьте соединение с сервером.');
        }
    });
}


// --- 5. Логика открытия/закрытия формы ---
if (createsurveybutton) { 
    createsurveybutton.addEventListener("click", function(){
        if (form) form.classList.toggle("hidden");
        createsurveybutton.classList.toggle("hidden");
    });
}

// =================================================================
// 🌐 ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА (ОЧИЩЕННАЯ ОТ LOCALSTORAGE)
// =================================================================

const newspage = document.querySelector(".newspage")
const surveyspage = document.querySelector(".surveyspage")
const nav = document.querySelector(".nav")
// Все остальные переменные для статических опросов уже объявлены выше
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


changelanguage.addEventListener("click", function(){
    nav.classList.toggle("navenglish")
    
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
        if (surveyslist) {
            surveyslist.innerHTML = `${firstsurvey} <br> ${secondsurvey} <br> ${thirdsurvey} <br>
            ${fourthsurvey} <br> ${fifthsurvey} <br> ${sixthsurvey} <br>`
        }
        

        if (surveytitle1) surveytitle1.textContent = "About you";
        if (surveytitle2) surveytitle2.textContent = "Screen time";
        if (surveytitle3) surveytitle3.innerHTML = "Environmental and <br> climate protection";
        if (surveytitle4) surveytitle4.textContent = "Social media";
        if (surveytitle5) surveytitle5.textContent = "School/work";
        if (surveytitle6) surveytitle6.textContent = "Free time activities";

        if (surveyquestion1) surveyquestion1.textContent = "Your gender:";
        if (surveyquestion2) surveyquestion2.textContent = "How much time do you spend on gadgets?";
        if (surveyquestion3) surveyquestion3.textContent = "How important is environmental and climate protection to you?";
        if (surveyquestion4) surveyquestion4.textContent = 'Do you agree with the statement: "Social media strongly influences our everyday lives"?';
        if (surveyquestion5) surveyquestion5.textContent = "Do you think that school/work prepares you enough for practical skills?";
        if (surveyquestion6) surveyquestion6.textContent = "What free time activity do you prefer?";

        if (male) male.innerHTML = '<input type="radio" name="gender" value="male">male';
        if (female) female.innerHTML = '<input type="radio" name="gender" value="female">female';
        if (onetwohour) onetwohour.innerHTML = '<input type="radio" name="screentime" value="onetwohour">1-2 hours';
        if (threefivehour) threefivehour.innerHTML = '<input type="radio" name="screentime" value="threefivehour">3-5 hours';
        if (sixeighthour) sixeighthour.innerHTML = '<input type="radio" name="screentime" value="sixeighthour">6-8 hours';
        if (veryimportant) veryimportant.innerHTML = '<input type="radio" name="eko" value="veryimportant">very important';
        if (important) important.innerHTML = '<input type="radio" name="eko" value="important">important';
        if (neutral1) neutral1.innerHTML = '<input type="radio" name="eko" value="neutral">neutral';
        if (lessimportant) lessimportant.innerHTML = '<input type="radio" name="eko" value="lessimportant">less important';
        if (notimportant) notimportant.innerHTML = '<input type="radio" name="eko" value="notimportant">not important';
        if (totallyagree) totallyagree.innerHTML = '<input type="radio" name="media" value="totallyagree">totally agree';
        if (agree) agree.innerHTML = '<input type="radio" name="media" value="agree">agree';
        if (neutral2) neutral2.innerHTML = '<input type="radio" name="media" value="neutral">neutral';
        if (disagree) disagree.innerHTML = '<input type="radio" name="media" value="disagree">disagree';
        if (totallydisagree) totallydisagree.innerHTML = '<input type="radio" name="media" value="totallydisagree">totally disagree';
        if (absolutelyyes) absolutelyyes.innerHTML = '<input type="radio" name="practice" value="absolutelyyes">absolutely yes';
        if (mostlyyes) mostlyyes.innerHTML = '<input type="radio" name="practice" value="mostlyyes">mostly yes';
        if (neutral3) neutral3.innerHTML = '<input type="radio" name="practice" value="neutral">neutral';
        if (mostlyno) mostlyno.innerHTML = '<input type="radio" name="practice" value="mostlyno">mostly no';
        if (absolutelyno) absolutelyno.innerHTML = '<input type="radio" name="practice" value="absolutelyno">absolutely no';
        if (sport) sport.innerHTML = '<input type="radio" name="freetime" value="sport">sport';
        if (reading) reading.innerHTML = '<input type="radio" name="freetime" value="reading">reading';
        if (videogames) videogames.innerHTML = '<input type="radio" name="freetime" value="videogames">videogames';
        if (films) films.innerHTML = '<input type="radio" name="freetime" value="films">watching films';
        if (friends) friends.innerHTML = '<input type="radio" name="freetime" value="friends">meeting friends';

        if (button1) button1.textContent = "Submit";
        if (button2) button2.textContent = "Submit";
        if (button3) button3.textContent = "Submit";
        if (button4) button4.textContent = "Submit";
        if (button5) button5.textContent = "Submit";
        if (button6) button6.textContent = "Submit";
        
        // Очищаем списки результатов (результаты будут загружены скриптами графиков)
        if (results1) results1.innerHTML = "";
        if (results2) results2.innerHTML = "";
        if (results3) results3.innerHTML = "";
        if (results4) results4.innerHTML = "";
        if (results5) results5.innerHTML = "";
        if (results6) results6.innerHTML = "";


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

        if (surveytitle1) surveytitle1.textContent = "Über Sie";
        if (surveytitle2) surveytitle2.textContent = "Bildschirmzeit";
        if (surveytitle3) surveytitle3.innerHTML = "Umwelt- und <br> Klimaschutz";
        if (surveytitle4) surveytitle4.textContent = "Social Media";
        if (surveytitle5) surveytitle5.textContent = "Schule/Arbeit";
        if (surveytitle6) surveytitle6.textContent = "Freizeitaktivität";

        if (surveyquestion1) surveyquestion1.textContent = "Ihr Geschlecht:";
        if (surveyquestion2) surveyquestion2.textContent = "Wie viel Zeit verbringst du in Gadgets?";
        if (surveyquestion3) surveyquestion3.textContent = "Wie wichtig ist dir Umwelt- und Klimaschutz?";
        if (surveyquestion4) surveyquestion4.textContent = 'Stimmst du der Aussage zu: "Social Media beeinflusst unseren Alltag stark"?';
        if (surveyquestion5) surveyquestion5.textContent = "Meinst du, dass Schule/Arbeit genug auf praktische Fähigkeiten vorbereitet?";
        if (surveyquestion6) surveyquestion6.textContent = "Welche Freizeitaktivität bevorzugst du?";

        let surveyslist = document.querySelector(".surveyslist")
        if (surveyslist) {
            surveyslist.innerHTML = `${firstsurvey} <br> ${secondsurvey} <br> ${thirdsurvey} <br>
            ${fourthsurvey} <br> ${fifthsurvey} <br> ${sixthsurvey} <br>`
        }

        if (male) male.innerHTML = '<input type="radio" name="gender" value="male">männlich';
        if (female) female.innerHTML = '<input type="radio" name="gender" value="female">weiblich';
        if (onetwohour) onetwohour.innerHTML = '<input type="radio" name="screentime" value="onetwohour">1-2 Stunden';
        if (threefivehour) threefivehour.innerHTML = '<input type="radio" name="screentime" value="threefivehour">3-5 Stunden';
        if (sixeighthour) sixeighthour.innerHTML = '<input type="radio" name="screentime" value="sixeighthour">6-8 Stunden';
        if (veryimportant) veryimportant.innerHTML = '<input type="radio" name="eko" value="veryimportant">Sehr wichtig';
        if (important) important.innerHTML = '<input type="radio" name="eko" value="important">Wichtig';
        if (neutral1) neutral1.innerHTML = '<input type="radio" name="eko" value="neutral">Neutral';
        if (lessimportant) lessimportant.innerHTML = '<input type="radio" name="eko" value="lessimportant">Weniger wichtig';
        if (notimportant) notimportant.innerHTML = '<input type="radio" name="eko" value="notimportant">Überhaupt nicht wichtig';
        if (totallyagree) totallyagree.innerHTML = '<input type="radio" name="media" value="totallyagree">Stimme voll zu';
        if (agree) agree.innerHTML = '<input type="radio" name="media" value="agree">Stimme zu';
        if (neutral2) neutral2.innerHTML = '<input type="radio" name="media" value="neutral">Neutral';
        if (disagree) disagree.innerHTML = '<input type="radio" name="media" value="disagree">Stimme nicht zu';
        if (totallydisagree) totallydisagree.innerHTML = '<input type="radio" name="media" value="totallydisagree">Stimme überhaupt nicht zu';
        if (absolutelyyes) absolutelyyes.innerHTML = '<input type="radio" name="practice" value="absolutelyyes">Ja, absolut';
        if (mostlyyes) mostlyyes.innerHTML = '<input type="radio" name="practice" value="mostlyyes">Meistens ja';
        if (neutral3) neutral3.innerHTML = '<input type="radio" name="practice" value="neutral">Neutral';
        if (mostlyno) mostlyno.innerHTML = '<input type="radio" name="practice" value="mostlyno">Meistens nein';
        if (absolutelyno) absolutelyno.innerHTML = '<input type="radio" name="practice" value="absolutelyno">Nein, überhaupt nicht';
        if (sport) sport.innerHTML = '<input type="radio" name="freetime" value="sport">Sport treiben';
        if (reading) reading.innerHTML = '<input type="radio" name="freetime" value="reading">Lesen';
        if (videogames) videogames.innerHTML = '<input type="radio" name="freetime" value="videogames">Videospiele';
        if (films) films.innerHTML = '<input type="radio" name="freetime" value="films">Filme anschauen';
        if (friends) friends.innerHTML = '<input type="radio" name="freetime" value="friends">Freunde treffen';

        if (button1) button1.textContent = "Abstimmen";
        if (button2) button2.textContent = "Abstimmen";
        if (button3) button3.textContent = "Abstimmen";
        if (button4) button4.textContent = "Abstimmen";
        if (button5) button5.textContent = "Abstimmen";
        if (button6) button6.textContent = "Abstimmen";
        
        // Очищаем списки результатов
        if (results1) results1.innerHTML = "";
        if (results2) results2.innerHTML = "";
        if (results3) results3.innerHTML = "";
        if (results4) results4.innerHTML = "";
        if (results5) results5.innerHTML = "";
        if (results6) results6.innerHTML = "";
    }
})