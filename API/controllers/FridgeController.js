const FridgeModel = require ("../models/seguridad/FridgeModel");

class FridgeController {
    ListarFridge(){
        const consulta = FridgeModel.ListarFridge();
        return consulta;
    }

    GetFridge(id){
        const consulta = FridgeModel.GetFridge(id);
        return consulta;
    }

    CrearFridge(req){
        const consulta = FridgeModel.CrearFridge(req.body);
        return consulta;
    }

    


}

module.exports = new FridgeController();