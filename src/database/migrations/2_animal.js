exports.up = function(knex) {
    return knex.schema.createTable('animal', function(table){
      table.increments('id').primary();
      table.string('name').notNullable(); 
      table.string('care').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('animal');
  };