const UsuarioModel = require("../models/seguridad/UsuarioModel");

class UsuarioController {
    ListarUsuarios(){
        const consulta = UsuarioModel.ListarUsuarios();
        return consulta;
    }
}

module.exports = new UsuarioController();