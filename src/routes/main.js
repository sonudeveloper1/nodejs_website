const express = require('express');

const app = express();
const router = express.Router();
const prodcuts = require('../models/Products')
const oderdetails = require('../models/Details')
const bodyParser = require('body-parser')
const multer = require('multer');
const fs = require('fs')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const storage = multer.diskStorage({
    destination:'./public/productimg',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)

    }
})

var upload = multer({
    storage:storage
})

router.get('/', async (req,res)=>{

    const product = await prodcuts.find();
    
    res.render('index',{
        product:product
    }
    )

})



router.get('/admin',(req,res)=>{
    res.render('admin')
})


router.post('/upload',upload.single('file'),(req,res)=>{

    const image =req.file;


    const {name,des,price}= req.body;

    console.log(name)
    console.log(des)
    console.log(price)
    

 prodcuts.create([
        {
            imgUrl:image.filename,
            title:name,
            des:des,
            price:price,
        }

    ])





    console.log(image)
    
    res.redirect('/admin')
    
})

router.post('/log', upload.none(),(req,res) => {
    const {name,password}= req.body;

   
    console.log(name);
    console.log(password);
  
    // Perform authentication logic here (e.g., check against a database or hardcoded values)
    if (name === 'admin' && password === 'admin') {
      // Authentication successful
      res.redirect('/admin'); // renders the admin panel
    } else {
      // Authentication failed
      res.send('wrong password please write correct,name and password') // renders the login form with an error message
    }


});




router.post('/oder', upload.none(),(req, res) => {
    const { odername, Email ,Massage} = req.body;
    
    oderdetails.create([
    {
        name:odername,
        Email:Email,
        massage:Massage
    }

])


  
    res.redirect('/');

});


router.get('*',(req,res)=>
{

    res.send("error")

})

module.exports = router;