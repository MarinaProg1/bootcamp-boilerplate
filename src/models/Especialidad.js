const mongoose = require('mongoose');

const especialidadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    unique: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria']
  },
  categoria: {
    type: String,
    required: [true, 'La categoría es obligatoria'],
    enum: ['Clínica', 'Quirúrgica', 'Diagnóstico', 'Terapéutica']
  },
  activo: {
    type: Boolean,
    default: true,
    select: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Especialidad', especialidadSchema);