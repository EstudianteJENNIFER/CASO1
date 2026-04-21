const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal
// Datos del paciente
const estudiante = {
    nombre: "María López",
    curso: "Desarollo Web",
    estado: "Inactivo"
};

// Ruta principal
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>HealthCarePlus</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg,#5900E0);
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }

            .card {
                background: white;
                padding: 30px;
                border-radius: 15px;
                width: 350px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                text-align: center;
            }

            h1 {
                font-size: 20px;
                color: #333;
                margin-bottom: 20px;
            }

            .info {
                text-align: left;
                margin-top: 15px;
            }

            .info p {
                margin: 8px 0;
                font-size: 15px;
            }

            .label {
                font-weight: bold;
                color: #555;
            }
        </style>
    </head>
    <body>

        <div class="card">
            <h1>Sistema de Registro de Estudiantes</h1>
            <p style="color: green;">Funcionando Correctamente</p>

            <div class="info">
                <p><span class="label">Nombre:</span> ${estudiante.nombre}</p>
                <p><span class="label">Curso:</span> ${estudiante.curso}</p>
                <p><span class="label">Estado:</span> 
                    <span style="color: green;">${estudiante.estado}</span>
                </p>
            </div>
        </div>

    </body>
    </html>
    `);
});
// Levantar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});