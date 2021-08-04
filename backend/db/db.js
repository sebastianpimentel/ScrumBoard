const mongoose = require("mongoose"); // para administrar la base de datos invocar la base de datos

const dbConnection = async () => {
  //todo nuestro codigo es asincrono
  try {
    await mongoose.connect(process.env.BD_CONNECTION, {//funcion interna de la libreria que permite la conecion con la base de datos -- process para sacar de los .env lo que necesitemos en este caso la direccion de la base de datos
      useNewUrlParser: true,//para encriptar las rutas no n
      useFindAndModify: false,
      useCreateIndex: true,//crea un indece para cada uno de los logs que creamos 
      useUnifiedTopology: true,//
    }); 
    console.log("Connection with MongoDB: ON");
  } catch (e) {//e captura el error del try
      console.log("Error connectiong to MongoDB: ",e);//se pone la e para saber que error se presento
      throw new Error("Error connectiong to MongoDB")//en las consolas nos ayuda a mostrar el mensaje anterior de una forma mas limpia que el anterior
  }
};

module.exports={//para exportar en forma de modulo el cual se lleva la funcion de coneccion  con la base de datos
    dbConnection
}