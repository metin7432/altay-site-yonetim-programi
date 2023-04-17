'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.sequelize.query(
    'SELECT id from Categories;',
   ).then((categories) => {
    const categoriesRows = categories[0];
 
     return queryInterface.bulkInsert('People', [
      {
       name: 'Sinasi',
       surname: 'Altay',
       tcId: 12345678,
       email: 'sinasi@gmail.com',
       password: 12345,
       birthYear: new Date(),
       categoryId: categoriesRows[2].id,
       createdAt: new Date(),
       updatedAt: new Date()
       },
       {
       name: 'Kadriye ',
       surname: 'Demirsoy',
       tcId: 12345678,
       email: 'sinasi@gmail.com',
       password: 12345,
       birthYear: new Date(),
       categoryId: categoriesRows[0].id,
       createdAt: new Date(),
       updatedAt: new Date()
       }], 
       {});
   
  });
},
  async down (queryInterface, Sequelize) {

await queryInterface.bulkDelete('People', null, {});
    
  }
};
