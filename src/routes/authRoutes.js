const { Router } = require("express");
const router = Router();
const authController = require("../controllers/authController");
const isAdmin = require("../middlewares/admin");

router
  .post('/login', authController.signIn)
  .get('/profile', [isAdmin], authController.getProfile)
  .patch('/profile', [isAdmin], authController.updateProfile);

module.exports = router;