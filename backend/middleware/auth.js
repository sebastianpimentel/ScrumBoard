const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  let jwtToken = req.header("Authorization");
  if (!jwtToken) return res.status(400).send("Authorization denied: no token"); //no se encontro el token no da autorizacion
  console.log(jwtToken);
  //[Bearer, dsjdffsefvbefovefivboñ]
  //     0    ,     1
  jwtToken = jwtToken.split(" ")[1];
  if (!jwtToken) return res.status(400).send("Authorization denied: no token");

  try {
    const payload = await jwt.verify(jwtToken, process.env.SECRET_KEY_JWT);
    req.user = payload;
    next();
  } catch (e) {
    return res.status(400).send("Authorization denied: Invalid token");
  }
};

module.exports = auth;
