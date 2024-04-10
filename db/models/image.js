'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate({ Advertisment }) {
      this.belongsTo(Advertisment, { foreignKey: 'adsId' });
    }
  }
  Image.init(
    {
      photo: DataTypes.TEXT,
      adsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Advertisments',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Image',
    }
  );
  return Image;
};
