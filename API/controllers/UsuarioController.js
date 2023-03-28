const UsuarioModel = require("../models/seguridad/UsuarioModel");

class UsuarioController {
    ListarUsuarios(){
        const consulta = UsuarioModel.ListarUsuarios();
        return consulta;
    }
    GetUser(req){
        const consulta = UsuarioModel.GetUser(req);
        return consulta;
    }
}

module.exports = new UsuarioController();