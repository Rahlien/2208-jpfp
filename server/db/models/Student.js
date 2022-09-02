const Sequelize = require('sequelize');
const db = require('../database');

 const Student = db.define('student', {
  // define your model here!
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'iconStudent.png'
  },
  gpa: {
    type: Sequelize.FLOAT(4, 1),
    allowNull: true
  }
});


module.exports = Student