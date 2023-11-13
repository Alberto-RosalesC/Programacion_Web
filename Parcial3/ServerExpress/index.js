const express = require('express'); 

const app = express();

app.get('/',(req,res)=>{
    res.json({mensaje: " Server Express respondiendo a get"});
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

