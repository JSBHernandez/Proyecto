const mongoose = require("mongoose");

const activosSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    decripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    UsuarioResponsable: {
        type: String,
        required: true
    },
    departamento: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Activos', activosSchema);