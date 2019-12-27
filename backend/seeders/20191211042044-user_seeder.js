'use strict';
const faker = require('faker')

/* 
var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
 */
const user_seed = []
faker.locale = 'id_ID'

for (let i =0;i < 1000;i++) {
  let randomName = faker.name.findName(); // Rowan Nikolaus
  let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  let randomCard = faker.helpers.createCard(); // random contact card containing many properties

  user_seed.push({
    name: randomName,
    email: randomEmail,
    created_at: new Date,
    updated_at: new Date
  })
}


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    /* 
    return queryInterface.bulkInsert('users', [{
      name: randomName,
      email: randomEmail,
      created_at: new Date,
      updated_at: new Date
    }], {});
     */
    return queryInterface.bulkInsert('users', user_seed, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
