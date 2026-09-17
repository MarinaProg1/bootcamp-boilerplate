const mongoose = require('mongoose');

const HistoriaClinicaSchema = new mongoose.Schema({
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: [true, 'El ID del paciente es obligatorio'],
    },
    medico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medico',
       
    },
    fecha: {
        type: Date,
        required: [true, 'La fecha del historia clinica es obligatoria'],
        validate: {
            validator: function(value) {
                return value >= new Date();
            },
            message: 'La fecha del historia clinica debe ser una fecha futura'
        }
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
    motivoConsulta: {
         type: String,
         required: [true, 'El motivo de la consulta es obligatorio']
    },
    sintomas: {
         type: [String],
         default: []
    },
    diagnostico: {
        type: String,
        required: [true, 'El diagnóstico es obligatorio'],
    },
    tratamiento: {
        type: String,
        required: [true, 'El tratamiento es obligatorio'],
    },
    observaciones: {
        type: String,
        maxlength: [500, 'Las observaciones no pueden superar los 500 caracteres'],
    },
    activo: {
        type: Boolean,
        default: true,
        select: false
    },
 
}, {
    timestamps: true,
});

   HistoriaClinicaSchema.set('toJSON', {
    transform: (documento, historiaClinicaRetorno) => {
        historiaClinicaRetorno.id = historiaClinicaRetorno._id;
        delete historiaClinicaRetorno._id;
        delete historiaClinicaRetorno .__v;
        return historiaClinicaRetorno;
    }
});

module.exports = mongoose.model('HistoriaClinica', HistoriaClinicaSchema);