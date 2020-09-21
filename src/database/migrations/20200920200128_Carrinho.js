
exports.up = function(knex) {
    return knex.schema.createTable('Carrinho', function(table) {
        table.string('id').primary();
        table.string('produtos').notNullable();
        table.foreign('id').references('id').inTable('Vendedores').onDelete('CASCADE').onUpdate('RESTRICT');
        table.foreign('id').references('id').inTable('Clientes').onDelete('CASCADE').onUpdate('RESTRICT');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Carrinho');
};
