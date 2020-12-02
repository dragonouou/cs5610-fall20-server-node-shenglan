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
// app.listen(3000)


// const express = require('express');
// const path = require('path');
// // const app = express();
// app.use(express.static(__dirname + '/dist/cs5610-fall20-server-node-shenglan'));
// app.get('/*', function(req,res) {
//     res.sendFile(path.join(__dirname+
//         '/dist/cs5610-fall20-client-angular-shenglan/index.html'));});
app.listen(process.env.PORT || 3000);
