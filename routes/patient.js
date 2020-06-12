const express = require('express')
const router = express.Router();

const userController = require('../controllers/patient')

router.post('/createPatient', userController.createPatient)
router.put('/update/:patient_id', userController.actualizarEstado)
router.get('/porAtender', userController.listPorAtender)
router.get('/Atendidos',userController.listAtendido)

module.exports = router
