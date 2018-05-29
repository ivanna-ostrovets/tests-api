const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  correct: {
    type: Boolean,
  },
});

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  matchingQuestion: {
    type: Boolean,
  },
  numberedAnswersQuantity: {
    type: Number,
  },
  letteredAnswersQuantity: {
    type: Number,
  },
  table: [
    [{ type: String }],
    [{ type: String }],
  ],
  matchingQuestionAnswers: [{ type: String }],
  simpleQuestionAnswers: [answerSchema],
});

const testSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  questions: [questionSchema],
});

module.exports = mongoose.model('Test', testSchema);
