
exports.up = function(knex) {
    return knex.schema.createTable('Usuarios', function(table) {
        table.string('idUsuario').primary();
        table.string('nomeUsuario').notNullable();
        table.string('emailUsuario').notNullable(); 
        table.string('cidadeUsuario').notNullable(); 
        table.string('uf', 2).notNullable(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Usuarios');
};
