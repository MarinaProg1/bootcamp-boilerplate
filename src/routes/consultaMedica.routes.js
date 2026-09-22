const express = require('express');
const router = express.Router();
const { getConsultaMedica, getConsultaMedicaId, createConsultaMedica, deleteConsultaMedica, modificarConsultaMedica } = require('../controllers/ConsultaMedica.controller');   

router.get('/', getConsultaMedica);
router.get('/:id', getConsultaMedicaId);
router.post('/', createConsultaMedica);
router.delete('/:id', deleteConsultaMedica);
router.patch('/:id', modificarConsultaMedica)

module.exports = router;