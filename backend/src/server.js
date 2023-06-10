require('dotenv').config();

const server = require("./app");
const sequelize = require("./utils/postgresql");

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await sequelize.sync();

    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();