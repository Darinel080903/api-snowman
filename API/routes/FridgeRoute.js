const FridgeController = require('../controllers/FridgeController')
const express = require('express');
const { json } = require('body-parser');
const FridgeRoute = express.Router();

FridgeRoute.get('/listar', (req, res) => {
    const listar = FridgeController.ListarFridge();

    listar.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })

})

FridgeRoute.get('/:id', (req, res) => {
    const get = FridgeController.GetFridge(req.params.id);
    
    console.log(req.params.id)

    get.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })

})

FridgeRoute.post('/crear', (req, res) => {
    const crear = FridgeController.CrearFridge(req);

    req.body
    crear.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })

})

FridgeRoute.delete('/delete/:id', (req, res) => {
    const borrar = FridgeController.DeleteFridge(req.params.id)

    borrar.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })
})

FridgeRoute.put('/actualizar/:id', (req, res) => {
    const update = FridgeController.UpdateImage(req, req.params.id)

    update.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })
})

module.exports = FridgeRoute;