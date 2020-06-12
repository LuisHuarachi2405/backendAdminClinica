module.exports = (sequelize, type) =>{
    return sequelize.define('users',{
        usuario_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        username: {
            type: type.STRING,
          },
        firstName: {
            type: type.STRING,
          },  
        lastName: {
            type: type.STRING
          },
        typeUser: {
            type: type.INTEGER,
          },
        email: {
            type: type.STRING,
          },
        password: {
            type: type.STRING,
          },
        estado: {
            type: type.INTEGER,
          },
    })
}