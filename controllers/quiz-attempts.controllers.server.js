const quizAttemptDao = require('../daos/quiz-attempts.dao.server')

module.exports = (app) => {
    const createAttempt = (req, res) =>
        quizAttemptDao.createAttempt(req.params.qid, req.body)
            .then(attempt => res.send(attempt))

    const findAttemptsForQuiz = (req,res) =>
        quizAttemptDao.findAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts))

    const findAttemptById = (req, res) =>
        quizAttemptDao.findAttemptById(req.params.attemptId)
            .then(attempt => res.send(attempt))

    app.get('/api/quizzes/:qid/attempts', findAttemptsForQuiz)
    app.get('/api/attempts/:attemptId', findAttemptById)
    app.post('/api/quizzes/:qid/attempts', createAttempt)
}
