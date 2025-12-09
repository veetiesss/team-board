// =================================================================
// 🚀 НАСТРОЙКИ API (Адрес должен соответствовать вашему бэкенду)
// =================================================================
const API_URL_SURVEYS = 'http://localhost:3000/api/surveys'; 

// ⚠️ ВАЖНО: ЗАМЕНИТЕ ЭТИ ЗАПОЛНИТЕЛИ НА ФАКТИЧЕСКИЕ ID ИЗ ВАШЕЙ БАЗЫ ДАННЫХ!
const STATIC_SURVEY_ID_1 = '693152232d4e2971660d4a12'; // Über Sie
const STATIC_SURVEY_ID_2 = '693152232d4e2971660d4a13'; // Bildschirmzeit
const STATIC_SURVEY_ID_3 = '693152232d4e2971660d4a14'; // Umwelt- und Klimaschutz
const STATIC_SURVEY_ID_4 = '693152232d4e2971660d4a15'; // Social Media
const STATIC_SURVEY_ID_5 = '693152232d4e2971660d4a16'; // Schule/Arbeit
const STATIC_SURVEY_ID_6 = '693152232d4e2971660d4a17'; // Freizeitaktivität

// =================================================================
// 🎨 ЛОГИКА ТЕМЫ
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
    
    // Переключение темы для кнопок (должно работать с динамически созданными элементами)
    document.querySelectorAll(".survey button").forEach(el => el.classList.toggle("lightsurveybutton"));
});

// =================================================================
// 🆕 ЛОГИКА ГОЛОСОВАНИЯ: СТАТИЧЕСКИЕ ОПРОСЫ (ЧЕРЕЗ ОТДЕЛЬНЫЙ РОУТ ДЛЯ РЕЗУЛЬТАТОВ)
// =================================================================

// Роут для голосования статических опросов (если они хранятся в отдельной коллекции SurveyResult)
const API_URL_STATIC_VOTE = 'http://localhost:3000/api/surveys/staticsurvey/vote'; 

/**
 * Универсальный обработчик для отправки голоса статического опроса на API.
 * 🛑 ВАЖНО: Этот роут отправляет данные для обновления коллекции SurveyResult.
 * @param {Event} event - Событие отправки формы.
 * @param {string} categoryName - Имя категории для БД: 'gender', 'screentime', и т.д.
 */
