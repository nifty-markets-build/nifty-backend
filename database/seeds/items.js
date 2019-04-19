const { items } = require('../starterData.js');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert(
        items
      );
    });
};
