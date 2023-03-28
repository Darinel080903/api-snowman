const express = require ("express")
const jwt = require ("jsonwebtoken")
const bodyParser = require("body-parser")
const cors = require('cors')

//constante para rutas
const usuarioRouter = require('./API/routes/UsuarioRoute')
const FridgeRoute = require("./API/routes/FridgeRoute")
const IceCreamRoute = require("./API/routes/IceCreamRoute")

const app = express();
app.use(bodyParser.json())+

app.use('/usuarios',usuarioRouter)

app.use('/fridge',FridgeRoute)

app.use('/icecream', IceCreamRoute)

app.get('/',(req,res)=>{
    res.status(200).send({'Mensaje':'Api JWT'})
})

app.listen(3000, () => {
    console.log('Servidor en el puerto 3000')
})