async function handleStaticVoteSubmit(event, categoryName) {
    event.preventDefault();
    
    const formEl = event.target;
    
    // Находим выбранную радиокнопку. Используем имя radioGroup, которое было задано при рендеринге
    const radioGroupName = formEl.dataset.radioGroupName; 
    const selectedOption = formEl.querySelector(`input[name="${radioGroupName}"]:checked`);
    
    if (!selectedOption) {
        alert('Пожалуйста, выберите вариант ответа.');
        return;
    }
    
    // Значение - это ключ опции: 'male', 'onetwohour', 'veryimportant', и т.д.
    const optionKey = selectedOption.value; 
    
    try {
        const response = await fetch(API_URL_STATIC_VOTE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Отправляем категорию и ключ опции
            body: JSON.stringify({ category: categoryName, option: optionKey }),
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP при голосовании: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json(); 
        console.log(`Голос для категории ${categoryName} успешно отправлен:`, data);
        
        alert('Ваш голос учтен!');
        
        // Отключаем форму после голосования
        formEl.querySelectorAll('input, button').forEach(el => el.disabled = true);
        
    } catch (error) {
        console.error('Ошибка голосования статического опроса:', error);
        alert('Не удалось отправить голос. Проверьте соединение с сервером.');
    }
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

// ✅ ИСПОЛЬЗУЕМ УНИКАЛЬНЫЙ ID ДЛЯ КОНТЕЙНЕРА
const allsurveys = document.getElementById("main-survey-list"); 

let savedsurveys = []; // Массив для хранения данных опросов из API


// --- 1. Функция рендеринга и подключения обработчиков ---
function renderSurveys() {
    console.log('Рендеринг опросов');
    
    // ✅ Очищаем контейнер ПЕРЕД рендерингом
   if (allsurveys) {
        allsurveys.innerHTML = ''; 
    }

    // Категории для статических опросов (должны соответствовать категориям в SURVEY_TRANSLATIONS)
    const staticCategories = ['gender', 'screentime', 'eko', 'media', 'practice', 'freetime'];
    
    savedsurveys.forEach((item, index) => {
        const surveyId = item._id; // ID, полученный от MongoDB
        const isStatic = index < staticCategories.length;
        const categoryName = isStatic ? staticCategories[index] : `dynamic-${surveyId}`;
        const radioName = `vote-${categoryName}`; // Уникальное имя для группы радиокнопок
        
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

        // Определяем тексты кнопок в зависимости от текущего языка
        const submitText = NEWS_PAGE_TEXT[currentLanguage].submit;
        const graphText = NEWS_PAGE_TEXT[currentLanguage].graph;

        if (allsurveys) {
            allsurveys.innerHTML += `<div class="survey survey-${isStatic ? 'static' : 'dynamic'}" data-id="${surveyId}">
                <h2 class="surveytitle">${item.title}</h2>
                <h2 class="surveyquestion">${item.question}</h2>
                
                <form class="vote-form" 
                    data-survey-id="${surveyId}" 
                    data-is-static="${isStatic}" 
                    data-category-name="${categoryName}"
                    data-radio-group-name="${radioName}">

                    <div class="answersvotes">
                        <div class="answers">
                           ${optionsHtml}
                        </div>
                        <div class="votes">
                            <ul id="results-${surveyId}" class="results"></ul>
                        </div>
                    </div>
                    
                    <button class="button6" type="submit">${submitText}</button>
                </form>

                <button class="graphicpage">
                    <a class="graphicpagelink" href="index3.html?id=${surveyId}">${graphText}</a>
                </button> 
                
            </div>`;
        }
    });

    // Переподключаем обработчик темы для новых кнопок
    if (document.body.classList.contains("lightbody")) {
         document.querySelectorAll(".survey button").forEach(el => el.classList.add("lightsurveybutton"));
    }
    
    // Подключаем обработчик событий для всех новых форм голосования
    document.querySelectorAll(".vote-form").forEach(formEl => {
        // Удаляем старые обработчики, чтобы избежать дублирования
        formEl.removeEventListener('submit', handleFormSubmitWrapper);
        formEl.addEventListener('submit', handleFormSubmitWrapper);
    });
}

/**
 * Обертка для определения типа опроса и вызова нужного обработчика
 */
function handleFormSubmitWrapper(e) {
    const formEl = e.target;
    const isStatic = formEl.dataset.isStatic === 'true';
    const surveyId = formEl.dataset.surveyId;
    const categoryName = formEl.dataset.categoryName;
    
    if (isStatic) {
        // Вызываем обработчик для статических опросов
        handleStaticVoteSubmit(e, categoryName);
    } else {
        // Вызываем обработчик для динамических опросов
        handleDynamicVoteSubmit(e, surveyId);
    }
}


// --- 2. Обработчик голосования (POST) (ДИНАМИЧЕСКИЕ ОПРОСЫ) ---
async function handleDynamicVoteSubmit(event, surveyId) {
    event.preventDefault();
    
    const formEl = event.target;
    const radioName = formEl.dataset.radioGroupName;
    
    const selectedOption = formEl.querySelector(`input[name="${radioName}"]:checked`);
    
    if (!selectedOption) {
        alert('Пожалуйста, выберите вариант ответа.');
        return;
    }
    
    const optionKey = selectedOption.value; // 'option1', 'option2' и т.д.
    
    try {
        // Отправка голоса на роут, который увеличит optionX_count в коллекции Survey
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
        // Массив savedsurveys будет содержать и статические, и динамические опросы
        savedsurveys = await response.json(); 
        renderSurveys(); 
    } catch (error) {
        console.error('Ошибка загрузки опросов с сервера:', error);
        if (allsurveys) {
            allsurveys.innerHTML = '<p>Не удалось загрузить опросы с сервера. Проверьте запущен ли ваш Node.js сервер!</p>';
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
            
            // Перезагружаем список, чтобы увидеть новый опрос
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
// 🌐 ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА
// =================================================================

const newspage = document.querySelector(".newspage")
const surveyspage = document.querySelector(".surveyspage")
const nav = document.querySelector(".nav")

// 📚 Объект с переводами для статических опросов (порядок соответствует массиву savedsurveys)
const SURVEY_TRANSLATIONS = {
    // Немецкий (По умолчанию - DEU)
    DEU: [
        { title: "Über Sie", question: "Ihr Geschlecht:", category: 'gender', options: { option1: "männlich", option2: "weiblich" } },
        { title: "Bildschirmzeit", question: "Wie viele Stunden verbringen Sie täglich vor einem Bildschirm?", category: 'screentime', options: { option1: "1-2 Stunden", option2: "3-5 Stunden", option3: "6-8 Stunden" } },
        { title: "Umwelt- und Klimaschutz", question: "Wie wichtig ist Ihnen Umwelt- und Klimaschutz?", category: 'eko', options: { option1: "Sehr wichtig", option2: "Wichtig", option3: "Neutral", option4: "Weniger wichtig", option5: "Unwichtig" } },
        { title: "Social Media", question: 'Ich nutze Social Media mehrmals täglich.', category: 'media', options: { option1: "Stimme voll zu", option2: "Stimme zu", option3: "Neutral", option4: "Stimme nicht zu", option5: "Stimme überhaupt nicht zu" } },
        { title: "Schule/Arbeit", question: 'Ich gehe gerne zur Schule/Arbeit.', category: 'practice', options: { option1: "Ja, absolut", option2: "Meistens ja", option3: "Neutral", option4: "Meistens nein", option5: "Absolut nein" } },
        { title: "Freizeitaktivität", question: "Was machen Sie am liebsten in Ihrer Freizeit?", category: 'freetime', options: { option1: "Sport treiben", option2: "Lesen", option3: "Videospiele spielen", option4: "Filme schauen", option5: "Freunde treffen" } }
    ],
    // Английский (EN)
    EN: [
        { title: "About You", question: "Your gender:", category: 'gender', options: { option1: "male", option2: "female" } },
        { title: "Screen Time", question: "How many hours do you spend in front of a screen daily?", category: 'screentime', options: { option1: "1-2 hours", option2: "3-5 hours", option3: "6-8 hours" } },
        { title: "Environmental Protection", question: "How important is environmental and climate protection to you?", category: 'eko', options: { option1: "Very important", option2: "Important", option3: "Neutral", option4: "Less important", option5: "Not important" } },
        { title: "Social Media", question: 'I use social media several times a day.', category: 'media', options: { option1: "Totally agree", option2: "Agree", option3: "Neutral", option4: "Disagree", option5: "Totally disagree" } },
        { title: "School/Work", question: 'I enjoy going to school/work.', category: 'practice', options: { option1: "Absolutely yes", option2: "Mostly yes", option3: "Neutral", option4: "Mostly no", option5: "Absolutely no" } },
        { title: "Leisure Activity", question: "What do you prefer to do in your free time?", category: 'freetime', options: { option1: "Sport", option2: "Reading", option3: "Playing video games", option4: "Watching films", option5: "Meeting friends" } }
    ]
};

const NEWS_PAGE_TEXT = {
    DEU: { news: "Ankündigungen", surveys: "Umfragen", submit: "Abstimmen", graph: "Balkengrafik" },
    EN: { news: "News", surveys: "Surveys", submit: "Submit", graph: "Bar Chart" }
};

// 💡 Текущий язык (Начальное значение должно соответствовать HTML)
let currentLanguage = 'DEU';


// --- Функция обновления всех текстов на странице ---
function updatePageTexts() {
    const texts = NEWS_PAGE_TEXT[currentLanguage];
    
    // Обновление навигации
    if (newspage) newspage.textContent = texts.news;
    if (surveyspage) surveyspage.textContent = texts.surveys;
    
    // Обновление текстов статических опросов в массиве savedsurveys
    const translations = SURVEY_TRANSLATIONS[currentLanguage];
    
    // Обновляем только те элементы в savedsurveys, которые являются статическими (первые 6)
    for (let i = 0; i < translations.length; i++) {
        if (savedsurveys[i]) {
            const translatedSurvey = translations[i];
            
            savedsurveys[i].title = translatedSurvey.title;
            savedsurveys[i].question = translatedSurvey.question;
            
            // Обновляем опции
            savedsurveys[i].option1 = translatedSurvey.options.option1 || '';
            savedsurveys[i].option2 = translatedSurvey.options.option2 || '';
            savedsurveys[i].option3 = translatedSurvey.options.option3 || '';
            savedsurveys[i].option4 = translatedSurvey.options.option4 || '';
            savedsurveys[i].option5 = translatedSurvey.options.option5 || '';
        }
    }

    // После обновления данных в savedsurveys, мы должны перерендерить всю страницу
    renderSurveys();
}


// --- Обработчик переключения языка ---
changelanguage.addEventListener("click", function(){
    // 1. Меняем язык
    currentLanguage = (currentLanguage === 'DEU') ? 'EN' : 'DEU';
    
    // 2. Обновляем текст кнопки
    changelanguage.textContent = (currentLanguage === 'DEU') ? 'EN' : 'DEU'; 
    
    // 3. Запускаем обновление всех текстов
    updatePageTexts();
    
    // 4. Логика для класса nav 
    if (nav) nav.classList.toggle("navenglish");
});