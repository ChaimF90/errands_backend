
exports.up = function(knex, Promise) {
  return knex.schema.table('errands', table => {
  	table.date('dueDate');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('errands', table => {
  	table.dropColumn('dueDate');
  })
};
