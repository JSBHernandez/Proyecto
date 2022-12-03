const express = require("express");
const departamentoSchema = require("../models/departamento")

const router = express.Router();

// departamento
router.post("/departamento", (req, res) => {
    const departamento = departamentoSchema(req.body);
    departamento
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;