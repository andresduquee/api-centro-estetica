
const service = require("../services/turnos.service");

// GET: Consultar todas las citas
const obtenerTodos = (req, res) => {
    res.status(200).json(service.obtenerTodos());
};

// GET: Consultar una cita por ID
const obtenerPorId = (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(404).json({
            error: "Cita no encontrada"
        });
    }

    const turno = service.obtenerPorId(id);

    if (!turno) {
        return res.status(404).json({
            error: "Cita no encontrada"
        });
    }

    res.status(200).json(turno);
};

// POST: Registrar una nueva cita
const crearTurno = (req, res) => {
    const {
        nombreCliente,
        servicio,
        fechaHora,
        precioBase,
        prioritario
    } = req.body;

    // Validar los datos recibidos
    if (
        typeof nombreCliente !== "string" ||
        !nombreCliente.trim() ||
        typeof servicio !== "string" ||
        !servicio.trim() ||
        typeof fechaHora !== "string" ||
        !fechaHora.trim() ||
        typeof precioBase !== "number" ||
        !Number.isFinite(precioBase) ||
        precioBase <= 0 ||
        (prioritario !== undefined &&
         typeof prioritario !== "boolean")
    ) {
        return res.status(400).json({
            error: "Datos inválidos o campos obligatorios faltantes"
        });
    }

    // Crear la cita
    const nuevoTurno = service.crearTurno({
        nombreCliente,
        servicio,
        fechaHora,
        precioBase,
        prioritario: prioritario ?? false
    });

    res.status(201).json(nuevoTurno);
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crearTurno
};
