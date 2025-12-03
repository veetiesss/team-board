// routes/announcementRoutes.js
const express = require('express');
const Announcement = require('../models/Announcement');

const router = express.Router();

// GET /api/announcements: Получить все объявления
router.get('/', async (req, res) => {
    try {
        // Сортируем по дате создания (самые новые сверху)
        const announcements = await Announcement.find().sort({ createdAt: -1 }); 
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching announcements', error: error.message });
    }
});

// POST /api/announcements: Создать новое объявление
router.post('/', async (req, res) => {
    // Создаем новый объект на основе данных из тела запроса
    const announcement = new Announcement(req.body); 

    try {
        const newAnnouncement = await announcement.save();
        // Возвращаем созданный объект
        res.status(201).json(newAnnouncement); 
    } catch (error) {
        res.status(400).json({ message: 'Validation error', error: error.message });
    }
});

module.exports = router;
