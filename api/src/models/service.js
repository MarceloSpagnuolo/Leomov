const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("service", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    movil: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ws: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: "Leones",
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
