'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        nombre: 'Maria',
        apellido: 'Lopez',
        cedula: '093746592',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: 'Jade',
        apellido: 'Harley',
        cedula: '092645503',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: 'Carlos',
        apellido: 'Rizo',
        cedula: '0928436362',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
