const mongoose = require("mongoose");

const pesananSchema = new mongoose.Schema({
    pengguna_id :{
        type : mongoose.Schema.Types.Objectid,
        ref : 'Pengguna',
        require :true,
    },
    produk_id : {
        type : mongoose.Schema.Types.Objectid,
        ref : 'Produk',
        require :true,

    },
    jumlah : {
        type : Number,
    },
    status:{
        type :String,
    },
    tanggal_pesanan : {
        type : Date,
    }
});

const Pesanan = mongoose.model('pesanan',pesananSchema);
module.exports = Pesanan;
