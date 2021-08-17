const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/registerUser", UserController.registerUser);
//:name es un parametro    http://localhost:3001/api/listUser/:aqui va a ir el parametro name con el signo ? es para que sea opcional de lo contrario seria obligatorio
router.get("/listUser/:name?", Auth, ValidateUser, UserController.listUser);

module.exports = router;
