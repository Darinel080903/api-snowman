const CrearFridgeModel = require ("../models/seguridad/CrearFridgeModel");

class CrearFridgeController {
    CrearFridge(){
        const consulta = CrearFridgeModel.CrearFridge();
        return consulta;
    }
}

module.exports = new CrearFridgeController();