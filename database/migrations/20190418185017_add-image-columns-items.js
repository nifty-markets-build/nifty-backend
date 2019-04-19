
exports.up = function(knex, Promise) {
  return knex.schema.table('items', tbl => {
      tbl
        .string('urlImg', 256)
        .nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('items', tbl => {
      tbl.dropColumn('itemImg');
  });
};
