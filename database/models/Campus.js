/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl:{
    type: Sequelize.STRING,
    defaultValue:"https://i.picsum.photos/id/214/500/500.jpg?hmac=qr5jequsSH_22JUygvSKOowwlXMnrp5ZUz8_ioIcw9U"
  },
  
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    
  }
});

// Export the campus model
module.exports = Campus;