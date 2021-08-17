const bcrypt = require("bcrypt");
const User = require("../models/user");

const login = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });//buscamos por email
  if (!user)
    return res.status(400).send("Process Failed: Incorrect email o password");//mandamos un mensaje de error

  const hash = await bcrypt.compare(req.body.password, user.password); //para comparar si el password el igual al que esta encriptado por medio del hash
  if (!hash)
    return res.status(400).send("Process Failed: Incorrect email o password");

  try {
    const jwtToken = user.generateJWT();//genera el jsonwebtoken
    return res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("login error");
  }
};
module.exports = { login };
