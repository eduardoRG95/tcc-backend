const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const produtos = await connection('Produtos').select('*');
        return response.json(produtos)
    },

    async create(request, response) {
        const { id, nome, valor, quantidade } = request.body;
        await connection('Produtos').insert({
            id,
            nome,
            valor,
            quantidade
        })
        return response.json({ id });
    }
}