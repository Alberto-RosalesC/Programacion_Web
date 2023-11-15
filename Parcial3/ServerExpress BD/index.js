const express = require('express'); 
const cors = require('cors');
const mysql= require('mysql2');

const app = express();
app.use(cors());
http://localhost:8082/ARTISTA
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'g***a',
    database: 'spotify'
  });

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
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available

            res.json(results)
        }
    )
    
});

app.post('/',(req,res)=>{   
    res.json({mensaje: " Server Express respondiendo post "})
}); 

app.delete('/',(req,res)=>{
    res.json({mensaje: " Server Express respondiendo a delete "})
})

app.listen(8082,(req,res)=>{
    console.log("Servidor express corriendo en puerto 8082")
})

