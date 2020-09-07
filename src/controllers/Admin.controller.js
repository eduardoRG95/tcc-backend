const connection = require('../database/connection');
const crypto  = require('crypto');

module.exports = {
    async index(request, response) {
        const admin = await connection('UserAdmin').select('*');
        return response.json(admin)
    },

    async create(request, response) {
        const { nome, email, senha } = request.body;
        const id = crypto.randomBytes(5).toString('HEX');
        await connection('UserAdmin').insert({
            id,
            nome,
            email,
            senha
        })
        return response.json({ id });
    }
}