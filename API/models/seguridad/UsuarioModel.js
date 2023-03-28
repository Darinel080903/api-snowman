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

    GetUser(req){
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
}

module.exports = new UsuarioModel();