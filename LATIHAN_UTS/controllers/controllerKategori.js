const Mahasiswa = require("../models/produk");

const index = (req, res, next) => {
    Produk.find({}, { __v: 0 })
      .then((prd) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Succes",
            data: prd
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Faied"
        };
        res.status(400).json(responseMessage);
      });
};

const insert = (req, res, next) => {
    const mhs = new Produk({
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      harga: req.body.harga,
      stok: req.body.stok,
      kategori_id : req.body.kategori_id,
      aktif: true
    });
  
    mhs
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};
module.exports = { index , insert }