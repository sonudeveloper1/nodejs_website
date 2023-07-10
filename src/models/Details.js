const mongoose = require('mongoose');
const oderdetails = mongoose.Schema({
    Name:String,
    Email:String,
     massage:String,

});

module.exports =mongoose.model('oderdetails',oderdetails)