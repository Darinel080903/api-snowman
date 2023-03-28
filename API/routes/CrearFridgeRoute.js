const CrearFridgeController = require('../controllers/CrearFridgeController')
const express = require('express')
const CrearFridgeRoute = express.Router();

CrearFridgeRoute.post('/crear', (req, res) =>{
    const crear = CrearFridgeController.CrearFridge();

    crear.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })
})

module.exports = CrearFridgeRoute;