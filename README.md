
# API REST - Centro de Estética

# 1. Descripción del proyecto

El Centro de Estética ofrece servicios de belleza y cuidado personal, como manicure, pedicure, limpieza facial y masajes relajantes.

Esta API permite registrar citas de clientes, consultar todas las citas y buscar una cita específica.

# 2. Integrantes del equipo

Integrante Número de lista 

Andrés Felipe Duque Echeverry 8 
Jorge Iván Marín Cifuentes 14
José Andrés Marulanda Herrera 15
Bryan Alejandro Mayo Rueda 16 

# 3. Regla de negocio

El valor N del equipo es 8.

Fórmula:

Porcentaje de recargo = N × 2%

8 × 2% = 16%

Cuando una cita es prioritaria, se aplica un recargo del 16% sobre el precio base.

Ejemplo:

Precio base: $50.000
Recargo: $8.000
Total a pagar: $58.000

Cuando la cita no es prioritaria, el cliente paga únicamente el precio base.

## 4. Endpoints

 Método - Endpoint - Función 

GET  /api/turnos | Consultar todas las citas 
GET  /api/turnos/:id | Consultar una cita por ID 
POST  /api/turnos | Registrar una cita

# 5. Ejemplo exitoso - HTTP 201

POST /api/turnos

 json
{
  "nombreCliente": "Laura Gomez",
  "servicio": "Manicure",
  "fechaHora": "2026-11-25 10:00",
  "precioBase": 50000,
  "prioritario": true
}

Resultado:

 Código HTTP: 201 Created.
 Porcentaje de recargo: 16%.
 Total a pagar: $58.000.

# 6. Ejemplo de error - HTTP 400

POST /api/turnos

json
{
  "nombreCliente": "Carlos",
  "servicio": "Limpieza facial",
  "fechaHora": "2026-11-26 09:00",
  "precioBase": -50000,
  "prioritario": true
}


Resultado:

 Código HTTP: 400 Bad Request.
 Mensaje: Datos inválidos o campos obligatorios faltantes.

# 7. Manejo de errores

 HTTP 200: consulta exitosa.
 HTTP 201: cita registrada.
 HTTP 400: datos inválidos.
 HTTP 404: cita no encontrada.

# 8. Tecnologías utilizadas

 Node.js
 Express
 JavaScript
 Archivo JSON
 Postman
