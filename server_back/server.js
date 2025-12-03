// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('debug', true);

// Импортируем роуты для объявлений и опросов
// server.js (Исправленный код)
// Импортируем роуты для объявлений и опросов
const announcementRoutes = require('./announcementRoutes.js'); // Ищем в той же папке
const surveyRoutes = require('./surveyRoutes.js');             // Ищем в той же папке

const app = express();
const PORT = 3000; 

// --- 1. Настройка Middleware ---
// Разрешаем CORS. Это критически важно, так как ваш фронтенд работает на другом порту (или как файл)
app.use(cors()); 
// Позволяем Express парсить JSON из тела запросов
app.use(express.json()); 

// --- 2. Настройка подключения к MongoDB ---
// !!! ВАЖНО: Замените 'your_project_db' на реальное имя вашей базы данных
// и убедитесь, что ваш MongoDB сервер запущен!
const dbURI = 'mongodb+srv://veeties:vikodin_143@cluster0.3zrf9fw.mongodb.net/survey_db?retryWrites=true&w=majority&appName=Cluster0'; 
//const dbURI = 'mongodb://localhost:27017/';

mongoose.connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB!")

    // --- 3. Подключение роутов API ---
    // Объявления
    app.use('/api/announcements', announcementRoutes); 
    // Опросы и голосование
    app.use('/api/surveys', surveyRoutes);

    // Базовый роут
    app.get('/', (req, res) => {
        res.send('API Server is operational.');
    });

    app.listen(PORT, () => console.log(`Server running on ${PORT}`))
  })
  .catch(err => console.error("Mongo error:", err))


