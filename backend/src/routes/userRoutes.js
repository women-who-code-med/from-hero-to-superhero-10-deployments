const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/userController");

const jwtAuth = require("../middlewares/authentication");
const isAdmin = require("../middlewares/admin");


router.use(jwtAuth);

router.route('/')
  .get([isAdmin, usersController.getAllUsers])
  .post(usersController.createUser);

router.route('/:id')
  .get([isAdmin, usersController.getUserById])
  .put([isAdmin, usersController.updateUser])
  .patch([isAdmin, usersController.updateUser])
  .delete([isAdmin, usersController.deleteUser]);

module.exports = router;