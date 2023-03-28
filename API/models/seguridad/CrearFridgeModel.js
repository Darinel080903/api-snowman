const mysql = require ('../../../utils/global/database')


class CrearFridgeModel{
    CrearFridge(){
        return new Promise((resolve, reject) => {
            
            const id = req.body.id
            const image = req.body.image
            const freezer = req.body.freezer
            const content = req.body.content
            const status = req.body.status
            
            mysql.query('INSERT INTO fridge (id, image, freezer, content, status) VALUES (?, ?, ?, ?, ?)',[id, image, freezer, content, status], (error, result) =>{
                if(error){
                    reject({ message : 'ta mal'})
                }else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = new CrearFridgeModel();