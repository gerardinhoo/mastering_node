const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

// PARSE HTML ESPECIALLY FORM
app.use(bodyParser.urlencoded({ extended: true }));


// RENDER PLAIN JS TRHOUGH EJS FILE FROM SERVER GET REQUEST
app.get("/users", (req, res) => {
    let user = [
        {
            name: "Gerard",
            age: 30
        },
        {
            name: "Odette",
            age: 25
        },
        {
            name: "Michel",
            age: 15
        },
        {
            name: "Dora",
            age: 18
        }
    ]

    res.render("user", { user: user })
})


// RENDER PLAIN JS TRHOUGH EJS FILE FROM SERVER GET REQUEST
app.get("/user/:name/:country", (req, res) => {
    let myName = req.params.name;
    let myCountry = req.params.country;
    res.render("index", { name: myName, country: myCountry })
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
})


// POST REQUEST
app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (username === "Gerardinho" && password === "12345") {
        res.redirect("/dashboard")
    }
})

// PARAMETERS - DYNAMIC PARAMETERS GET REQUEST
app.get("/users/:id/:username", (req, res) => {
    let user = req.params.username;
    let id = req.params.id
    res.send(`My name is ${user}`)

})


// LISTEN TO APP ON PORT 3000
app.listen("3000", () => {
    console.log("Listenning to App on 3000")
})