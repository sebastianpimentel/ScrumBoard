const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

router.post("/registerUser", UserController.registerUser);
//:name es un parametro    http://localhost:3001/api/listUser/:aqui va a ir el parametro name con el signo ? es para que sea opcional de lo contrario seria obligatorio
router.get("/listUser/:name?", UserController.listUser);

module.exports = router;
