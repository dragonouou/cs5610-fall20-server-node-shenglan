const express = require("express")
const app = express()

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/whiteboard', {useNewUrlParser: true});
mongoose.connect("mongodb+srv://cs5610:cs5610@quizzes.xqkn5.mongodb.net/whiteboard?retryWrites=true&w=majority",
    {useNewUrlParser: true});


const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested_With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    next();
})

require("./controllers/questions.controller.server")(app)
require("./controllers/quizzes.controller.server")(app)
require("./controllers/quiz-attempts.controllers.server")(app)
// app.listen(3000)

app.listen(process.env.PORT || 3000);
