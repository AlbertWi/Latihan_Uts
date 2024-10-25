const mongoose = require("mongoose");

const pembayaranSchema = new mongoose.Schema({
    transaksi_id : {
        type : mongoose.Schema.Types.Objectid,
        ref : 'Transaksi',
        require :true,
    },
    metode_pembayaran : {
        type : String,
    },
    jumlah:{
        type :Number,
    },
    tanggal_pembayaran : {
    type : Date,
    },
    status : {
        type : String,
    }
});

const Pembayaran = mongoose.model('stok',pembayaranSchema);
module.exports = Pembayaran;
