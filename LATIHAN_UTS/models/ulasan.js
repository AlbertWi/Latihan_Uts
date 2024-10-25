const mongoose = require("mongoose");

const ulasanSchema = new mongoose.Schema({
    produk_id : {
        type : mongoose.Schema.Types.Objectid,
        ref : 'produk',
        require :true,    },
    pengguna_id :{
        type : mongoose.Schema.Types.Objectid,
        ref : 'Pengguna',
        require :true,
    },
    rating : {
        type :Number,

    },
    komentar : {
        type : String,
    },
    tanggal_ulasan:{
        type :Date,
    }
});

const Ulasan = mongoose.model('ulasan',ulasanSchema);
module.exports = Ulasan;
