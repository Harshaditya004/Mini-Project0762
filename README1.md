Instructions for Creating a Web Application for Mess Menu Formation System
1. Set Up the Project
Install necessary tools-

I)Install Node.js and MySQL.

II)Choose a code editor like VS Code or Notepad++.

III)Create a project folder and open it in the editor.

2. Database Setup (MySQL)
Open MySQL and create a database:
CREATE DATABASE mess_menu;
USE mess_menu;
--------------------
Create a Students Table:
CREATE TABLE students (
    reg_no VARCHAR(20) PRIMARY KEY,
    name VARCHAR(100),
    block VARCHAR(10),
    room_number VARCHAR(10),
    mess_name VARCHAR(50),
    mess_type ENUM('Veg', 'Non-Veg', 'Special', 'Night Mess')
);
--------------------
Create a Menu Suggestions Table:
CREATE TABLE menu_suggestions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reg_no VARCHAR(20),
    food_item VARCHAR(100),
    meal_type ENUM('Breakfast', 'Lunch', 'Snacks', 'Dinner', 'Night Mess'),
    feasibility BOOLEAN,
    FOREIGN KEY (reg_no) REFERENCES students(reg_no)
);
-------------------
4. Backend Development (Node.js + Express)
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
