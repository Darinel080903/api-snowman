const IceCreamController = require('../controllers/IceCreamController')
const express = require('express')
const IceCreamRoute = express.Router();

IceCreamRoute.get('/listar', (req, res) =>{
    const listar = IceCreamController.ListarIceCream();

    listar.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })
})

module.exports = IceCreamRoute;