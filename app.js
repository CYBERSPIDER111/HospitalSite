const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});
const port=8000;

//Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

  const contact = mongoose.model('Contact', contactSchema);


app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

//endpoints
app.get('/',(req,res)=>{
    const params = { }
    res.status(200).render('home.pug',params);
})
app.get('/contact',(req,res)=>{
    const params = { }
    res.status(200).render('contact.pug',params);
})

app.post('/contact',(req,res)=>{
    const params = { }
    res.status(200).render('contact.pug',params);
})

//start server
app.listen(port, () => {
    console.log(`the app has started on port ${port}`)
});