// src/controllers/medico.controller.js
const Medico = require('../models/medico.js');
const respuestaEstandar = require('../utils/respuestaEstandar');

// Controlador para obtener todos los médicos
const getMedicos = async (req, res) => {
    try {
        const medicos = await Medico.find({ activo: true }).populate('especialidad');
        return respuestaEstandar(res, 200, true, 'Médicos obtenidos exitosamente', medicos);
    } catch (error) {
        return respuestaEstandar(res, 500, false, 'Error interno del servidor', error.message);
    }
};
const getMedicoById = async (req, res) => {
    try {
        const { id } = req.params;
        const medico = await Medico.findById(id).populate('especialidad');
        if (!medico) {
            return respuestaEstandar(res, 404, false, 'Médico no encontrado');
        }
        return respuestaEstandar(res, 200, true, 'Médico obtenido exitosamente', medico);
    } catch (error) {
        return respuestaEstandar(res, 500, false, 'Error interno del servidor', error.message);
    }
};

// Controlador para crear un nuevo médico
const createMedico = async (req, res) => {
    try {
        const nuevoMedico = await Medico.create(req.body);
        return respuestaEstandar(res, 201, true, 'Médico creado exitosamente', nuevoMedico);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errores = Object.values(error.errors).map(err => err.message);
            return respuestaEstandar(res, 400, false, 'Error de validación', errores);
        }
        return respuestaEstandar(res, 500, false, 'Error interno del servidor', error.message);
    }
};

// Controlador para eliminar un médico por su ID
const deleteMedico = async (req, res) => {
    try {

        const { id } = req.params;

        const medicoBorrado = await Medico.findByIdAndUpdate(
            id, 
            { activo: false },
            { new: true }
        );

        if (!medicoBorrado) {
            return respuestaEstandar(res, 404, false, 'Medico no encontrado con ID ${id}');
        }
        
        return respuestaEstandar(res, 200, true, 'Medico eliminado exitosamente', medicoBorrado );
    } catch (error) {
        console.error('Error al eliminar el Medico:', error);
        return respuestaEstandar(res, 400, false, 'ID con formato invalido', error.message);
    }
};

module.exports = { getMedicos, getMedicoById, createMedico, deleteMedico };