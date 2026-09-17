const express = require('express');
const router = express.Router();
const { getTurnos, createTurno, deleteTurno, crearTurnoAsistencia, marcarAtendido } = require('../controllers/turnos.controller');

router.get('/', getTurnos);
router.post('/', createTurno);
router.post('/asistencia', crearTurnoAsistencia);
router.patch('/:id/atendido', marcarAtendido);
router.delete('/:id', deleteTurno);

module.exports = router;