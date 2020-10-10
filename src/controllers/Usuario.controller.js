const connection = require('../database/connection');
const crypto  = require('crypto');


module.exports = {
    async index(request, response) {
        const clientes = await connection('Usuarios').select('*');
        return response.json(clientes)
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
        const { id } = request.body;
        await connection('Usuarios').where('idUsuario', id).del()
        return response.json({ id });
    },

    async update(request, response) {
        const { id, nome, email, cidade, uf } = request.body;
        await connection('Usuarios').where('idUsuario', id).update({
            nomeUsuario: nome,
            emailUsuario: email,
            cidadeUsuario: cidade,            
            uf: uf,          
        })
        return response.json({ id });
    },

}