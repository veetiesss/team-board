// seedStaticSurveys.js
const mongoose = require('mongoose');

// ⚠️ ПРОВЕРЬТЕ ЭТОТ ПУТЬ: Где находится ваш Mongoose-файл Survey.js?
// Обычно он в папке 'models'. Если он в другом месте, замените './models/Survey'
const Survey = require('../models/Survey'); 

// Строка подключения (из вашего server.js)
const dbURI = 'mongodb+srv://veeties:vikodin_143@cluster0.3zrf9fw.mongodb.net/survey_db?retryWrites=true&w=majority&appName=Cluster0'; 

// 6 СТАТИЧЕСКИХ ОПРОСОВ (Восстановлены по ключам из script4.js - script9.js)
const staticSurveys = [
    { // Опрос 1: Пол (График: index4.html)
        title: 'Über Sie',
        question: 'Ihr Geschlecht:',
        type: 'static',
        options: ["männlich", "weiblich"],
        votes: { male: 0, female: 0 }, 
        graphPage: 'index3.html'
    },
    { // Опрос 2: Время перед экраном (График: index5.html)
        title: 'Bildschirmzeit',
        question: 'Wie viele Stunden verbringen Sie täglich vor einem Bildschirm?',
        type: 'static',
        options: ["1-2 Stunden", "3-5 Stunden", "6-8 Stunden"],
        votes: { onetwohour: 0, threefivehour: 0, sixeighthour: 0 }, 
        graphPage: 'index4.html'
    },
    { // Опрос 3: Экология (График: index6.html)
        title: 'Umwelt- und Klimaschutz',
        question: 'Wie wichtig ist Ihnen Umwelt- und Klimaschutz?',
        type: 'static',
        options: ["Sehr wichtig", "Wichtig", "Neutral", "Weniger wichtig", "Unwichtig"],
        votes: { veryimportant: 0, important: 0, neutral: 0, lessimportant: 0, notimportant: 0 }, 
        graphPage: 'index5.html'
    },
    { // Опрос 4: Социальные сети (График: index7.html)
        title: 'Social Media',
        question: 'Ich nutze Social Media mehrmals täglich.',
        type: 'static',
        options: ["Stimme voll zu", "Stimme zu", "Neutral", "Stimme nicht zu", "Stimme überhaupt nicht zu"],
        votes: { totallyagree: 0, agree: 0, neutral: 0, disagree: 0, totallydisagree: 0 }, 
        graphPage: 'index6.html'
    },
    { // Опрос 5: Школа/Работа (График: index8.html)
        title: 'Schule/Arbeit',
        question: 'Ich gehe gerne zur Schule/Arbeit.',
        type: 'static',
        options: ["Ja, absolut", "Meistens ja", "Neutral", "Meistens nein", "Absolut nein"],
        votes: { absolutelyyes: 0, mostlyyes: 0, neutral: 0, mostlyno: 0, absolutelyno: 0 }, 
        graphPage: 'index7.html'
    },
    { // Опрос 6: Свободное время (График: index9.html)
        title: 'Freizeitaktivität',
        question: 'Was machen Sie am liebsten in Ihrer Freizeit?',
        type: 'static',
        options: ["Sport treiben", "Lesen", "Videospiele spielen", "Filme schauen", "Freunde treffen"],
        votes: { sport: 0, reading: 0, videogames: 0, films: 0, friends: 0 }, 
        graphPage: 'index8.html' // index8.html в вашем списке HTML был 'Freizeitaktivität', значит, график — index9.html
    }
];

async function seedSurveys() {
    await mongoose.connect(dbURI);
    console.log('MongoDB успешно подключен для посева данных.');

    try {
        // Удаляем все статические опросы перед добавлением, чтобы избежать дублирования
        await Survey.deleteMany({ type: 'static' }); 
        console.log('Старые статические опросы удалены.');
        
        const insertedSurveys = await Survey.insertMany(staticSurveys);
        console.log('Успешно добавлено статических опросов:', insertedSurveys.length);

        // ✅ ВЫВОДИМ ID ДЛЯ ВСТАВКИ В script3.js
        console.log('\n==========================================');
        console.log('   ✅ ГОТОВЫЕ ID ДЛЯ ВСТАВКИ В script3.js:');
        console.log('==========================================');
        
        insertedSurveys.forEach((survey, index) => {
            // Вывод в формате, который можно скопировать и вставить в JS
            console.log(`const STATIC_SURVEY_ID_${index + 1} = '${survey._id}'; // ${survey.title} (График: ${survey.graphPage})`);
        });

    } catch (error) {
        console.error('Ошибка при посеве данных:', error);
    } finally {
        await mongoose.disconnect();
        console.log('MongoDB отключен.');
    }
}

seedSurveys();