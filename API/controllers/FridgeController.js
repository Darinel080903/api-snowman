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

    DeleteFridge(id){
        const consulta = FridgeModel.DeleteFridge(id);
        return consulta;
    }

    CrearFridge(req){
        const consulta = FridgeModel.CrearFridge(req.body);
        return consulta;
    }

    UpdateImage(req, id){
        const consulta = FridgeModel.UpdateImage(req.body, id);
        return consulta;
    }
    
}

module.exports = new FridgeController();