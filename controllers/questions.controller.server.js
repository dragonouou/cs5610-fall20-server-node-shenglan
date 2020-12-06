const questionService = require("../services/questions.service.server")

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then(questions => res.send(questions))
    }

    const findQuestionById = (req, res) => {
        questionService.findQuestionById(req.params.qid)
            .then(question => res.json(question))
    }

    const findQuestionsForQuiz = (req,res) => {
        const quizId = req.params.qid
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => res.send(questions))
        // const questions = questionService.findQuestionsForQuiz(quizId)
        // res.json(questions)
    }

    app.get("/api/questions", findAllQuestions)
    app.get("/api/questions/:qid", findQuestionById)
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz)

}
