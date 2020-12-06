const quizModel = require('../models/quizzes/quizzes.models.server')

const findAllQuizzes = () =>
    quizModel.find()

const findAllQuizzesDetails = () =>
    quizModel.find().populate("questions").exec()

const findQuizById = (qid) =>
    //findOne + filter
    // quizModel.findOne({_id:qid})
    quizModel.findById(qid)

const findQuizByIdDetails = (qid) =>
    quizModel.findById(qid).populate("questions").exec()

const createQuiz = (newQuiz) =>
    quizModel.create(newQuiz)

const deleteQuiz = (quizId) =>
    quizModel.remove({_id:quizId})

const updateQuiz = (quizId, newQuiz) =>
    quizModel.update({_id:quizId}, {$set:newQuiz})

module.exports = {
    findAllQuizzes,
    findAllQuizzesDetails,
    findQuizById,
    createQuiz,
    deleteQuiz,
    updateQuiz
}
