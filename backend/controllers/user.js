const User = require("../models/user");
const Role = require("../models/role");
const bcrypt = require("bcrypt"); //permite encriptar contraseñas
const user = require("../models/user");

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send("Process failed: incomplete data");

  let existingUser = await User.findOne({ email: req.body.email });
  if (existingUser)
    return res
      .status(400)
      .send("Process failed: the email user is already registered");

  let hash = await bcrypt.hash(req.body.password, 10); //para encriptar las constrseñas y con una cantidad de 10 caracteres para encriptar
  let role = await Role.findOne({ name: "user" });

  if (!role) return res.status(400).send("Process failed: Not role assigned");

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    roleId: role._id,
    dbStatus: true,
  });

  let result = await user.save();
  if (!result) return res.status(400).send("Failed to register User");
  try {
    let jwt = user.generateJWT();
    return res.status(200).send({ jwt });
  } catch (e) {
    return res.status(400).send("Failed to register User");
  }
};
const listUser = async (req, res) => {
  let user = await User.find({ name: new RegExp(req.params["name"], "i") })
    .populate("roleId")
    .exec();
  if (!user || user.length === 0) return res.status(400).send("No users");
  return res.status(200).send({ user });
};

module.exports = { registerUser, listUser };
