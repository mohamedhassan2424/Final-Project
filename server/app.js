// declarations
require('dotenv').config()
const {ENVIROMENT, PORT} = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
app.use(function(req, res, next) {   res.header("Access-Control-Allow-Origin", "*");   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");   next(); });

const catsRoutes = require("./routes/catsRoutes")

app.use("/cats",catsRoutes)

app.get("/dogs", (req,res)=>{
    dogs = ["Bella",
        "Charlie",
        "Luna",
        "Lucy",
        "Max",
        "Bailey",
        "Cooper",
        "Daisy"]
        res.json(dogs);
})
app.get("/car", (req,res)=>{
    res.send("Hello world")
})
app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));