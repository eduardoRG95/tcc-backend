const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const produtos = await connection('Produtos').select('*');
        return response.json(produtos)
    },

    async create(request, response) {
        const { nome, valor, quantidade } = request.body;
        const id = crypto.randomBytes(5).toString('HEX');
        await connection('Produtos').insert({
            id,
            nome,
            valor,
            quantidade
        })
        return response.json({ id });
    }
}