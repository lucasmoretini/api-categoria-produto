'use strict'

const express = require('express')

const router = new express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send("Alterar resposta!");
});



module.exports = router;