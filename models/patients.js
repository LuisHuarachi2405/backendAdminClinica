module.exports = (sequelize, type) =>{
    return sequelize.define('patients',{
        patient_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        firstNamePatient: {
            type: type.STRING,
          },
        lastNamePatient: {
            type: type.STRING,
          },  
        cellphone: {
            type: type.INTEGER(9)
          },
        sure: {
            type: type.STRING,
          },
        doctor: {
            type: type.STRING,
          },
        oa: {
            type: type.STRING,
            allowNull: true
          },
        type_patient_id: {
            type: type.INTEGER
          },
        user_delivery_id: {
            type: type.INTEGER,
            allowNull: true
          },
        usuario_id: {
            type: type.INTEGER
          },
        state_patient_id: {
            type: type.INTEGER
          },
        estado: {
            type: type.INTEGER,
          },
    })
}