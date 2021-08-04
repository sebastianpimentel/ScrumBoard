const express = require("express"); //crea un servidor
const cors = require("cors"); //para administrar el servidor y conecciones se encarga de las reglas para la conexion 
const { dbConnection } = require("./db/db"); //para importar el modulo desde la carpeta db
require("dotenv").config(); //requiere la libreria para poder configurar las variables de entorno que creamos en el archivo .env

const app = express(); //para el servidor
//aplicacion backend

app.use(express.json); //todo lo que se va manipular en el servidor va hacer de formato json
app.use(cors()); //para la conexion don el servidor

app.listen(process.env.PORT, () =>
  console.log("Backend sever running an port ", process.env.PORT) //para poner a la escucha en un puerto
);

dbConnection()
