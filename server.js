// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// =============================================================
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var tables = [{
    routeName: "table_1",
    name: "Trent",
    phone_number: "555-5555",
    email: "example@email.com",
    id: 1,
},
{
    routeName: "table_2",
    name: "Brent",
    phone_number: "666-6666",
    email: "example@email.com",
    id: 1,
},
{
    routeName: "table_3",
    name: "Grent",
    phone_number: "777-7777",
    email: "example@email.com",
    id: 1,
},
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./html/home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "./html/reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "./html/tables.html"));
});

//display all the reservations
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

//creating new reservation
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});