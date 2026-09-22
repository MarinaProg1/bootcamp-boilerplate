const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.DATABASE_URL_ATLAS) {
            throw new Error('La variable de entorno DATABASE_URL_ATLAS no está definida. Por favor verifica tu archivo .env');
        }
        await mongoose.connect(process.env.DATABASE_URL_ATLAS);
    } catch (error) {
        console.error('🔴 Error al conectar a la base de datos:', error.message || error);
        process.exit(1);
    }
};

mongoose.connection.on('connected', () => {
    console.log('🟢 Conexión a la base de datos establecida');
});

mongoose.connection.on('disconnected', () => {
    console.log('🟡 Conexión a la base de datos perdida');
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('🔴 Conexión a la base de datos cerrada por terminación de la aplicación');
    process.exit(0);
});

module.exports = connectDB;