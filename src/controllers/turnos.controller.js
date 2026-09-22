const Paciente = require ('../models/Paciente');
const Turno = require('../models/Turno');
const respuestaEstandar = require('../utils/respuestaEstandar');

const getTurnos = async (req, res) => {
    try {
        const turnos = await Turno.find({ activo: true }).populate('paciente');
        return respuestaEstandar(res, 200, true, 'Turnos obtenidos exitosamente', turnos);
    } catch (error) {
         return respuestaEstandar(res, 500, false, 'Error interno del servidor', error.message);
    }
};

const createTurno = async (req, res) => {
    try {

       const nuevoTurno = await Turno.create(req.body);
       
        return respuestaEstandar(res, 201, true, 'Turno creado exitosamente', nuevoTurno);

    } catch (error) {

        if (error.name === 'ValidationError') {
            const errores = Object.values(error.errors).map(err => err.message);
            return respuestaEstandar(res, 400, false, 'Error de validación', errores);
    }

    return respuestaEstandar(res, 500, false, 'Error interno del servidor', error.message);
  };
};

const deleteTurno = async (req, res) => {
    try {

        const { id } = req.params;

        const turnoBorrado = await Turno.findByIdAndUpdate(
            id, 
            { activo: false },
            { estado: 'cancelado' },
            { new: true }
        );

        if (!turnoBorrado) {
            return respuestaEstandar(res, 404, false, 'Turno no encontrado con ID ${id}');
        }
        
        return respuestaEstandar(res, 200, true, 'Turno eliminado exitosamente', turnoBorrado);
    } catch (error) {
        console.error('Error al eliminar el turno:', error);
        return respuestaEstandar(res, 400, false, 'ID con formato invalido', error.message);
    }
};

const crearTurnoAsistencia = async (req, res) => {
  try {
    const { paciente, turno } = req.body;
    let pacienteId;

    // PASO 1: Busco si el paciente ya existe por DNI
    let pacienteExistente = await Paciente.findOne({ dni: paciente.dni });

    if (pacienteExistente) {
      pacienteId = pacienteExistente._id; // Si existe, uso ese ID
    } else {
      // Si NO existe, lo creo
      const nuevoPaciente = await Paciente.create(paciente);
      pacienteId = nuevoPaciente._id;
    }

    // PASO 2: Creo el turno con el ID del paciente
    const nuevoTurno = await Turno.create({
      ...turno,
      paciente: pacienteId
    });

    return respuestaEstandar(res, 201, true, 'Turno y paciente registrados exitosamente', nuevoTurno);
    
  } catch (error) {
    return respuestaEstandar(res, 500, false, 'Error al registrar asistencia', error.message);
  }
};

const marcarAtendido = async (req, res) => {
    try {
        const { id } = req.params;

        const turnoActualizado = await Turno.findByIdAndUpdate(
            id,
            { estado: 'atendido'},
            { new: true }
        );

        if ( !turnoActualizado) return respuestaEstandar(res, 404, false, 'Turno No Encontrado' , id);
        return respuestaEstandar(res, 200, true, 'Turno Actualizado', turnoActualizado);
    } catch (error) {
        return respuestaEstandar(res, 500, false, 'Error de Servidor', error.message);
    }
};


module.exports = { getTurnos, createTurno, deleteTurno, crearTurnoAsistencia, marcarAtendido };