const FridgeController = require('../controllers/FridgeController')
const express = require('express')
const FridgeRoute = express.Router();

FridgeRoute.get('/listar', (req, res) =>{
    const listar = FridgeController.ListarFridge();

    listar.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })
})

module.exports = FridgeRoute;