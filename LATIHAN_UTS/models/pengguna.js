const mongoose = require("mongoose");

const penggunaSchema = new mongoose.Schema({
    nama : {
        type: String,
    },
    email :{
        type : String,
    },
    password : {
        type :String,

    },
    alamat : {
        type : String,
    },
    tanggal_daftar:{
        type :Date,
    }
});

const Pengguna = mongoose.model('pengguna',penggunaSchema);
module.exports = Pengguna;
