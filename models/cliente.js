'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    static associate(models) {
      // define association here
      models.cliente.belongsToMany(models.servicio, { through: 'serviciocliente', foreignKey: 'clienteid' });
    }
  }
  cliente.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cedula: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
    tableName: 'clientes'
  });
  return cliente;
};