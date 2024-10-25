const mongoose = require("mongoose");

const stokSchema = new mongoose.Schema({
    produk_id : {
        type : mongoose.Schema.Types.Objectid,
        ref : 'Produk',
        require :true,
    },
    jumlah : {
        type : Number,
    },
    tanggal_update:{
        type :Date,
    },
    keterangan : {
    type : String,
    },
    lokasi : {
        type : String,
    }
});

const Stok = mongoose.model('stok',stokSchema);
module.exports = Stok;
