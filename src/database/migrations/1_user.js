exports.up = function(knex) {
    return knex.schema.createTable('user', function(table){
      table.increments('id').primary();
      table.string('name').notNullable(); 
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('hash').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user');
  };