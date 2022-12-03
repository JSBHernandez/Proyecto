const express = require("express");
const activosSchema = require("../models/activos");

const router = express.Router();

// activos
router.post("/activos", (req, res) => {
    const activos = activosSchema(req.body);
    activos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;