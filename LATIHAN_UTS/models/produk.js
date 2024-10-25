const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
    nama : {
        type: String,
    },
    deskripsi :{
        type : String,
    },
    harga : {
        type :Number.
    },
    stok : {
        type : Number,
    },
    kategori_id:{
        type : mongoose.Schema.Types.Objectid,
        ref : 'Kategori',
        require :true,
    }
});

const Produk = mongoose.model('produk',produkSchema);
module.exports = Produk;
