const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del paciente es obligatorio'],
        uppercase: true,
    },
    dni: {
        type: String,
        required: [true, 'El DNI del paciente es obligatorio'],
        unique: [true, 'El DNI del paciente debe ser único'],
        match: [/^[0-9]{7,8}$/, 'El DNI debe tener 8 dígitos']
    },
    direccion: {
        calle: {
          type: String,
          required: [true, 'La calle es obligatoria']
         },
        numero: {
          type: String,
          required: [true, 'El número es obligatorio']
         },
        piso: {
          type: String
        },
        departamento: {
          type: String
        },
        barrio: {
          type: String
        }
      },
    email: {
        type: String,
        required: [true, 'El correo electrónico del paciente es obligatorio'],
        unique: [true, 'El correo electrónico del paciente debe ser único'],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'El correo electrónico no es válido']
    },
    telefono: {
        tipo: {
            type: String,
            enum: ['CELULAR', 'FIJO', 'TRABAJO']
        },
        codigoArea: {
            type: String,
            required: true,
            match: [/^[0-9]{2,5}$/, 'El código de área no es válido']
        },
        numero: {
            type: String,
            required: true,
            match: [/^[0-9]{6,10}$/, 'El número de teléfono no es válido']
        }
    },
    obraSocial: {
        nombre: {
            type: String,
            required: [true, 'El nombre de la obra social es obligatorio'],
            enum: {
                values: ['PAMI', 'OSPEL', 'OSDE', 'SANCOR', 'OSECAC', 'SWISS MEDICAL', 'GALENO', 'MEDICUS', 'OMINT', 'FEMEBA', 'OTRAS', 'NINGUNA'],
                message: '{VALUE} no es una obra social válida. Debe ser una de las siguientes: PAMI, OSPEL, OSDE, SANCOR, OSECAC, SWISS MEDICAL, GALENO, MEDICUS, OMINT, FEMEBA, OTRAS, NINGUNA'
            }
        },
        numeroAfiliado: {
            type: String
        },
    },
}, {
    timestamps: true
});

pacienteSchema.set('toJSON', {
    transform: (documento, pacienteRetorno) => {
        pacienteRetorno.id = pacienteRetorno._id;
        delete pacienteRetorno._id;
        delete pacienteRetorno.__v;
    }
});

module.exports = mongoose.model('Paciente', pacienteSchema);