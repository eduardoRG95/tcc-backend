const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const vendedores = await connection('Vendedores').select('*');
        return response.json(vendedores)
    },

    async create(request, response) {
        const { id, nome, email, cidade, uf } = request.body;
        await connection('Vendedores').insert({
            id,
            nome,
            email,
            cidade,
            uf,
        })
        return response.json({ id });
    }
}