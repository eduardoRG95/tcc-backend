const connection = require('../database/connection');
const crypto  = require('crypto');


module.exports = {
    async index(request, response) {
        const vendedores = await connection('Clientes').select('*');
        return response.json(vendedores)
    },

    async create(request, response) {
        const { nome, email, cidade, uf } = request.body;
        const id = crypto.randomBytes(5).toString('HEX');
        await connection('Clientes').insert({
            id,
            nome,
            email,
            cidade,
            uf,
        })
        return response.json({ id });
    }
}