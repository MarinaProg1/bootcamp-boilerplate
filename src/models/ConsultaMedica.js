const mongoose = require('mongoose');

const ConsultaMedicaSchema = new mongoose.Schema({

    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: [true, 'El ID del paciente es obligatorio']
    },

    medico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medico',
        required: [true, 'El ID del médico es obligatorio']
    },

    historiaClinica: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HistoriaClinica',
        required: true
    },

    fecha: {
        type: Date,
        required: [true, 'La fecha de la consulta es obligatoria'],
        default: Date.now
    },

    motivoConsulta: {
        type: String,
        required: [true, 'El motivo de la consulta es obligatorio'],
        trim: true
    },

    sintomas: {
        type: [String],
        default: []
    },

    diagnostico: {
        type: String,
        required: [true, 'El diagnóstico es obligatorio'],
        trim: true
    },

    tratamiento: {
        type: String,
        required: [true, 'El tratamiento es obligatorio'],
        trim: true
    },

    observaciones: {
        type: String,
        maxlength: [
            500,
            'Las observaciones no pueden superar los 500 caracteres'
        ],
        trim: true
    },
     activo: {
        type: Boolean,
        default: true,
        select: false
    }

}, {
    timestamps: true
});

ConsultaMedicaSchema.set('toJSON', {
    transform: (documento, retorno) => {
        retorno.id = retorno._id;
        delete retorno._id;
        delete retorno.__v;
        return retorno;
    }
});

module.exports = mongoose.model(
    'ConsultaMedica',
    ConsultaMedicaSchema
);