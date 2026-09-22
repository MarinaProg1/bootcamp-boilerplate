const mongoose = require('mongoose');

const HistoriaClinicaSchema = new mongoose.Schema({
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true,
        unique: true
    },

    antecedentes: {
        alergias: {
            type: [String],
            default: []
        },

        enfermedadesCronicas: {
            type: [String],
            default: []
        },

        medicamentosHabituales: {
            type: [String],
            default: []
        },

        cirugiasPrevias: {
            type: [String],
            default: []
        },

        internacionesPrevias: {
            type: [String],
            default: []
        },

        antecedentesFamiliares: {
            type: [String],
            default: []
        },

        vacunas: {
            type: [String],
            default: []
        },

        habitos: {
            tabaquismo: {
                type: Boolean,
                default: false
            },

            alcohol: {
                type: Boolean,
                default: false
            },

            actividadFisica: {
                type: String,
                enum: ['Ninguna', 'Baja', 'Moderada', 'Alta'],
                default: 'Ninguna'
            }
        },

        otros: {
            type: String,
            maxlength: 500
        }
    },

    activo: {
        type: Boolean,
        default: true,
        select: false
    }

}, {
    timestamps: true
});

HistoriaClinicaSchema.set('toJSON', {
    transform: (documento, retorno) => {
        retorno.id = retorno._id;
        delete retorno._id;
        delete retorno.__v;
        return retorno;
    }
});

module.exports = mongoose.model(
    'HistoriaClinica',
    HistoriaClinicaSchema
);