const express = require("express");
const userSchema = require("../models/user");
const bcryptjs = require("bcryptjs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = express.Router();

// usuario
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

const activosSchema = require("../models/activos");

// activos
router.post("/activos", (req, res) => {
    const activos = activosSchema(req.body);
    activos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// consulta activos
router.get("/activos", (req, res) => {
    activosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// actualizar activos
router.put("/activos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, status, UsuarioResponsable, departamento, foto } = req.body;
    activosSchema
        .updateOne({ _id: id }, { $set: { nombre, descripcion, precio, status, UsuarioResponsable, departamento, foto } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;