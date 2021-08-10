const Role = require("../models/role"); //para importar el role Role es cuando es propio y externo e minusculas

const registerRole = async (req, res) => {
  //bdoy es el cuerpo de json lo que trae por dentro del json
  if (!req.body.name || !req.body.description)
    return res.status(401).send("Process failed: Incomplete data");

  const existingRole = await Role.findOne({ name: req.body.name });
  if (existingRole) return res.status(401).send("Process failed: role already exist");

  const role = new Role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true
  });

  const result = await role.save(); //para cofirmar que se guarde en mongodb
  if (!result) return res.status(401).send("Failed to register role");
  return res.status(200).send({ role });
};

const listRole = async (req, res) => {
  const role = await Role.find();
  if (!role) return res.status(401).send("No role");
  return res.status(200).send({ role });
};

module.exports = { registerRole, listRole };
