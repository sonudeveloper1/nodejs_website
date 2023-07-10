const mongoose = require('mongoose');
const products = mongoose.Schema({
    imgUrl:String,
    title:String,
     des:String,
     price:Number
});

module.exports =mongoose.model('prodcuts',products)