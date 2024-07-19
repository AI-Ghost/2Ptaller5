'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serviciocliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  serviciocliente.init({
    clienteid: DataTypes.INTEGER,
    servicioid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'serviciocliente',
    tableName: 'servicioclientes'
  });
  return serviciocliente;
};