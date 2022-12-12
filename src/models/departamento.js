const mongoose = require("mongoose");

const departamentoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    usuarios: {
        type: String,
        required: true
    },
    Campo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Departamento', departamentoSchema);