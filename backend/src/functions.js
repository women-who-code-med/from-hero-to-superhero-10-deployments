const functions = require("firebase-functions");
const app = require("./app");

exports.api = functions.runWith({
  maxInstances: 10,
  secrets: [
    "POSTGRESQL_CONNECTION",
    "JWT_SECRET_KEY"
  ]
}).https.onRequest(async (req, res) => {
  await require("./utils/postgresql").authenticate();
  return app(req, res);
});