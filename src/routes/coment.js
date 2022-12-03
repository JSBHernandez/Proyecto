const express = require("express");
const comentSchema = require("../models/coment");

const router = express.Router();

// coment
router.post("/coment", (req, res) => {
    const coment = comentSchema(req.body);
    coment
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;