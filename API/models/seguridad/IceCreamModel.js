const mysql = require ('../../../utils/global/database')

class IceCreamModel{
    ListarIceCream(){
        return new Promise((resolve, reject) => {
            mysql.query('SELECT * FROM iceCream', (error, result) =>{
                if(error){
                    reject({ message : 'ta mal'})
                }else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = new IceCreamModel();