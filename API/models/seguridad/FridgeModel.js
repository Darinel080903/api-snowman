const mysql = require ('../../../utils/global/database')

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
            
            const {id, image, freezer, content, status} = req
            const insertarDatos = `INSERT INTO fridge (id, image, freezer, content, status) VALUES ('${id}','${image}' , '${freezer}', '${content}', '${status}')`;

            mysql.query(insertarDatos, (error, result) =>{
                if(error){
                    reject({ message : 'ta mal'})
                }else{
                    resolve(result)
                }
            })
        })
    }

    UpdateImage(req){
        return new Promise((resolve, reject) => {
            
            const {id, image, freezer, content, status} = req
            const insertarDatos = `INSERT INTO fridge (id, image, freezer, content, status) VALUES ('${id}','${image}' , '${freezer}', '${content}', '${status}')`;

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

module.exports = new FridgeModel();