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
    const fullName = req.body.fullName
    console.log('addresOne',addresOne)
    console.log('addresTwo',addresTwo)
    console.log('cityAdd',cityAdd)
    console.log('stateR',stateR)
    console.log('postalCode',postalCode)
    console.log('countrySelected',countrySelected)
    console.log('currentUserIdVal',currentUserIdVal)
    console.log('fullName',fullName)
    const sqlQuery = "INSERT INTO address (user_id_address,full_Name,address_line_1,address_line_2,city ,state_region, zip_code, country) VALUES ($1,$2,$3,$4,$5,$6,$7,$8);"
    pool.query(sqlQuery, [currentUserIdVal,fullName,addresOne, addresTwo,cityAdd,stateR,postalCode,countrySelected])
        .then((response) => {
            res.send(response)
        })
})
app.post('/addingToSalesHistory',(req,res)=>{
    const userIdValue = req.body.userId
    const productIdValue = req.body.products_id
    const StoreIDValue = req.body.stores_id
    const count_productVal = req.body.count_product
    const deliveryTime= 30
    console.log('userIdValue',userIdValue)
    console.log('productIdValue',productIdValue)
    console.log('StoreIDValue',StoreIDValue)
    console.log('count_productVal',count_productVal)

    const sqlQuery = "INSERT INTO saleshistory (user_id_sales,stores_id_sales,products_id,count_product,delivery_time) VALUES ($1,$2,$3,$4,$5);"
    pool.query(sqlQuery, [userIdValue,StoreIDValue, productIdValue, count_productVal,deliveryTime])
        .then((response) => {
          res.send("Data has been inserteed into the SALES table")
            // res.send(response)
        })

})

app.post('/addingToSalesHistoryDelete',(req,res)=>{
    const userIdValueDelete = req.body.userId
    const productIdValueDelete = req.body.products_id
    const StoreIDValueDelete = req.body.stores_id
    const count_productValDelete = req.body.count_product
    const deliveryTime= 30
    console.log('userIdValueDelete',userIdValueDelete)
    console.log('productIdValueDelete',productIdValueDelete)
    console.log('StoreIDValueDelete',StoreIDValueDelete)
    console.log('count_productValDelete',count_productValDelete)
    pool.query(`DELETE FROM sales WHERE  user_id_sales =$1 AND stores_id_sales = $2 AND products_id=$3 AND count_product=$4;`,[userIdValueDelete,StoreIDValueDelete,productIdValueDelete,count_productValDelete])
    .then((response)=>{
        res.send("Deleted the Address corresponding to the userId")
    })
})
app.post('/reigisterAddressUpdate',(req,res)=>{
    const addresOneUpdate= req.body.addressLineOneUpdate
    const addresTwoUpdate = req.body.addressLineTwoUpdate
    const cityAddUpdate= req.body.cityAddressUpdate
    const stateRUpdate= req.body.stateRegionUpdate
    const postalCodeUpdate= req.body.postalCodeUpdate
    const countrySelectedUpdate =req.body.countryUpdate
    const currentUserIdVal = req.body.currentUserId

    console.log('addresOne',addresOneUpdate)
    console.log('addresTwo',addresTwoUpdate)
    console.log('cityAdd',cityAddUpdate)
    console.log('stateR',stateRUpdate)
    console.log('postalCode',postalCodeUpdate)
    console.log('countrySelected',countrySelectedUpdate)
    console.log('currentUserIdVal',currentUserIdVal)
    pool.query(`UPDATE address SET  user_id_address =$1, address_line_1 =$2, address_line_2 =$3, city = $4,state_region=$5, zip_code =$6, country= $7 WHERE user_id_address = $1;`,[currentUserIdVal,addresOneUpdate,addresTwoUpdate,cityAddUpdate,stateRUpdate,postalCodeUpdate,countrySelectedUpdate])
    .then((response)=>{
        res.send('Data Updated. Everything is Good. You can refresh the page, i cant believe im talking to myself')
    })
})

app.get('/gettingAddress',(req,res) => {
    return pool.query(`SELECT * FROM address;`)
    .then((response) => {
        res.json(response.rows)
    })
    .catch((error) => {
        console.log(error.message)
    })
})

app.post('/gettingAddressId',(req,res) => {
    const userIdVal = req.body.userIdInt
    console.log('userIdVal',userIdVal)
    return pool.query(`SELECT * FROM address WHERE user_id_address = $1;`,[userIdVal])
    .then((response) => {
        res.json(response.rows)
    })
    .catch((error) => {
        console.log(error.message)
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

app.post('/removingAddress',(req,res)=>{
    const userIdValue = req.body.userId

    console.log('UserIdValue',userIdValue)
    pool.query(`DELETE FROM address WHERE  user_id_address =$1;`,[userIdValue])
    .then((response)=>{
        res.send("Deleted the Address corresponding to the userId")
    })
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

app.post ('/removingAllProducts',(req,res)=>{
    let userIdVal = req.body.userId
    pool.query(`DELETE FROM sales WHERE  user_id_sales =$1 ;`,[userIdVal])
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

app.post("/allSalesHistory",(req,res)=>{
    console.log("checkout point 1 for allSalesHistory")
    const currentUserIdLoggedIn = req.body.userIdInt
    console.log('currentUserIdLoggedIn',currentUserIdLoggedIn)

    return pool.query(`SELECT * FROM salesHistory
    JOIN products ON products.id = products_id
    JOIN users ON users.id = user_id_sales
    JOIN stores ON stores.id = stores_id_sales
    WHERE users.id = $1 ;`,[currentUserIdLoggedIn])
        .then((response) => {

            //res.send("hello world")
            res.json(response.rows)
        })
        .catch((error) => {
            console.log(error.message)
        })

})
app.post('/pay', async (req, res) => {
    const {email} = req.body
    const paymentIntent = await stripe.checkout.sessions.create({
     amount:5000,
     currency:'usd',
     metadata:{integration_check: 'accept_a_payment'},
     recepient_email :email,
    });
    res.json({'client_secret':paymentIntent['client_secret']})
    res.redirect(303, session.url);
  });

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));