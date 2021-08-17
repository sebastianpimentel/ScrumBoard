const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({//json
  name: String,
  description: String,
  date: { type: Date, default: Date.now }, //para sacar la fecha del sistema
  dbStatus: Boolean,
});
const role = mongoose.model("role", roleSchema);//para crear un modelos en mongodb 

module.exports = role;//para exportar el modulo
