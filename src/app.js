const express = require('express');
const App = express();
const hbs = require('hbs');
const routes = require('./routes/main');
const path = require('path');
const mongoose = require('mongoose');
const prodcuts = require('./models/Products')

//  statices file
App.use('/static', express.static('public'))
// App.use(express.static(path.join(__dirname,'public')));

App.use('/',routes)


// templete engins

App.set('view engine', 'hbs')
App.set('views','views')
hbs.registerPartials('views/components')
// db connection 


mongoose.connect("mongodb+srv://sonukumar123:sonukumar123@cluster0.t9iedea.mongodb.net/website_tut").then(()=>{
    console.log("connected");



}).catch(()=>{
    console.log("not connected");
})





App.listen(process.env.PORT | 3001 ,()=>{
    console.log("server is startes");
}) 