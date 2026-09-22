const express = require('express');
const router = express.Router();
const { 
  getEspecialidades, 
  getEspecialidadById,
  createEspecialidad,
  updateEspecialidad,
  deleteEspecialidad
} = require('../controllers/Especialidades.controller');

router.get('/', getEspecialidades); 
router.get('/:id', getEspecialidadById); 
router.post('/', createEspecialidad); 
router.put('/:id', updateEspecialidad); 
router.delete('/:id', deleteEspecialidad); 

module.exports = router;