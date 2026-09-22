require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database');
const app = express();

connectDB();

const auditMiddleware = require('./src/middlewares/auditoria.middleware');
const errorHandlerMiddleware = require('./src/middlewares/errorHandler.middleware');

const turnosRoutes = require('./src/routes/turnos.routes');
const pacientesRoutes = require('./src/routes/paciente.routes');
const historiaClinicaRoutes = require('./src/routes/historiaClinica.routes');
const consultaMedicaRoutes = require('./src/routes/consultaMedica.routes');



app.use(express.json());
app.use(auditMiddleware);

app.use('/api/v1/turnos', turnosRoutes);
app.use('/api/v1/pacientes', pacientesRoutes);
app.use('/api/v1/historias-clinicas', historiaClinicaRoutes);
app.use('/api/v1/consulta-medica', consultaMedicaRoutes);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`============SERVIDOR MUNICIPAL ACTIVO==========`);
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    console.log(`Entorno: ${process.env.ENTORNO || 'Local'} `);
    console.log(`===============================================`);
});