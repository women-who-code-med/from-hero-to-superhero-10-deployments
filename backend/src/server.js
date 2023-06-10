require('dotenv').config();

const server = require("./app");
const sequelize = require("./utils/postgresql");

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});