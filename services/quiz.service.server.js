// function service(app){
//     const quizzes = [
//
//     ]
//     app.get("/quizzes/:qid", (req,res) => {
//         const quizId = req.params["qid"]
//         res.send(quizId)
//     })
// }
//
// module.exports = service

// module.exports = (app) => {
//     const quizzes = []
//     app.get("/quizzes/:qid", (req,res) => {
//         const quizId = req.params["qid"]
//         res.send(quizId)
//     })
// }

let quizzes = require("./quizzes.json")

const findAllQuizzes = () => quizzes

const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId)

module.exports = {
    findAllQuizzes,
    findQuizById
}
