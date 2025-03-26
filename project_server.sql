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
