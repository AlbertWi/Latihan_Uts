const mongoose = require("mongoose");

const diskonSchema = new mongoose.Schema({
    produk_id : {
        type : mongoose.Schema.Types.Objectid,
        ref : 'Produk',
        require :true,
    },
    presentase_diskon : {
        type : Number,
    },
    tanggal_mulai:{
        type :Date,
    },
    tanggal_selesai : {
    type : Date,
    },
    keterangan : {
        type : String,
    }
});

const Diskon = mongoose.model('diskon',diskonSchema);
module.exports = Diskon;
