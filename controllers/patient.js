const { Patient } = require('../database')
const bcrypt = require('bcryptjs')

module.exports = {
    createPatient: async (req, res, next) =>{
        const usuario = await Patient.create(req.body)
        res.status(200).json(usuario)
    },

    actualizarEstado : async (req, res, next) =>{
        await Patient.update(req.body, {
            where: { patient_id :req.params.patient_id}
        });

       res.status(200).json({success: 'paciente modificado'})
    },

    listPorAtender : async (req, res, next) =>{
        const patients = await Patient.findAll({ where: { state_patient_id :1}})
        res.status(200).json(patients)
    },

    listAtendido : async (req, res, next) =>{
        const patients = await Patient.findAll({ where: { state_patient_id :2}})
        res.status(200).json(patients)
    },


}