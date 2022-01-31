const server = require("express").Router();
const { PhoneCategory } = require("../db");

server.get("/", async (req, res) => {
  const result = await PhoneCategory.findAll({
    where: {
      enabled: true,
    },
  });
  result
    ? res.json(result).status(200)
    : res.send("No se encuentran categorías de teléfonos").status(404);
});

module.exports = server;
