const IceCreamModel = require ("../models/seguridad/IceCreamModel");

class IceCreamController {
    ListarIceCream(){
        const consulta = IceCreamModel.ListarIceCream();
        return consulta;
    }
}

module.exports = new IceCreamController();