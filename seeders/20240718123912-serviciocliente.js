'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [clientes, clientes_metadata] = await queryInterface.sequelize.query('SELECT id FROM clientes')
let [servicios, servicios_metadata] = await queryInterface.sequelize.query('SELECT id FROM servicios')
await queryInterface.bulkInsert('servicioclientes', [
{ clienteid: clientes[0].id, servicioid: servicios[0].id, createdAt: new Date(), updatedAt: new
Date() },
{ clienteid: clientes[1].id, servicioid: servicios[1].id, createdAt: new Date(), updatedAt: new
Date() },
{ clienteid: clientes[2].id, servicioid: servicios[2].id, createdAt: new Date(), updatedAt: new
Date() }
], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicioclientes', null, {});
  }
};
