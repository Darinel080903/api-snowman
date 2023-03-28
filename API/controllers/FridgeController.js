const FridgeModel = require ("../models/seguridad/FridgeModel");

class FridgeController {
    ListarFridge(){
        const consulta = FridgeModel.ListarFridge();
        return consulta;
    }
}

module.exports = new FridgeController();