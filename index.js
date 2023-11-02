const express = require('express')
// const { Client } = require("pg");

const app = express();
const port = 3333
app.use(express.json()); 

const Router = require("./routes/index")
app.use (Router);

// app.get('/',(req,res) =>{
//    res.send("balikan awal"); 
// });

app.listen(port,() => console.log(`Server running on port ${port}`))
//     const port = 11101;

//     const client = new Client({
//         user: "postgres",
//         host: "localhost",
//         database: "book_store_api",
//         password: "root",
//         port: 5432,
//     });

//     client.connect()
//     .then(() => {
//         console.log("Terhubumg ke database postgresSQL");
//     })
//     .catch((error) => {
//         console.error("Gagal terhubung ke database:", error);
//     })
    
//     app.get('/user',(req, res) => {
//         // akses database 
//         client
//         .connect()
//         .then(() => {
//         console.log("Terhubumg ke database postgresSQL");
//     })
//         .catch((error) => {
//         console.error("Gagal terhubung ke database:", error);
//     });

//         // ambil data
//         let data;
//         client.query(" SELECT user_id, nama, alamat FROM users; ",(req, result) => {
//             res.json(result.rows);
        
//             });
//         });

//     app.get('/user/:id', async (req, res) => {

//     let id = parseInt(req.params.id);
        
//     try {
//         const query = "select * from users where id = $1";
//         const {rows} = await client.query(query, [id]);
        
//         if (rows.length === 0) {
//             return res.status(404).json({
//                 message: "Data not found"
//             });
//         } else {
//             res.json({
//                 data: rows[0],
//             });
//         }
//     } catch (error) {
//         return res.status(404).json({
//             message: "Ada yang error dengan database",
//         })
//     }
// });

//     app.get('/users`z`/:id', async (req, res) => {
//     let data = req.body;

//     const query = "INSERT INTO public.users(user_id, nama, alamat) VALUES ($1, $2, $3);";
  
//     client.query(query, [data.user_id, data.nama, data.alamat], (err, result) => {
//         if(err){
//             console.error("Error executing INSERT query;", err);
//             return res.status(500).json({error: "Terjadi kesalahan" + err});
//         } else {
//             res.json({
//                 message: "Data berhasil dimasukan"
//             })
//         }
//     });

// });
        // tampilkan data
       



    // app.get("/kamel/:id", (req, res) => {
    //     // get data dari parameter
    //     let id = parseInt(req.params.id);

    //     // get data dari database
    //     let result;
    //     const user = data_users.find((user) => user.id === id);
    //     if (user) {
    //         result = {
    //         status: 200,
    //         data: user,
    //         };
    //     } else {
    //         res.status(404).json({ error: "User not found" });
    //     }
    //     res.json(result);
    // });
    // app.listen(port,() => console.log(`Server running on port ${port}`))
