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
var tables = [
    {
        routeName: "table_1",
        name: "Trent",
        phone_number: "555-5555",
        id: 1,
    },
    {
        routeName: "table_2",
        name: "Brent",
        phone_number: "666-6666",
        id: 1,
    },
    {
        routeName: "table_3",
        name: "Grent",
        phone_number: "777-7777",
        id: 1,
    },
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
