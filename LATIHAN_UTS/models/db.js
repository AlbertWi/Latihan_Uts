let mongose = require("mongoose");
let dbURI =   "mongodb://localhost:27017/db_Latihan_Uts";

mongose.connect(dbURI,{
    //useNewURLParser :true
});

mongose.connection.on ("connected",()=>{
    console.log("Connected to mongoDB");
});

mongose.connection.on("error",(error)=>{
    console.log("Connection Error:"+ error);
});

mongose.connection.on("disconnected",()=>{
    console.log("Disconnected From MongoDB");
})