// declarations
require('dotenv').config()
const {ENVIROMENT, PORT} = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const { Pool } = require('pg');
// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
app.use(cors());
const pool = new Pool({
    port:'5432',
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'final'
  });
  pool.connect()
  //console.log("pool",pool)

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

app.post("/reigister", (req,res)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
pool.query("INSERT INTO users (firstName, lastName, email, password) VALUES ($1,$2,$3,$4)",[firstName, lastName, email, password])
}) 
app.get("/login", (req,res)=>{

    const emalFromDatabase = req.body.email;
    const passwordFromDatabase = req.body.password;
    pool.query("SELECT * FROM  users WHERE email = $1 AND password = $2 ",[emalFromDatabase,passwordFromDatabase])
    .then((response)=>{
        if(response) {
            console.log(response)
        res.send(response)
        } else {
            res.send("Incorrect email and Password")
        }
    })
    .catch((error)=>{
        console.log(error.message)
        res.send({error:error})
    })
})

app.get("/content",(req,res)=>{
    return pool.query(`SELECT * FROM users;`)
    .then((response)=>{
        console.log(response.rows)
        //res.send("hello world")
        res.json(response.rows)
    })
    .catch((error)=>{
        console.log(error)
    })
})

app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));