const ConsultaMedica = require('../models/ConsultaMedica');
const respuestaEstandar = require('../utils/respuestaEstandar');

const getConsultaMedica = async (req, res) => {
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
        if (sintomas){
            filter.sintomas = sintomas;
        }
        const consultasMedicas = await ConsultaMedica.find(filter).populate('paciente').populate('medico');   

        return respuestaEstandar(res, 200, true, 'Consultas medicas obtenidas exitosamente', consultasMedicas);
    } catch (error) {
        return respuestaEstandar(res, 500, false, 'Error al obtener consultas medicas', error.message);
    }   
}
const getConsultaMedicaId = async (req, res)=>{
    try{
        const { id } = req.params;
        const consulta = await ConsultaMedica.findById(id);

         return respuestaEstandar(res, 200, true, 'Consulta medica obtenida exitosamente', consulta);

    }catch (error){
      return respuestaEstandar(res, 500, false, 'Error al obtener consulta medica', error.message);
    }

}

const createConsultaMedica = async(req, res)=> {
    try{
     const nuevaConsulta = await ConsultaMedica.create(req.body);
       return respuestaEstandar(res, 201, true, 'Consulta medica creada exitosamente', nuevaConsulta);

    } catch (error) {

        if (error.name === 'ValidationError') {
            const errores = Object.values(error.errors).map(err => err.message);
            return respuestaEstandar(res, 400, false, 'Error de validación', errores);
        }
        return respuestaEstandar(res, 500, false, 'Error al crear la consulta médica', error.message);
    }  
}

const deleteConsultaMedica  = async (req, res) => {
    try {

        const { id } = req.params;

        const consultaBorrada = await ConsultaMedica.findByIdAndUpdate(
            id, 
            { activo: false },
            { new: true }
        );

        if (!consultaBorrada) {
            return respuestaEstandar(res, 404, false, 'Consulta medica no encontrada con ID ${id}');
        }
        
        return respuestaEstandar(res, 200, true, 'Consulta médica eliminada exitosamente',consultaBorrada);
    } catch (error) {
        console.error('Error al eliminar la consulta medica:', error);
        return respuestaEstandar(res, 400, false, 'ID con formato invalido', error.message);
    }
};
const modificarConsultaMedica  = async (req, res) => {
    try {

        const { id } = req.params;

        const consultaModificada = await ConsultaMedica.findByIdAndUpdate(
            id, 
            {paciente : req.paciente, 
             medico : req.medico, 
             historiaClinica : req.historiaClinica, 
             fecha : req.fecha, 
             motivoConsulta : req.motivoConsulta,
             sintomas : req.sintomas,
             diagnostico : req.diagnostico,
             tratamiento : req.tratamiento,
             observaciones : req.observaciones
            },
            { new: true }
        );

        if (!consultaBorrada) {
            return respuestaEstandar(res, 404, false, 'Consulta medica no encontrada con ID ${id}');
        }
        
        return respuestaEstandar(res, 200, true, 'Consulta médica modificada exitosamente',consultaModificada);
    } catch (error) {
        console.error('Error al modificar la consulta medica:', error);
        return respuestaEstandar(res, 400, false, 'ID con formato invalido', error.message);
    }
};
module.exports = {
    getConsultaMedica,
    getConsultaMedicaId,
    createConsultaMedica,
    deleteConsultaMedica,
    modificarConsultaMedica
}
