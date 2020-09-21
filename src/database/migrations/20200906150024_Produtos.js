exports.up = function(knex) {
    return knex.schema.createTable('Produtos', function(table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('valor').notNullable(); 
        table.string('quantidade').notNullable(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Produtos');
};
