const express = require('express'); 
const cors = require('cors');
const mysql= require('mysql2');
const {jsPDF} = require('jspdf'); 
const fs = require('fs');
const path = require('path');
const app = express(); 
app.use(cors());

//http://localhost:8082/ARTISTA
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'guero99a',
    database: 'spotify'
  });

  
  //CONSULTA
    app.get('/ARTISTA', (req, res) => {
        const id_artista = req.query.ID_ARTISTA;
    
        let consulta = '';
    
        if (typeof id_artista === 'undefined') {
            consulta = `SELECT * FROM ARTISTA`;
        } else {
            consulta = `SELECT * FROM ARTISTA WHERE ID_ARTISTA = ${id_artista}`;
        }
    
        console.log(consulta);
    
        connection.query(consulta, (err, results, fields) => {
            if (err) {
                console.error('Error al ejecutar la consulta:', err);
                res.status(500).json({ mensaje: 'Error en la consulta a la base de datos' });
                return;
            }
    
            if (results.length === 0) {
                res.json({
                    status: 0,
                    mensaje: "ID no existe",
                    datos: []
                });
            } else {
                // Ajusta la respuesta dependiendo de la cantidad de resultados
                const response = {
                    status: 1,
                    mensaje: "Alumnos encontrados"
                };
    
                if (results.length === 1) {
                    response.datos = results[0];
                } else {
                    response.datos = results;
                }
    
                res.json(response);
            }
        });
    });
    

    //AGREGAR
    app.post('/ARTISTA', (req, res) => {
        console.log(req.query);
        let sentenciaSQL = '';
        if (typeof (req.query.NOMBRE) == 'undefined' || typeof (req.query.APELLIDO) == 'undefined' || typeof (req.query.FECHA_NACIMIENTO) == 'undefined' || typeof (req.query.ACERCA_DE) == 'undefined' || typeof (req.query.PAIS) == 'undefined') {
            res.json({
                status: 0,
                mensaje: "Completa todos los campos por favor",
                datos: {}
            });
        }
        else {
            sentenciaSQL = `INSERT INTO ARTISTA (NOMBRE,APELLIDO, FECHA_NACIMIENTO, ACERCA_DE, PAIS) VALUES ('${req.query.NOMBRE}', '${req.query.APELLIDO}', '${req.query.FECHA_NACIMIENTO}', '${req.query.ACERCA_DE}', '${req.query.PAIS}')`;
            console.log(sentenciaSQL);
            connection.query(
                sentenciaSQL,
                function (err, results, fields) {
                    console.log(results);
                    if (results && results.affectedRows == 1) {
                        res.json({
                            status: 1,
                            mensaje: "ARTISTA agregada exitosamente",
                            datos: {}
                        });
                    } else {
                        res.json({
                            status: 0,
                            mensaje: "Hubo un error al agregar EL ARTISTA, por favor intenta de nuevo",
                            datos: {}
                        });
                    }
                }
            )
        }
    });
    

    //ELIMINACION
    app.delete('/ARTISTA',(req,res)=>{
        console.log(req.query.ID_ARTISTA);
        let sentenciaSQL = ''
        if (typeof (req.query.ID_ARTISTA) == 'undefined') {
            res.json({
                status: 0,
                mensaje: "Ingresa el ID deL ARTISTA que deseas eliminar por favor",
                datos: {}
            });
        }
        else {
            sentenciaSQL = `DELETE FROM ARTISTA WHERE ID_ARTISTA = ${req.query.ID_ARTISTA}`;
        }
        console.log(sentenciaSQL);
        connection.query(
            sentenciaSQL,
            function (err, results, fields) {
                console.log(results);
                if (results.affectedRows == 1) {
                    res.json({
                        status: 1,  
                        mensaje: "ARTISTA eliminada exitosamente",
                        datos: {}
                    });
                }
                else {
                    res.json({
                        status: 0,
                        mensaje: "Este ID no esta registrado, intente con otro ID por favor",
                        datos: {}
                    });
                }
            }
        )

    })

    app.put('/ARTISTA', (req, res) => {
        console.log(req.query);
        let sentenciaSQL = '';
        if (typeof (req.query.ID_ARTISTA) == 'undefined' || typeof (req.query.NOMBRE) == 'undefined' || typeof (req.query.APELLIDO) == 'undefined' || typeof (req.query.FECHA_NACIMIENTO) == 'undefined' || typeof (req.query.ACERCA_DE) == 'undefined' || typeof (req.query.PAIS) == 'undefined') {
            res.json({
                status: 0,
                mensaje: "Rellene todos los campos por favor",
                datos: {}
            });
        }
        else {
            sentenciaSQL = `UPDATE ARTISTA SET NOMBRE = '${req.query.NOMBRE}', APELLIDO = '${req.query.APELLIDO}', FECHA_NACIMIENTO = '${req.query.FECHA_NACIMIENTO}', ACERCA_DE = '${req.query.ACERCA_DE}', PAIS = '${req.query.PAIS}' WHERE ID_ARTISTA = ${req.query.ID_ARTISTA}`;
            console.log(sentenciaSQL);
            connection.query(
                sentenciaSQL,
                function (err, results, fields) {
                    console.log(results);
                    if (results && results.affectedRows == 1) {
                        res.json({
                            status: 1,
                            mensaje: "ARTISTA modificado exitosamente",
                            datos: {}
                        });
                    } else {
                        res.json({
                            status: 0,
                            mensaje: "Hubo un error al modificar el ARTISTA, por favor intenta de nuevo",
                            datos: {}
                        });
                    }
                }
            )
        }
    });

    app.get('/ARTISTA/CANTANTE', (req, res) => {
        const doc = new jsPDF();
        doc.setFontSize(12);
    
        const ID_ARTISTA = req.query.ID_ARTISTA;
        const NOMBRE = req.query.NOMBRE;
        const APELLIDO = req.query.APELLIDO;
        const FECHA_NACIMIENTO = req.query.FECHA_NACIMIENTO;
        const ACERCA_DE = req.query.ACERCA_DE;
        const PAIS = req.query.PAIS;
    
        doc.text('ID del Artista:', 10, 10);
        doc.text(ID_ARTISTA, 10, 20);
        doc.text('Nombre:', 10, 40);
        doc.text(NOMBRE, 10, 50);
        doc.text('Apellido:', 10, 70);
        doc.text(APELLIDO, 10, 80);
        doc.text('Fecha de Nacimiento:', 10, 100);
        doc.text(FECHA_NACIMIENTO, 10, 110);
        doc.text('Acerca de:', 10, 130);
        doc.text(ACERCA_DE, 10, 140);
        doc.text('País:', 10, 160);
        doc.text(PAIS, 10, 170);
    
        const folderPath = path.join(__dirname, 'CRUD', 'documents');
   
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
    
        let archivoPDF = path.join(folderPath, `consulta_${ID_ARTISTA}.pdf`);
    
        try {
            doc.save(archivoPDF);
            res.download(archivoPDF);
        } catch (err) {
            console.error("Error al guardar o descargar el archivo PDF:", err);
            res.status(500).json({ error: err.message });
        }
    });
    


    app.listen(8082,(req,res)=>{
        console.log("Servidor express corriendo en puerto 8082")
    })

