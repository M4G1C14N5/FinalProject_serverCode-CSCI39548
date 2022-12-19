/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: { 
    type: Sequelize.STRING,
    allowNull: false
  
    
  },
  imageUrl: {
    type: Sequelize.STRING,
    //allowNUll: true,
    defaultValue: "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/cuny-upward/D85_3785R_19_crop_hor.jpg"

  },
});
 
// Export the student model
module.exports = Student;