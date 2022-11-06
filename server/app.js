// declarations
require('dotenv').config()
const { ENVIROMENT, PORT } = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const { Pool } = require('pg');
// const LocalStorage = require('node-localstorage').LocalStorage, 
// localStorage = new LocalStorage('./scratch');
const store = require('store')
const cookieSession = require("cookie-session");
// middleware setup
app.use(morgan(ENVIROMENT));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(cors());
const pool = new Pool({
    port: '5432',
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'final'
});


app.use(
    cookieSession({
        name: "session",
        keys: ["secretKey1", "secretKey2"],
    })
);


pool.connect()
//console.log("pool",pool)

app.use(function (req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });

const catsRoutes = require("./routes/catsRoutes")

app.use("/cats", catsRoutes)

app.get("/dogs", (req, res) => {
    dogs = ["Bella",
        "Charlie",
        "Luna",
        "Lucy",
        "Max",
        "Bailey",
        "Cooper",
        "Daisy"]
        const userObjectValue = store.get('userObject')
        // console.log("UserObjectValue", userObjectValue)
        console.log("UserObjectValue",userObjectValue)
    res.json(dogs);
})
app.get("/car", (req, res) => {
    // const currentSession = req.session.userObject
    console.log("CurrentSession", req.session.userObject)
    res.send("Hello world")
})

app.get('/sampleProductData', (req, res) => {

    return pool.query(`SELECT * FROM samplep ;`)
        .then((response) => {

            //res.send("hello world")
            res.json(response.rows)
        })
        .catch((error) => {
            console.log(error.message)
        })



})
app.get('/sampleStores', (req, res) => {

    return pool.query(`SELECT * FROM samples ;`)
        .then((response) => {

            //res.send("hello world")
            res.json(response.rows)
        })
        .catch((error) => {
            console.log(error.message)
        })



})


app.get('/allProducts', (req, res) => {

    return pool.query(`SELECT * FROM products ;`)
        .then((response) => {

            //res.send("hello world")
            res.json(response.rows)
        })
        .catch((error) => {
            console.log(error.message)
        })



})

app.get('/allStores', (req, res) => {

    return pool.query(`SELECT * FROM stores ;`)
        .then((response) => {

            //res.send("hello world")
            res.json(response.rows)
        })
        .catch((error) => {
            console.log(error.message)
        })



})
app.get('/allProducts', (req, res) => {

    return pool.query(`SELECT * FROM products ;`)
        .then((response) => {

            //res.send("hello world")
            res.json(response.rows)
        })
        .catch((error) => {
            console.log(error.message)
        })



})

app.post("/reigister", (req, res) => {

    userObjectDetails = { firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        email: req.body.email, 
        password: req.body.password }

        req.session.userObject = userObjectDetails 
        req.session.test = "test123"
    const userObjectValue = req.session.userObject
        store.set("userObject",userObjectValue)
    // console.log("UserObjectValue", userObjectValue)
        console.log(req.session)
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password

    const sqlQuery = "INSERT INTO users (firstName, lastName, email, password) VALUES ($1,$2,$3,$4);"
    pool.query(sqlQuery, [firstName, lastName, email, password])
        .then((response) => {
            res.send(response)
        })

})
app.post("/login", (req, res) => {

    const emalFromDatabase = req.body.email;
    const passwordFromDatabase = req.body.password;
    console.log(req.body)

    pool.query("SELECT * FROM  users WHERE email = $1 AND password = $2 ;", [emalFromDatabase, passwordFromDatabase])
        .then((response) => {
            if (response.rows[0]) {
                console.log(response.rows[0])
                console.log("CORRECT email and password")
                res.send(response)
            } else {
                console.log("Incorrect email and password")
                res.send("Incorrect email and Password")
            }
        })
        .catch((error) => {
            console.log(error.message)
            res.send({ error: error })
        })
})
app.get("/mainpage", (req, res) => {
    //res.send("Mohamed Hassan")
    res.render("mainpage")
})

