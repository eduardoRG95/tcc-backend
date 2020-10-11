const connection = require('../database/connection');
const crypto  = require('crypto');


module.exports = {
    async index(request, response) {
        const Usuarios = await connection('Usuarios').select('*');
        return response.json(Usuarios)
    },

    async create(request, response) {
        const { nomeUsuario, emailUsuario, cidadeUsuario, uf } = request.body;
        const idUsuario = crypto.randomBytes(5).toString('HEX');
        await connection('Usuarios').insert({
            idUsuario,
            nomeUsuario,
            emailUsuario,
            cidadeUsuario,
            uf,
        })
        return response.json({ nomeUsuario });
    },

    async delete(request, response) {
        const { idUsuario } = request.params;
        await connection('Usuarios').where('idUsuario', idUsuario).del()
        return response.json({ idUsuario });
    },

    async update(request, response) {
        const { idUsuario, nomeUsuario, emailUsuario, cidadeUsuario, uf } = request.body;
        await connection('Usuarios').where('idUsuario', idUsuario).update({
            nomeUsuario: nomeUsuario,
            emailUsuario: emailUsuario,
            cidadeUsuario: cidadeUsuario,            
            uf: uf,          
        })
        return response.json({ nomeUsuario });
    },

}