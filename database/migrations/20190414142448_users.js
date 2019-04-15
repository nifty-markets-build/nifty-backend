
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('userId');

    tbl
      .string('username', 256)
      .notNullable();

    tbl
      .string('password', 256)
      .notNullable();

    tbl
      .string('email', 256)
      .notNullable();

    tbl
      .string('firstName', 256)
      .notNullable();

    tbl
      .string('lastName', 256)
      .notNullable();

    tbl
      .string('address', 256)
      .nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
