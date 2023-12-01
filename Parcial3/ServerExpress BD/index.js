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

    app.post('/ARTISTA',(req,res)=>{   
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

    app.listen(8082,(req,res)=>{
        console.log("Servidor express corriendo en puerto 8082")
    })

