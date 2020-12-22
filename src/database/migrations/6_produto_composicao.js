exports.up = function (knex) {
    return knex.schema.createTable('produto_composicao', function (table) {
        table.integer('id_composicao')
            .notNullable()
            .references('id')
            .inTable('composicao')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.integer('id_produto')
            .notNullable()
            .references('id')
            .inTable('produto')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('produto_composicao');
};