const express = require('express');
const app = express();
require("dotenv").config();

const bodyParser = require('body-parser');
const db = require('./models/index')
const morgan = require('morgan')
require("./services/jobScheduling.service")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('tiny'))

db.sequelize.sync();
//db.sequelize.sync({force : true});

let loginroute = require("./routes/login.js")
let taskroute = require("./routes/task.route.js")
app.use('/',loginroute)
app.use('/',taskroute)

app.get('/',(req,res) =>{   
    return res.send({
        data : "sample request"
    })
})

app.listen(5555,(req,res) =>{
    console.log("server started at ",5555)
})