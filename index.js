const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana omni',
        aluno: 'eu'
    }); 
});

app.listen('3333')