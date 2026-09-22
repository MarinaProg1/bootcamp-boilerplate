const express = require('express');
const router = express.Router();
const { getPacientes, createPaciente, deletePaciente, getPacienteById} = require('../controllers/pacientes.controller');

router.get('/', getPacientes);
router.get('/:id', getPacienteById)
router.post('/', createPaciente);
router.delete('/:id', deletePaciente);

module.exports = router;