const express = require("express")
const app = express()
// const quizService = require("./services/quiz.service.server")
// quizService(app)


app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested_With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    next();
})

require("./controllers/question.controller.server")(app)
require("./controllers/quizzes.controller.server")(app)
app.listen(3000)
