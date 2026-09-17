const express = require('express');
const router = express.Router();
const { getHistoriasClinicas, getHistoriaClinicaById, createHistoriaClinica, deleteHistoriaClinica } = require('../controllers/historiaClinica.controller');   

router.get('/', getHistoriasClinicas);
router.get('/:id', getHistoriaClinicaById);
router.post('/', createHistoriaClinica);
router.delete('/:id', deleteHistoriaClinica);

module.exports = router;