const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("phoneCategory", {
    name: {
      type: DataTypes.STRING,
      alloNull: false,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
