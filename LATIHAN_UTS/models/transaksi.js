const mongoose = require("mongoose");

const transaksiSchema = new mongoose.Schema({
    produk_id : {
        type : mongoose.Schema.Types.Objectid,
        ref : 'Produk',
        require :true,
    },
    pengguna_id :{
        type : mongoose.Schema.Types.Objectid,
        ref : 'Pengguna',
        require :true,
    },
    jumlah : {
        type :Number,

    },
    total_harga : {
        type : Number,
    },
    tanggal_transaksi:{
        type :Date,
    }
});

const Transaksi = mongoose.model('transaksi',transaksiSchema);
module.exports = transaksi;
