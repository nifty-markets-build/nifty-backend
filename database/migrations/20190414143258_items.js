
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', tbl => {
    tbl.increments('itemId');

    tbl
      .string('name', 256)
      .notNullable();

    tbl
      .string('gameName', 256)
      .notNullable();

    tbl
      .string('description', 256)
      .notNullable();
    
    tbl
      .float('cost')
      .notNullable();

    tbl
      .integer('userId')//column name for items table
      .unsigned()
      .notNullable()
      .references('userId')//primary key in the parent table
      .inTable('users')
      .onDelete('RESTRICT')//deletes all items for the user and then deletes the user
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('transactions');
};
