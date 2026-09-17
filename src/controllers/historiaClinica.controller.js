const HistoriaClinica = require('../models/HistoriaClinica');
const respuestaEstandar = require('../utils/respuestaEstandar');

const getHistoriasClinicas = async (req, res) => {
    try {
        const { pacienteId, medicoId, fecha, sintomas} = req.query;

        const  filter = {activo: true};
        if (pacienteId) {
            filter.paciente = pacienteId;
        }
        if (medicoId) {
            filter.medico = medicoId;
        }
        if (fecha) {
            filter.fecha = fecha;
        }
        if (sintomas) {
            filter.sintomas = { $in: sintomas.split(',') };
        }
        const historiasClinicas = await HistoriaClinica.find(filter).populate('paciente').populate('medico',"nombre especialidad");   

        return respuestaEstandar(res, 200, true, 'Historias clínicas obtenidas exitosamente', historiasClinicas);
    } catch (error) {
        return respuestaEstandar(res, 500, false, 'Error al obtener las historias clínicas', error.message);
    }   
}

const getHistoriaClinicaById = async (req, res) => {
    try {
        const { id } = req.params;
        const historiaClinica = await HistoriaClinica.findById(id);

        return respuestaEstandar(res, 200, true, 'Historia clínica obtenida exitosamente', historiaClinica);
    } catch (error) {
        return respuestaEstandar(res, 500, false, 'Error al obtener la historia clínica', error.message);
    }
}

const createHistoriaClinica = async (req, res) => {
    try {
        const nuevaHistoriaClinica = await HistoriaClinica.create(req.body);   

        return respuestaEstandar(res, 201, true, 'Historia clínica creada exitosamente', nuevaHistoriaClinica);

    } catch (error) {

        if (error.name === 'ValidationError') {
            const errores = Object.values(error.errors).map(err => err.message);
            return respuestaEstandar(res, 400, false, 'Error de validación', errores);
        }
        return respuestaEstandar(res, 500, false, 'Error al crear la historia clínica', error.message);
    }
}

const deleteHistoriaClinica  = async (req, res) => {
    try {

        const { id } = req.params;

        const historiaBorrada = await HistoriaClinica.findByIdAndUpdate(
            id, 
            { activo: false },
            { new: true }
        );

        if (!historiaBorrada) {
            return respuestaEstandar(res, 404, false, 'Historia clínica no encontrada con ID ${id}');
        }
        
        return respuestaEstandar(res, 200, true, 'Historia clínica eliminada exitosamente', historiaBorrada);
    } catch (error) {
        console.error('Error al eliminar la historia clínica:', error);
        return respuestaEstandar(res, 400, false, 'ID con formato invalido', error.message);
    }
};

module.exports = {
    getHistoriasClinicas,
    getHistoriaClinicaById,
    createHistoriaClinica,
    deleteHistoriaClinica
};