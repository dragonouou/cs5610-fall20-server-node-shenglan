const quizService = require("../services/quizzes.service.server")

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        quizService.findAllQuizzes()
            .then(quizzes => res.send(quizzes))
    }

    // const findQuizById = (req,res) => {
    //     const quizId = req.params["qid"]
    //     const quiz = quizService.findQuizById(quizId)
    //     res.json(quiz)
    // }

    const findQuizById = (req,res) => {
        const quizId = req.params.qid
        quizService.findQuizById(quizId)
            .then(quiz => res.send(quiz))
    }

    const createQuiz = (req, res) => {
        quizService.createQuiz(req.body.quiz)
            .then(actualQuiz => res.send(actualQuiz))
    }

    const deleteQuiz = (req, res) => {
        const qid = req.params.qid
        quizService.deleteQuiz(qid)
            .then(status => res.send(status))
    }

    const updateQuiz = (req, res) => {
        const qid = req.params.qid
        const newQuiz = req.body
        quizService.updateQuiz(qid, newQuiz)
            .then(status => res.send(status))
    }

    const findAllQuizzesDetails = (req,res) => {
        quizService.findAllQuizzesDetails()
            .then(quizzes => res.send(quizzes))
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes-details', findAllQuizzesDetails)
    app.get('/api/quizzes/:qid', findQuizById)

    app.post("/api/quizzes",createQuiz)
    app.delete("/api/quizzes/:qid",deleteQuiz)
    app.put("/api/quizzes/:qid",updateQuiz)
}
