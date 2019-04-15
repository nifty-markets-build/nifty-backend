
exports.up = function(knex, Promise) {
  return knex.schema.createTable('transactions', tbl => {
    tbl.increments('transactionId');

    tbl.float('transactionAmt');

    tbl.datetime('transactionTime');

    tbl
      .integer('itemId')//column name for transaction table
      .unsigned()
      .notNullable()
      .references('itemId')//primary key in the parent table
      .inTable('items')
      .onDelete('RESTRICT')//deletes all items for the user and then deletes the user
      .onUpdate('CASCADE');

    tbl
      .integer('userId')//column name for transaction table
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
