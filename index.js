const express = require('express')
const app = express()
const arreglo = require(__dirname + "/public/usuarios.json")

app.use((req, res, next) => {

    app.get('/:id', (req, res) => {
        const id = req.params 
        arreglo.usuarios.forEach(usuario => {
            if(usuario == id.id){
                console.log("Lo encontre");
            } 
        });
    })
    
    
    next()
})

app.use(express.static(`public`));

app.get("/abracadabra/usuarios", (req, res) => {
    console.log("Prueba")
    res.json({
        "usuarios": [
            "Juan",
            "Jocelyn",
            "Astrid",
            "Maria",
            "Ignacia",
            "Javier",
            "Brian"
        ]
    })
})


app.get('/abracadabra/conejo/:n', (req, res) => {
    const numero = req.params 
    console.log(numero);
    console.log(Math.floor(Math.random() * 4)+1); 
    if (numero.n == (Math.floor(Math.random() * 4)+1)){
        res.sendFile(__dirname + `/public/assets/conejito.jpg`)       

    }
    else{
        res.sendFile(__dirname + `/public/assets/voldemort.jpg`)       
    }
})

app.listen(3000) 