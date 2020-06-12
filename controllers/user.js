const { User } = require('../database')
const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res, next) =>{
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const usuario = await User.create(req.body)
        
        res.status(200).json(usuario)
    },


    login: async (req, res, next) =>{
        const usuario = await User.findOne({ where: { username :req.body.username}})
        if(usuario){
            const comparacion = bcrypt.compareSync(req.body.password, usuario.password)
            if(comparacion){
                res.status(200).json(usuario)
            }else{
                res.status(404).json({message: "error en credenciales"})
            }
        }else{
            res.status(404).json({message: "error en credenciales"})
        }
    },


    update: async (req, res, next) => {
        await User.update(req.body, {
            where: { usuario_id :req.params.usuario_id}
        });

       res.status(200).json({success: 'usuario modificado'})
    }
}