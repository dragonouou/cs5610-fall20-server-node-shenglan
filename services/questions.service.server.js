// let questions = require('./questions.json')
const questionDao = require("../daos/questions.dao.server")

const findAllQuestions = () =>
    questionDao.findAllQuestions()

const findQuestionById = (quizId) =>
    questionDao.findQuestionById(quizId)

const findQuestionsForQuiz = (quizId) =>
    // questions.filter(question => question.quizId === quizId)
    questionDao.findQuestionsForQuiz(quizId)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}
