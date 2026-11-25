
const express = require("express");
const router = express.Router();

const controller = require("../controllers/turnos.controller");

// Consultar todas las citas
router.get("/", controller.obtenerTodos);

// Consultar una cita por ID
router.get("/:id", controller.obtenerPorId);

// Registrar una nueva cita
router.post("/", controller.crearTurno);

module.exports = router;
