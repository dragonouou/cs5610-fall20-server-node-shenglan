const questionModel = require('../models/questions/questions.models.server')
const quizModel = require('../models/quizzes/quizzes.models.server')

const findAllQuestions = () =>
    questionModel.find()

const findQuestionById = (qid) =>
    questionModel.findById(qid)

const findQuestionsForQuiz = (qzid) =>
    questionModel.find({quizId:qzid})
    // quizModel.findById(qzid).populate('questions')
    //     .then(quiz => quiz.questions)

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById
}
