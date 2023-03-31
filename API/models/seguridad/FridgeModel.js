const mysql = require ('../../../utils/global/database')

const amqp = require('amqplib')
require('dotenv').config()

const hostname = process.env.HOST || 'localhost'
const protocol = process.env.PROTOCOL
const username = process.env.USERNAME
const password = process.env.PASSWORD
const queue = process.env.QUEUE

const rabbitSettings = {
    protocol: protocol,
    hostname: hostname,
    username: username,
    password: password,
    vhost: '/'
}

async function connect(message) {
    try {
        const conn = await amqp.connect(rabbitSettings)
        console.log("*Conectado*")

        const channel = await conn.createChannel();

        channel.sendToQueue(queue, Buffer.from(message))


    }
    catch (error){
        console.log('Erro =>', error)
    }
}

class FridgeModel{

    ListarFridge(){
        return new Promise((resolve, reject) => {
            mysql.query(`SELECT * FROM fridge`, (error, result) =>{
                if(error){
                    reject({ message : 'ta mal'})
                }else{
                    resolve(result)
                }
            })
        })
    }

    GetFridge(id){
        return new Promise((resolve, reject) => {
            mysql.query(`SELECT * FROM fridge WHERE id = ? `, [id],(error, result) =>{
                if(error){
                    reject({ message : 'ta mal'})
                }else{
                    resolve(result)
                }
            })
        })
    }

    CrearFridge(req){
        return new Promise((resolve, reject) => {
            
            const {id, image, freezer, content} = req
            const insertarDatos = `INSERT INTO fridge (id, image, freezer, content, status) VALUES ('${id}','${image}' , '${freezer}', '${content}', 1)`;

            mysql.query(insertarDatos, (error, result) =>{
                if(error){
                    reject({ message : 'ta mal'})
                }else{
                    connect("Se ha instalado un nuevo contenedor, reavalo en el panel de control")
                    resolve(result)
                }
            })
        })
    }

    DeleteFridge(id){
        return new Promise((resolve, reject) => {
            mysql.query(`DELETE FROM fridge WHERE id = ? `, [id],(error, result) =>{
                if(error){
                    reject({ message : 'ta mal'})
                }else{
                    resolve(result)
                }
            })
        })
    }

    UpdateImage(req, id){
        return new Promise((resolve, reject) => {
            mysql.query(`UPDATE fridge SET image = '${req.image}' WHERE id = ${id} `,(error, result) =>{
                if(error){
                    reject({ message : 'ta mal'})
                }else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = new FridgeModel();