const mongoose = require("mongoose"); //se encarga de crear el esquema en la base de datos
const jwt = require("jsonwebtoken"); //para la segurida
const moment = require("moment"); //genera formatos de fecha

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  roleId: { type: mongoose.Schema.ObjectId, ref: "role" }, //traer el id del role
  date: { type: Date, default: Date.now }, //no se pide al usuario lo toma del sistema y lo guarda
  dbStatus: Boolean, //para saber si el usuario esta activo o no
});
userSchema.methods.generateJWT = function () {//funcion para tener seguridad
  return jwt.sign(
    {
      _id: this._id, //this para referirse a las variables locales
      name: this.name,
      iat: moment().unix(), //para obtener un codigo para ser mas segura la aplicacion
    },
    process.env.SECRET_KEY_JWT
  );
};

const user = mongoose.model("user", userSchema); //todo lo que llegue de userSchema se guarde en mongodb
module.exports = user; //pra exportar este esquema
