const quizAttemptModel = require('../models/quiz-attempts/quiz-attempts.models.server')

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0
    questions.forEach(question =>
        question.answer === question.correct ? numberOfCorrectQuestions ++: numberOfCorrectQuestions)
    return 100 * numberOfCorrectQuestions/questions.length
}

const findAttemptsForQuiz = (quizId) =>
    quizAttemptModel.find({quiz:quizId}).populate('quiz','title_id')

const createAttempt = (qid, attempt) =>
    quizAttemptModel.create({quiz:qid,answers:attempt,score:scoreQuiz((attempt))})

const findAttemptById = (atId) =>
    quizAttemptModel.findById(atId)

module.exports = {
    createAttempt,
    findAttemptsForQuiz,
    findAttemptById
}
