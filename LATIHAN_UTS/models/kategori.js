const mongoose = require("mongoose");

const kategoriSchema = new mongoose.Schema({
    nama_kategori : {
        type: String,
    },
    deskripsi :{
        type : String,
    },
    created_at : {
        type :Date,

    },
    update_at : {
        type : Date,
    },
    status:{
        type :Boolean,
    }
});

const Kategori = mongoose.model('kategori',kategoriSchema);
module.exports = Kategori;
