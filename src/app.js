const express = require('express');
const initModels = require('./models/init.models');
const db = require("./utils/database");
const cors = require("cors");
const userRoutes = require("./routes/users.routes")


// Crear la instancia de express
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 7000;

db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: false})
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

  app.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenido al servidor" });
  });

  app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});