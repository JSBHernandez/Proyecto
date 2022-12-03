const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// usuario
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// obtener todos los usuarios
router.get("/users", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// obtener un usuario
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// actualizar usuario
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { username, email, password, status, role, departamento } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { username, email, password, status, role, departamento } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// eliminar usuario
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

const comentSchema = require("../models/coment");

// consultar un comentario
router.get("/coment/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// actualizar comentario
router.put("/coment/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, cargo, area, activo, comentario, foto } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { nombre, cargo, area, activo, comentario, foto } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

const departamentoSchema = require("../models/departamento")

// departamento
router.post("/departamento", (req, res) => {
    const departamento = departamentoSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;