const express= require("express");
const router= express.Router();
const RoleController= require("../controllers/role")

//get post put delete
//http://localhost:3001/api/role/registerRole asi va a quedar la ruta de api que estamos creando
router.post("/registerRole", RoleController.registerRole);//para registrar

//http://localhost:3001/api/role/listRole
router.get("/listRole",RoleController.listRole);//para listar

module.exports=router;