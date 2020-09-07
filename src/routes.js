const express = require('express');
const crypto  = require('crypto');
const connection = require('./database/connection')

const routes = express.Router();


routes.post('/admin', (request, response) => {
    const { nome, email, senha} = request.body;

    const id = crypto.randomBytes(5).toString('HEX')

    connection('UserAdmin').insert({
        id,
        nome,
        email,
        senha
    })

    return response.json({ });
});

module.exports = routes;
