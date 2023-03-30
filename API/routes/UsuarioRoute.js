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

usuarioRouter.post('/login', (req, res) => {
    const get = UsuarioController.GetUser(req.body);
    
    console.log(req.params.id)

    get.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })
})

usuarioRouter.get('/:id', (req, res) => {
    const get = UsuarioController.UsuarioByID(req.params.id);
    
    console.log(req.params.id)

    get.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })
})

usuarioRouter.post('/crear', (req, res) => {
    const crear = UsuarioController.CrearUsuario(req);
    req.body
    crear.then((data) => {
        res.status(200).send(data)
    }).catch((data) => {
        res.status(500).send(data)
    })

})

module.exports = usuarioRouter;