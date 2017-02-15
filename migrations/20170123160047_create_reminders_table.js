
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recurringErrands', table => {
  	table.increments('id').primary();
  	table.string('title');
  	table.string('description');
  	table.integer('userId');
  	table.integer('frequency');
  	table.integer('dayOfMonth');
  	table.integer('dayOfWeek');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recurringErrands');
};
