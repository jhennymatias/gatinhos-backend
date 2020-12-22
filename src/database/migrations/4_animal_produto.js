exports.up = function (knex) {
    return knex.schema.createTable('animal_produto', function (table) {
        table.integer('id_animal')
            .notNullable()
            .references('id')
            .inTable('animal')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.integer('id_produto')
            .notNullable()
            .references('id')
            .inTable('produto')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.integer('grau_toxidade').notNullable();

    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('animal_produto');
};