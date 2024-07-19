'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('servicios', [
        {
          descripcion: 'admin',
          precio: '5.50',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          descripcion: 'programador',
          precio: '3.99',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          descripcion: 'scrum_master',
          precio: '4.99',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicios', null, {});
  }
};
