
exports.up = function(knex, Promise) {
  return knex.schema.createTable('errands', table => {
  	table.increments('id').primary();
  	table.string('title');
  	table.string('description');
  	table.integer('userId');
  	table.integer('categoryId');
  	table.boolean('isDone').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
