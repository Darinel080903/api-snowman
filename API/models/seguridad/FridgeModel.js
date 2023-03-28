const mysql = require ('../../../utils/global/database')

class FridgeModel{
    ListarFridge(){
        return new Promise((resolve, reject) => {
            mysql.query('SELECT * FROM fridge', (error, result) =>{
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