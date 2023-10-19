const express = require('express')

    const app = express()
    const port = 11101

     // representasi data dari database
     const data_users = [
        { id: 1, name: "Shera Reisha", alamat: "Bandung" },
        { id: 2, name: "Kamelia Derika", alamat: "Garut" },
        { id: 3, name: "Laila Yasmin", alamat: "Cibaduyut" },
        { id: 4, name: "Shabila Nur", alamat: "Cijerah" },
    ];

    app.get("/users", (req, res) => {
        //mendapatkan data dari database
        const data = data_users;

        //memberikan respon json data
        let result = {
            status: 200,
            data: data,
        };

        res.json(result);
    });
    app.listen(port,() => console.log(`Server running on port ${port}`))
