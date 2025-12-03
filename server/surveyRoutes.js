// routes/surveyRoutes.js
const express = require('express');
const Survey = require('../models/Survey');

const router = express.Router();

// GET /api/surveys: Получить все опросы
router.get('/', async (req, res) => {
    try {
        const surveys = await Survey.find().sort({ createdAt: -1 });
        res.status(200).json(surveys);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching surveys', error: error.message });
    }
});

// POST /api/surveys: Создать новый опрос
router.post('/', async (req, res) => {
    const survey = new Survey(req.body); 

    try {
        const newSurvey = await survey.save();
        res.status(201).json(newSurvey); 
    } catch (error) {
        res.status(400).json({ message: 'Validation error', error: error.message });
    }
});

// POST /api/surveys/:id/vote: Проголосовать за опрос
// Тело запроса должно содержать { option: 'option1' }
router.post('/:id/vote', async (req, res) => {
    const surveyId = req.params.id;
    const { option } = req.body; // Ожидаем, что это будет 'option1', 'option2' и т.д.

    // Проверяем, что 'option' соответствует одному из полей счетчиков
    const validVoteFields = ['option1_count', 'option2_count', 'option3_count', 'option4_count', 'option5_count'];
    const voteField = `${option}_count`; 

    if (!validVoteFields.includes(voteField)) {
        return res.status(400).json({ message: 'Invalid vote option' });
    }

    try {
        // Обновляем счетчик голосов: $inc увеличивает поле на 1
        const updatedSurvey = await Survey.findByIdAndUpdate(
            surveyId,
            { $inc: { [`votes.${voteField}`]: 1 } },
            { new: true } // Возвращаем обновленный документ
        );

        if (!updatedSurvey) {
            return res.status(404).json({ message: 'Survey not found' });
        }

        res.status(200).json(updatedSurvey);
    } catch (error) {
        res.status(500).json({ message: 'Error processing vote', error: error.message });
    }
});

module.exports = router;

// routes/surveyRoutes.js (ДОБАВИТЬ В КОНЕЦ ФАЙЛА)
// ...

// GET /api/surveys/static/:id: Получить результаты голосования для статического опроса
router.get('/static/:id', async (req, res) => {
    const surveyIndex = parseInt(req.params.id);
    
    // ВАЖНО: В вашей схеме MongoDB нет разделения на статические/динамические опросы.
    // Мы предполагаем, что первые 6 опросов в базе данных - это ваши статические.
    try {
        // Пропускаем (skip) n-1 документов и берем (limit) 1
        const survey = await Survey.findOne({})
                                   .skip(surveyIndex - 1) 
                                   .limit(1);

        if (!survey) {
            return res.status(404).json({ message: 'Static survey not found' });
        }

        // Возвращаем только объект votes (счетчики голосов)
        res.status(200).json(survey.votes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching static survey results', error: error.message });
    }
});

module.exports = router;
