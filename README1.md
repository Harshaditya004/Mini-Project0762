Instructions for Creating a Web Application for Mess Menu Formation System
1. Set Up the Project
Install necessary tools-

I)Install Node.js and MySQL.

II)Choose a code editor like VS Code or Notepad++.

III)Create a project folder and open it in the editor.

2. Database Setup (MySQL)
Open MySQL and create a database
CREATE DATABASE mess_menu_db;
USE mess_menu_db;
CREATE TABLE menu_suggestions (
 id INT AUTO_INCREMENT PRIMARY KEY,
 reg_no VARCHAR(10) NOT NULL,
 name VARCHAR(100) NOT NULL,
 block VARCHAR(50) NOT NULL,
 room_no INT NOT NULL,
 mess_name VARCHAR(100) NOT NULL,
 mess_type ENUM('Veg', 'Non-Veg', 'Special', 'Night Mess') NOT NULL,
 food_suggestion TEXT NOT NULL,
 meal_type ENUM('Breakfast', 'Lunch', 'Snacks', 'Dinner', 'Night Mess') NOT NULL,
 feasibility ENUM('Yes', 'No') NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-------------------
4. Backend Development (Node.js + Express)
Code:
3) const express = require("express");
4) const mysql = require("mysql2");
5) const bodyParser = require("body-parser");
6) const cors = require("cors");
7)
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
26)});
27)
28)app.post("/submit", (req, res) => {
 const {
 regNo, name, block, roomNo, messName, messType, foodSuggestion,
mealType, feasibility
 } = req.body;

 const sql = "INSERT INTO menu_suggestions (reg_no, name, block,
room_no, mess_name, mess_type, food_suggestion, meal_type, feasibility)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

 db.query(sql, [regNo, name, block, roomNo, messName, messType,
foodSuggestion, mealType, feasibility], (err, result) => {
 if (err) {
 res.status(500).json({ message: "Error saving data" });
 } else {
 res.status(200).json({ message: "Suggestion submitted
successfully!" });
 }
});
});
   
const PORT = 5000;
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
res.send("Welcome to the Mess Menu API");
})
-------------------------
Install Node.js and create a new project:
npm init -y
npm install express mysql cors body-parser multer json2xls
-------------------
Create a server.js file and write backend logic.
4. Frontend Development (HTML + JavaScript)
Create an projekt.html file with a form to collect user data.

Use JavaScript (or React) to send data to the backend.

5. Report Generation (Excel/PDF)
Install json2xls for Excel reports and pdfkit for PDFs.

Implement an API to export data in Excel/PDF format.

6. Testing and Deployment
Test APIs using Postman.

Run the server:
node server.js
------------------------
