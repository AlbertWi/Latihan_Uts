const Produk = require("../models/produk");

const Produkindex = async(req,res) => {
    try{
        const produk = await produk.find({});
        res.status(200).json({massage: 'Succes', data: produk});
    }catch(error){
        res.status(400).json({message:"Failed"});

    }
}

const Produkinsert = async(req,res) => {
    try{
        const {nama,deskripsi,harga,stok} = req.body;
        const produk = new Produk ({
            nama,
            deskripsi,
            harga,
            stok,
        });
        await produk.save();
        res.status(200).json({massage : 'Succes',data: produk});
    }catch(error){
        res.status(400).json({message:"Failed"});

    }
}
module.exports = { Produkindex , Produkinsert  };