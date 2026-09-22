const Especialidad = require('../models/Especialidad');
const respuestaEstandar = require('../utils/respuestaEstandar');

const getEspecialidades = async (req, res) => {
  try {
    const especialidades = await Especialidad.find({ activo: true });
    return respuestaEstandar(res, 200, true, 'Especialidades obtenidas exitosamente', especialidades);
  } catch (error) {
    return respuestaEstandar(res, 500, false, 'Error al obtener las especialidades', error.message);
  }
};

const getEspecialidadById = async (req, res) => {
  try {
    const especialidad = await Especialidad.findById(req.params.id);
    if (!especialidad) {
      return respuestaEstandar(res, 404, false, 'Especialidad no encontrada');
    }
    return respuestaEstandar(res, 200, true, 'Especialidad obtenida', especialidad);
  } catch (error) {
    return respuestaEstandar(res, 500, false, 'Error al obtener la especialidad', error.message);
  }
};

const createEspecialidad = async (req, res) => {
  try {
    const nuevaEspecialidad = await Especialidad.create(req.body);
    return respuestaEstandar(res, 201, true, 'Especialidad creada exitosamente', nuevaEspecialidad);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errores = Object.values(error.errors).map(err => err.message);
      return respuestaEstandar(res, 400, false, 'Error de validación', errores);
    }
    return respuestaEstandar(res, 500, false, 'Error al crear la especialidad', error.message);
  }
};

const updateEspecialidad = async (req, res) => {
  try {
    const especialidad = await Especialidad.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!especialidad) {
      return respuestaEstandar(res, 404, false, 'Especialidad no encontrada');
    }
    return respuestaEstandar(res, 200, true, 'Especialidad actualizada', especialidad);
  } catch (error) {
    return respuestaEstandar(res, 500, false, 'Error al actualizar', error.message);
  }
};

const deleteEspecialidad = async (req, res) => {
    try {

        const { id } = req.params;

        const especialidadBorrado = await Especialidad.findByIdAndUpdate(
            id, 
            { activo: false },
            { new: true }
        );

        if (!especialidadBorrado) {
            return respuestaEstandar(res, 404, false, 'Especialidad no encontrado con ID ${id}');
        }
        
        return respuestaEstandar(res, 200, true,  'Especialidad eliminado exitosamente', especialidadBorrado);
    } catch (error) {
        console.error('Error al eliminar el especialidad:', error);
        return respuestaEstandar(res, 400, false, 'ID con formato invalido', error.message);
    }
};

module.exports = {
  getEspecialidades,
  getEspecialidadById,
  createEspecialidad,
  updateEspecialidad,
  deleteEspecialidad
};