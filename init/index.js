const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
.then(() =>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log("issue");
}); 

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/urbangetaway");
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj , owner : "66c509f59f20472c227802f6"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
  };
  
  initDB();