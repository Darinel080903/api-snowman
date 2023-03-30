const UsuarioModel = require("../models/seguridad/UsuarioModel");

class UsuarioController {
    ListarUsuarios(){
        const consulta = UsuarioModel.ListarUsuarios();
        return consulta;
    }
    LoginUser(req){
        const consulta = UsuarioModel.LoginUser(req);
        return consulta;
    }
    UsuarioByID(id){
        const consulta = UsuarioModel.UsuarioByID(id);
        return consulta;
    }
    CrearUsuario(req){
        const consulta = UsuarioModel.CrearUsuario(req);
        return consulta;
    }
}

module.exports = new UsuarioController();