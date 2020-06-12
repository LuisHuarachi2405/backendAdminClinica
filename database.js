const Sequelize = require('sequelize')

const UserModel = require('./models/users')
const PatientModel = require('./models/patients')

const sequelize = new Sequelize('AdminClinica', 'root', 'password', {
    dialect: 'mysql'
  })

const User = UserModel(sequelize, Sequelize)
const Patient = PatientModel(sequelize, Sequelize)

sequelize.sync({force :false})
  .then(()=>{
      console.log("tablas creadas");
      
  })

  module.exports = {
      User,
      Patient
  }
