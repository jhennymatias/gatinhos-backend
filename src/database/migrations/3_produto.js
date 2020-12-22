exports.up = function (knex) {
    return knex.schema.createTable('produto', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('categoria').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('produto');
};