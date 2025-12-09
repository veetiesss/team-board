// /server/surveyRoutes.js

const express = require('express');
const Survey = require('../models/Survey'); // Модель для динамических опросов
const SurveyResult = require('../models/SurveyResult'); // ✅ КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: Модель для статических результатов
// ⚠️ ПРОВЕРЬТЕ ПУТЬ: './models/SurveyResult' или '../models/SurveyResult'

const router = express.Router(); 

// Карта соответствия для роута голосования статических опросов
const STATIC_SURVEY_FIELD_MAP = {
    'gender': 'gendercounts',
    'screentime': 'screentimecounts',
    'eko': 'ekocounts',
    'media': 'mediacounts',
    'practice': 'practicecounts',
    'freetime': 'freetimecounts',
};

// =================================================================
// 1. GET /api/surveys: Получить все опросы
// =================================================================
router.get('/', async (req, res) => {
    try {
        // Сортируем по дате создания (1 - по возрастанию) для правильного порядка статических опросов
        const surveys = await Survey.find().sort({ createdAt: 1 });
        res.status(200).json(surveys);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching surveys', error: error.message });
    }
});

// =================================================================
// 2. POST /api/surveys: Создать новый опрос
// =================================================================
router.post('/', async (req, res) => {
    const survey = new Survey(req.body); 

    try {
        const newSurvey = await survey.save();
        res.status(201).json(newSurvey); 
    } catch (error) {
        res.status(400).json({ message: 'Validation error', error: error.message });
    }
});


// =================================================================
// 3. POST /api/surveys/static/vote (ГОЛОСОВАНИЕ СТАТИЧЕСКИХ ОПРОСОВ)
// 🛑 ЭТОТ СПЕЦИФИЧНЫЙ РОУТ ДОЛЖЕН ИДТИ ПЕРВЫМ, чтобы не сработал роут с :id!
// =================================================================
router.post('/staticsurvey/vote', async (req, res) => {
    const { category, option } = req.body; 
    
    // 1. Проверяем, что категория существует в нашей карте
    const dbFieldPrefix = STATIC_SURVEY_FIELD_MAP[category];

    if (!dbFieldPrefix) {
        return res.status(400).json({ message: 'Invalid survey category provided.' });
    }
    
    // 2. Формируем полный путь к полю в БД: например, 'gendercounts.male'
    const updatePath = `${dbFieldPrefix}.${option}`; 
    
    try {
        // 3. Обновляем единственный документ с результатами SurveyResult
        const updateResult = await SurveyResult.updateOne(
            { _id: 'survey_results_id' }, // Фильтр для фиксированного документа
            { $inc: { [updatePath]: 1 } }  // Увеличение счетчика по полному пути
        );

        if (updateResult.modifiedCount === 0) {
            // Если документ не найден (или не изменен, потому что не существовал)
            return res.status(404).json({ message: 'Survey results document not found. Please initialize the document.' });
        }

        res.status(200).json({ message: 'Голос успешно учтен' });
        
    } catch (error) {
        console.error("Ошибка при голосовании статического опроса:", error);
        res.status(500).json({ message: 'Error processing vote', error: error.message });
    }
});


// =================================================================
// 4. POST /api/surveys/:id/vote (ГОЛОСОВАНИЕ ДИНАМИЧЕСКИХ ОПРОСОВ)
// =================================================================
router.post('/:id/vote', async (req, res) => {
    const surveyId = req.params.id;
    const { option } = req.body; // Ожидаем, например: 'option1'

    // Используем динамическое поле для увеличения счетчика ('option1_count')
    const voteField = `${option}_count`; 

    // Проверяем, что поле, которое мы пытаемся обновить, является одним из допустимых
    const validBaseOptions = ['option1', 'option2', 'option3', 'option4', 'option5'];
    if (!validBaseOptions.includes(option)) {
        return res.status(400).json({ message: 'Invalid vote option' });
    }

    try {
        // Обновляем счетчик голосов в коллекции Survey
        const updatedSurvey = await Survey.findByIdAndUpdate(
            surveyId,
            { $inc: { [voteField]: 1 } }, 
            { new: true } 
        );

        if (!updatedSurvey) {
            return res.status(404).json({ message: 'Survey not found' });
        }

        res.status(200).json(updatedSurvey);
    } catch (error) {
        console.error("Error processing vote:", error);
        res.status(500).json({ message: 'Error processing vote', error: error.message });
    }
});


// =================================================================
// 5. GET /api/surveys/static/:id: Получить результаты (для графиков)
// =================================================================
router.get('/static/:id', async (req, res) => {
    // Этот роут не будет конфликтовать, так как он GET, а не POST.
    const surveyIndex = parseInt(req.params.id); 
    
    try {
        const survey = await Survey.findOne({})
                                   .sort({ createdAt: 1 })
                                   .skip(surveyIndex - 1) 
                                   .limit(1);

        if (!survey) {
            return res.status(404).json({ message: 'Static survey not found' });
        }
        // Возвращаем данные для графика
        res.status(200).json({
            title: survey.title,
            question: survey.question,
            option1_count: survey.option1_count,
            // ... и т.д.
        });
        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching static survey results', error: error.message });
    }
});


module.exports = router;