app.post('/addingToSalesDatabase',(req,res)=>{
    const productIdValue = req.body.productId;
    const userIdValue = req.body.userId;
    const storeIdValue= req.body.storeId
    const counterInput = req.body.counterData
    console.log("ProductIdValue",productIdValue)
    console.log("userIdValue",userIdValue)
    console.log('StoreIdValue',storeIdValue)
    console.log('counterInput',counterInput)
    const sqlQuery = "INSERT INTO sales (user_id_sales,stores_id_sales, products_id,count_product ) VALUES ($1,$2,$3,$4);"
    pool.query(sqlQuery, [userIdValue,storeIdValue,productIdValue,counterInput])
        .then((response) => {
            res.send(response)
            // res.send("All is good it has been sent off")
        })
        .catch((error) =>{
            console.log(error)
        })

})
app.post('/reigisterAddress',(req,res)=>{
    const addresOne= req.body.addressLineOne
    const addresTwo = req.body.addressLineTwo
    const cityAdd= req.body.cityAddress
    const stateR= req.body.stateRegion
    const postalCode= req.body.postalCode
    const countrySelected =req.body.country
    const currentUserIdVal = req.body.currentUserId
    console.log('addresOne',addresOne)
    console.log('addresTwo',addresTwo)
    console.log('cityAdd',cityAdd)
    console.log('stateR',stateR)
    console.log('postalCode',postalCode)
    console.log('countrySelected',countrySelected)
    console.log('currentUserIdVal',currentUserIdVal)
    const sqlQuery = "INSERT INTO address (user_id_address,full_Name,address_line_1,address_line_2,city ,state_region, zip_code, country) VALUES ($1,$2,$3,$4);"
    pool.query(sqlQuery, [firstName, lastName, email, password])
        .then((response) => {
            res.send(response)
        })
})
app.post("/extratingData", (req,res)=>{
    const extractedUserId = req.body.userIdInt
    console.log(extractedUserId, "extractedUserId")
    console.log("UserValue",extractedUserId)
    pool.query(`SELECT * FROM sales
    JOIN products ON products.id = products_id
    JOIN users ON users.id = user_id_sales
    JOIN stores ON stores.id = stores_id_sales
    WHERE users.id =$1 ;`,[extractedUserId])
    .then((response)=>{
        res.json(response.rows)
    })
    .catch((error)=>{
        console.log(error)
    })
})

app.post('/removingProduct',(req,res)=>{
    const productRemoving = req.body.productIdVal
    const userIDOfProductRemoving= req.body.userIDNam
    console.log('productRemoving',productRemoving)
    console.log('userIDOfProductRemoving',userIDOfProductRemoving)
    pool.query(`DELETE FROM sales WHERE  user_id_sales =$1 AND products_id =$2;`,[userIDOfProductRemoving,productRemoving])
})

app.post('/updateingSaleCount',(req,res)=>{
let counterIdVal = req.body.counterData
let userIdVal = req.body.userIdValue
let productIdVal = req.body.productId
let storeVal= req.body.storeId
let previousCounter = req.body.previousCount
console.log('CounterId', counterIdVal)
console.log('UserId',userIdVal)
console.log('ProductId',productIdVal)
console.log('StoreVal',storeVal)
console.log("previousCount",previousCounter)
pool.query(`UPDATE sales SET  user_id_sales =$1, stores_id_sales =$2, products_id =$3, count_product = $4 WHERE count_product = $5;`,[userIdVal,storeVal,productIdVal,counterIdVal,previousCounter])
})

app.get("/content", (req, res) => {
    return pool.query(`SELECT * FROM users;`)
        .then((response) => {

            //res.send("hello world")
            res.json(response.rows)
        })
        .catch((error) => {

            console.log(error)
        })
})

app.get("/frozenFood", (req,res)=>{
    return pool.query(`SELECT * FROM products WHERE category_name_value = 'Frozen Food';`)
    .then((response)=>{
        res.json(response.rows)
    })
    .catch((error)=>{
        console.log(error)
    })
})

app.get("/Dairy", (req,res)=>{
    return pool.query(`SELECT * FROM products WHERE category_name_value = 'Dairy';`)
    .then((response)=>{
        res.json(response.rows)
    })
    .catch((error)=>{
        console.log(error)
    })
})

app.get("/Beverage", (req,res)=>{
    return pool.query(`SELECT * FROM products WHERE category_name_value = 'Beverage';`)
    .then((response)=>{
        res.json(response.rows)
    })
    .catch((error)=>{
        console.log(error)
    })
})
app.get('/', (req, res) => {
    res.json({ greetings: 'hello world' });
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));