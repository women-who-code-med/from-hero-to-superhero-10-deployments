module.exports = (req, res, next) => {
  try {
    const { user } = req;

    if (!user) {
      throw "Invalid user";
    }

    if (!user.isAdmin) {
      throw "User has no privileges to perform this operation";
    }
  
    next();
  } catch (error) {
    req.status(401).json({
      message: error.message
    })
  }
}