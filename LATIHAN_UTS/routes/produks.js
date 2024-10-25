const express = require("express");
const router = express.Router();
const produkController = require("../controllers/controllerProduk");
// Fungsi dan rute Index kita gunakan untuk memanggil semua data dalam database mongoDB
router.get("/produk",produkController.Produkindex);
router.post("/tambah/produk",produkController.Produkinsert);
module.exports = router;