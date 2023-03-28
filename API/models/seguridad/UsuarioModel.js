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
}

module.exports = new UsuarioModel();