const express = require('express');
const router = express.Router();
const { getMedicos, getMedicoById, createMedico, deleteMedico} = require('../controllers/medicos.controller.js');

router.get('/', getMedicos);
router.post('/', createMedico);
router.get('/:id', getMedicoById);
router.delete('/:id', deleteMedico);  

module.exports = router;