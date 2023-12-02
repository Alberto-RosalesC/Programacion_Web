const express = require('express'); 
const cors = require('cors');
const mysql= require('mysql2');

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
    app.get('/ARTISTA',(req,res)=>{

        console.log(req.query.ID_ARTISTA);

        let consulta=''

        if(typeof(req.query.ID_ARTISTA)=='undefined'){
            consulta = `SELECT * FROM ARTISTA`;
        }else{
            consulta = `SELECT * FROM ARTISTA WHERE ID_ARTISTA = ${req.query.ID_ARTISTA}`;
        }
        
        console.log(consulta)

        connection.query(
            consulta,
            function(err, results, fields) {
                if(results.length==0){
                    res.json({ status:0,
                        mensaje:"ID no existe",
                        datos: {} });
                } 
                else {
                    res.json({status: 1,
                            mensaje : "Artista encontrado",
                            datos: results[0] });
                }
            }
        )
        
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
    app.listen(8082,(req,res)=>{
        console.log("Servidor express corriendo en puerto 8082")
    })

