'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('servicioclientes', {
      fields: ['clienteid'],
      name: 'clienteid_fk',
      type: 'foreign key',
      references: {
      table: 'clientes',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
      
      await queryInterface.addConstraint('servicioclientes', {
      fields: ['servicioid'],
      name: 'servicioid_fk',
      type: 'foreign key',
      references: {
      table: 'servicios',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('servicioclientes', 'clienteid_fk')
await queryInterface.removeConstraint('servicioclientes', 'servicioid_fk')
  }
};
