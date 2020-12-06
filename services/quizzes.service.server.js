// const findQuizById = (quizId) =>
//     quizzes.find(quiz => quiz._id === quizId)
//

// const createQuiz = () => {
//     const quiz = {_id:(new Date().getTime()+""),title: "New Quiz"}
//     quizzes.push(quiz)
//     return quiz
// }
//
// const deleteQuiz = (quizId) => {
//     quizzes = quizzes.filter(quiz => quiz.id !== quizId)
//     return 1
// }
//
// const updateQuiz = (qid, newQuiz) => {
//     quizzes = quizzes.map(quiz => quiz._id === qid ? newQuiz :quiz)
//     return 1
// }

const quizDao = require("../daos/quizzes.dao.server")

const findAllQuizzes = () =>
    quizDao.findAllQuizzes()

const findAllQuizzesDetails = () =>
    quizDao.findAllQuizzesDetails()

const findQuizById = (qid) =>
    quizDao.findQuizById(qid)

const createQuiz = () => {
    const newQuiz = {title: "New Quiz"}
    return quizModel.createQuiz(newQuiz)
}

const deleteQuiz = (qid) => quizModel.deleteQuiz(qid)

const updateQuiz = (qid, newQuiz) => quizModel.updateQuiz(qid, newQuiz)

module.exports = {
    findAllQuizzes,
    findAllQuizzesDetails,
    findQuizById,
    createQuiz,
    deleteQuiz,
    updateQuiz
}
