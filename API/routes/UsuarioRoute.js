const UsuarioController = require('../controllers/UsuarioController')
const express = require('express')
const usuarioRouter = express.Router();

usuarioRouter.get('/listar', (req, res) =>{
    const listar = UsuarioController.ListarUsuarios();

    listar.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })
})

module.exports = usuarioRouter;