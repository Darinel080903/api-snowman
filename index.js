const express = require ("express")
const jwt = require ("jsonwebtoken")
const bodyParser = require("body-parser")
const cors = require('cors')


const config = require('./config.js');


const PORT = config.PORT;
const HOST = config.HOST;

//constante para rutas
const usuarioRouter = require('./API/routes/UsuarioRoute')
const FridgeRoute = require("./API/routes/FridgeRoute")
const IceCreamRoute = require("./API/routes/IceCreamRoute")

const app = express();
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/usuarios',usuarioRouter)

app.use('/fridge',FridgeRoute)

app.use('/icecream', IceCreamRoute)

app.get('/',(req,res)=>{
    res.send('Trabajando')
    res.status(200).send({'Mensaje':'Api JWT'})
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)