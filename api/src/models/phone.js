const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("phone", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
