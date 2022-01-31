const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("serviceCategory", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
