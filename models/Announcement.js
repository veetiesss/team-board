// models/Announcement.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Определяем схему для объявлений
const announcementSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String, // Храним дату в виде строки, как в вашем фронтенде
        required: true
    }
}, { timestamps: true }); // timestamps добавит createdAt и updatedAt

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;
