const express = require("express");
const router = express.Router();
const produkController = require("../controllers/controllerProduk");
// Fungsi dan rute Index kita gunakan untuk memanggil semua data dalam database mongoDB
router.get("/produk",produkController.produkindex);
router.post("/tambah/produk",produkController.produkinsert);
module.exports = router;