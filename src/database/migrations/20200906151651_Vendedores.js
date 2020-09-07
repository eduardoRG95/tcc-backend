exports.up = function(knex) {
    return knex.schema.createTable('Vendedores', function(table) {
        table.string('id').primary().unsigned();
        table.string('nome').notNullable();
        table.string('email').notNullable(); 
        table.string('cidade').notNullable(); 
        table.string('uf', 2).notNullable(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Vendedores');
};
