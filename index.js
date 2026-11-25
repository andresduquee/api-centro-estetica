
const express = require("express");
const app = express();

const turnosRoutes = require("./routes/turnos.routes");

// Middleware para recibir JSON
app.use(express.json());

// Conectar las rutas
app.use("/api/turnos", turnosRoutes);

// Iniciar servidor
app.listen(3000, () => {
    console.log("API Centro de Estética funcionando en http://localhost:3000");
});
