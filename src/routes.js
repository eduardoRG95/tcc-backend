const express = require('express');
const crypto  = require('crypto');
const connection = require('./database/connection')

const routes = express.Router();

routes.get('/admin', async (request, response) => { 
    const admin = await connection('UserAdmin').select('*');
    return response.json(admin)
});

routes.post('/admin', async (request, response) => {
    const { nome, email, senha} = request.body;

    const id = crypto.randomBytes(5).toString('HEX')

    await connection('UserAdmin').insert({
        id,
        nome,
        email,
        senha
    })

    return response.json({ id });
});

module.exports = routes;
