const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del médico es obligatorio'],
        uppercase: true,
    },
    matricula: {
        type: String,
        required: [true, 'La matrícula es obligatoria'],
        unique: [true, 'Esta matrícula ya está registrada'],
    },
    especialidad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Especialidad',
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
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: [true, 'Este email ya está registrado'],
        match: [/\S+@\S+\.\S+/, 'El email debe tener un formato válido'],
    },
    activo: {
        type: Boolean,
        default: true,
        select: false
    },
}, {
    timestamps: true,
});

medicoSchema.set('toJSON', {
    transform: (documento, medicoRetorno) => {
        medicoRetorno.id = medicoRetorno._id;
        delete medicoRetorno._id;
        delete medicoRetorno.__v;
        return medicoRetorno;
    }
});

module.exports = mongoose.model('Medico', medicoSchema);