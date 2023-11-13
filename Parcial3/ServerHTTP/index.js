const http = require ('http');
 
const servidor = http.createServer((req,res)=>{
 
    res.write("Servidor http Node contestado a peditocion get");
    res.end();
});

servidor.listen(8082,()=>{
    console.log("Servidor Node Http corriendo en puerto 8082")
});

