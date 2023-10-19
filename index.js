const express = require('express')

    const app = express()
    const port = 11101

    app.get("/Ayam", (req, res) => {
        res.json({
            message: "Ayam Goreng",
        });
    });
    app.post("/Ayam", (req, res) => {
        res.json({
            message: "Ayam Geprek",
        });
    });
    app.put("/Ayam", (req, res) => {
        res.json({
            message: "Ayam Bakar",
        });
    });
    app.delete("/Ayam", (req, res) => {
        res.json({
            message: "Ayam Sudah Habis",
        });
    });
    app.listen(port,() => console.log(`Server running on port ${port}`))
