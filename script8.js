// =================================================================
// ⚙️ НАСТРОЙКИ (ДЛЯ ОПРОСА 5: Praktikum)
// =================================================================
const SURVEY_ID_INDEX = 5; 

const VOTE_KEYS = [
    'option1_count', // absolutely yes
    'option2_count', // mostly yes
    'option3_count', // neutral
    'option4_count', // mostly no
    'option5_count', // absolutely no
];
// =================================================================
// ... (остальной код шаблона остается прежним) ...

const API_URL = `http://localhost:3000/api/surveys/static/${SURVEY_ID_INDEX}`;

// Элементы, которые представляют столбцы графика
const graphics = {
    // Используем ключи, соответствующие вашим классам в HTML
    // 'graphic1' соответствует VOTE_KEYS[0] (option1_count)
    // 'graphic2' соответствует VOTE_KEYS[1] (option2_count)
    graphic1: document.querySelector(".graphic1"),
    graphic2: document.querySelector(".graphic2"),
    graphic3: document.querySelector(".graphic3"),
    graphic4: document.querySelector(".graphic4"),
    graphic5: document.querySelector(".graphic5"),
};

// Функция для получения данных с сервера и обновления графика
async function fetchAndRenderGraphic() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        
        // Ожидаем, что сервер вернет объект с результатами голосования,
        // например: { "option1_count": 5, "option2_count": 8, ... }
        const counts = await response.json(); 

        let maxCount = 0;
        VOTE_KEYS.forEach(key => {
            if (counts[key] > maxCount) {
                maxCount = counts[key];
            }
        });

        // Если нет голосов, maxCount будет 0. Избегаем деления на ноль.
        const totalVotes = maxCount > 0 ? maxCount : 1; 
        
        // Применяем высоту к столбцам
        VOTE_KEYS.forEach((key, index) => {
            // Ключи графиков в HTML: graphic1, graphic2 и т.д.
            const graphicKey = `graphic${index + 1}`; 
            
            if (graphics[graphicKey]) {
                const count = counts[key] || 0;
                
                // Рассчитываем высоту относительно максимального голоса (в процентах)
                // Используем vw (viewport width) как в вашем исходном коде, 
                // но масштабируем его от 0 до 20vw для наглядности
                const heightVw = (count / totalVotes) * 20; 
                
                graphics[graphicKey].style.setProperty("height", `${heightVw}vw`);
            }
        });

    } catch (error) {
        console.error('Ошибка загрузки данных для графика:', error);
        // Можно показать сообщение об ошибке на странице
        document.querySelector('.graphic').innerHTML = '<p>Не удалось загрузить результаты голосования.</p>';
    }
}

// Запускаем при загрузке страницы
document.addEventListener("DOMContentLoaded", fetchAndRenderGraphic);

