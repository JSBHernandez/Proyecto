const mongoose = require("mongoose");

const comentSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    activo: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Coment', comentSchema);