const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Harshaditya16",
    database: "mess_menu_db"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});

app.post("/submit", (req, res) => {
    const { regNo, name, block, roomNo, messName, messType, foodSuggestion, mealType, feasibility } = req.body;

    const sql = "INSERT INTO menu_suggestions (reg_no, name, block, room_no, mess_name, mess_type, food_suggestion, meal_type, feasibility) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [regNo, name, block, roomNo, messName, messType, foodSuggestion, mealType, feasibility], (err, result) => {
        if (err) {
            res.status(500).json({ message: "Error saving data" });
        } else {
            res.status(200).json({ message: "Suggestion submitted successfully!" });
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to the Mess Menu API");
});
