const User = require("../models/user");

const auth = async (req, res) => {
  try {
    const user = {
      login: req.user != undefined ? req.user.login : req.query.login,
      password: req.user != undefined ? req.user.password : req.query.password,
    };
    let findUser = await User.find({
      login: user.login,
      password: user.password,
    });
    res.status(201).send(findUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
    auth,
  };