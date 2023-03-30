const mysql = require ('../../../utils/global/database')
const jwt = require('jsonwebtoken')

class UsuarioModel{
    ListarUsuarios(){
        return new Promise((resolve, reject) => {
            mysql.query('SELECT * FROM users', (error, result) =>{
                if(error){
                    reject({ message : 'ta mal'})
                }else{
                    resolve(result)
                }
            })
        })
    }

    LoginUser(req){
        return new Promise((resolve, reject) => {
            mysql.query(`SELECT * FROM users WHERE email =? AND password = ?`,[req.email, req.password],(error, result) =>{
                if(error){ 
                    reject({ message : 'ta mal'})
                }else{
                    jwt.sign({result}, 'secretkey', (err, token)=>{
                        resolve({token})
                    })
                }
            })
        })
    }

    UsuarioByID(id){
        return new Promise((resolve, reject) => {
            mysql.query(`SELECT * FROM users WHERE id = ? `, [id],(error, result) =>{
                if(error){
                    reject({ message : 'ta mal'})
                }else{
                    resolve(result)
                }
            })
        })
    }

    CrearUsuario(req){
        return new Promise((resolve, reject) => {
            
            const {id, name, email, password} = req
            const insertarDatos = `INSERT INTO users (id, name, email, password) VALUES ('${id}','${name}' , '${email}', '${password}')`;

            mysql.query(insertarDatos, (error, result) =>{
                if(error){
                    reject({ message : 'ta mal'})
                }else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = new UsuarioModel();