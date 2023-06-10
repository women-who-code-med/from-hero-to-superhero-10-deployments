const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.POSTGRESQL_CONNECTION || "postgres://user:pass@example.com:5432/dbname", {
    dialect: "postgres"
});

module.exports = sequelize;