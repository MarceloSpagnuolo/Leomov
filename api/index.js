const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { query } = require("./insert");
require("dotenv").config();
// Syncing all the models at once.
const force = true;
conn.sync({ force }).then(() => {
  if (force) {
    query();
  }
  server.listen(process.env.PORT, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
