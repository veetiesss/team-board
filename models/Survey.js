// models/Survey.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    title: { type: String, required: true },
    question: { type: String, required: true },
    
    // Опции ответов
    option1: { type: String, default: null },
    option2: { type: String, default: null },
    option3: { type: String, default: null },
    option4: { type: String, default: null },
    option5: { type: String, default: null },
    
    // Счетчик голосов
    votes: {
        option1_count: { type: Number, default: 0 },
        option2_count: { type: Number, default: 0 },
        option3_count: { type: Number, default: 0 },
        option4_count: { type: Number, default: 0 },
        option5_count: { type: Number, default: 0 },
    }
}, { timestamps: true });

const Survey = mongoose.model('Survey', surveySchema);
module.exports = Survey;
