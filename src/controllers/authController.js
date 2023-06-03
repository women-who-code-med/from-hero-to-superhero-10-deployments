const JWT = require("jsonwebtoken");

const { User } = require("../models");

exports.signIn = async (req, res) => {
  console.log("Auth -> signIn", req.body);
  
  try {
    const { username, password } = req.body;
    const user = await User.login(username, password);
    
    if(!user) {
      res.json({error: "user / password combination does not exists"});
      return
    }
    
    const token = JWT.sign(
      user.payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    )
    
    // res.json({token, email: user.email, name: user.getFullName()});
    res.json({
      data: {token}
    })
  } catch (e) {
    console.error(e);
    res.send(e);
  }
};

exports.getProfile = async() => {
  try {
    const { id } = req.user;

    const user = await User.findByPk(id);
    res.json(user);
  } catch (error) {
    console.error(e);
    res.send(e);
  }
}

exports.updateProfile = async() => {
  try {
    const { id } = req.user;

    const user = await User.update(req.body, {
      returning: true,
      where: { id }
    });

    res.json(user);
  } catch (error) {
    console.error(e);
    res.send(e);
  }
}