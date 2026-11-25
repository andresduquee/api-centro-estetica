
const fs = require("fs");
const path = require("path");

const archivo = path.join(__dirname, "../data/turnos.json");

// Número asignado al equipo
const N = 8;
const porcentajeRecargo = N * 2;

// Leer las citas
const obtenerTodos = () => {
    return JSON.parse(fs.readFileSync(archivo, "utf8"));
};

// Buscar una cita por ID
const obtenerPorId = (id) => {
    const turnos = obtenerTodos();
    return turnos.find(turno => turno.id === id);
};

// Registrar una nueva cita
const crearTurno = (datos) => {
    const turnos = obtenerTodos();

    const recargo = datos.prioritario
        ? datos.precioBase * porcentajeRecargo / 100
        : 0;

    const nuevoTurno = {
        id: turnos.length
            ? Math.max(...turnos.map(t => t.id)) + 1
            : 1,
        ...datos,
        porcentajeRecargo: datos.prioritario ? porcentajeRecargo : 0,
        totalPagar: datos.precioBase + recargo
    };

    turnos.push(nuevoTurno);

    fs.writeFileSync(
        archivo,
        JSON.stringify(turnos, null, 2)
    );

    return nuevoTurno;
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crearTurno
};
