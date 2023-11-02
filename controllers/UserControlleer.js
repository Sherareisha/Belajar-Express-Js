const { User } = require("../models");

const findAllUser = async (req, res) => {
    //ambil data dari database
    const data = await User.findAll();

    //tampilan
    res.json({
        message: "Ini dari router",
        data: data,
    });
};

const detailUser = async (req, res) => {
    // get id dari request
    let id = parseInt(req.body.id);

    const data = await User.findByPk(id);

    //tampilkan 
    res.json({
        message: "Ini dari router",
        data: data,
    });
};

const tambahUser = async (req, res) => {
    try {
        //ambil data dari request
        const data = req.body;

        //inserth kedatabase

        //tampilkan status
        res.json({
            data: data,
        });
        // res.send("Tambah Data")
    } catch (error) {
        res.json({
            message: "error :" + error,
        });
    };
};

const hapusUser = async (req, res) => {
    try {
        const id = req.body.id;

        const result = await User.destroy({
            where: {
                id: id,
            },
        });

        res.json({
            message: "user berhasil dihapus",
        });
    } catch (error) {
        res.json({
            message: "error :" + error,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.body.id;

        const newData = req.body

        const result = await User.update(newData, {
            where: {
                id: id,
            },
        });

        res.json({
            message: "user berhasil diupdate",
            data: newData,
        });
    } catch (error) {
        res.json({
            message: "error :" + error,
        });
    }
};
module.exports = { findAllUser, detailUser, tambahUser, hapusUser, updateUser };