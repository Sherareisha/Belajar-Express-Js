const express = require('express')

    const app = express()
    const port = 11101

    // app.get('/',(req,res) =>{
    //     res.send("Hello ini express")
    // })
    // app.get('/',(req,res) =>{
    //     res.send("Hello Shera")
    // })

    app.get('/Ayam',(req,res) =>{
        res.send("Ayam Goreng")
    })
    app.post('/Ayam',(req,res) =>{
        res.send("Ayam Geprek")
    })
    app.put('/Ayam',(req,res) =>{
        res.send("Ayam Bakar")
    })
    app.delete('/Ayam',(req,res) =>{
        res.send("Ayam Sudah Habis")
    })

    app.listen(port,() => console.log(`Server running on port ${port}`))
