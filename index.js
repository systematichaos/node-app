//Express
const express = require('express');

//web-push
const webpush = require('web-push');

//body-parser
const bodyParser = require('body-parser');

//path
const path = require('path');

//using express 
const app = express();

//using bodyparser
app.use(bodyParser.json())

//storing the keys in variables
const publicVapidKey = 'BIeIMD-Ya8oPPnShK1nox8it5aIRXRE8toQaMMLnqUwYBaMvhVz7IMVW53AQQeAoel7SgpfHk8mVWLEdf1rHOCQ';
const privateVapidKey = 'wIaLUnzfLvItb0V6_DksBEhhZlHDEP-lQI7nURJZWBU';

//setting vapid keys details
webpush.setVapidDetails('mailto:asmin.timsina@gmail.com', publicVapidKey,privateVapidKey);

// const wiki = require('./wiki.js');
// // …
// app.use('/wiki', wiki);


//set the static path 
app.use(express.static(path.join(__dirname, "client")));

const port = 3200;
app.listen(port, ()=>{
    console.log(`server started on ${port}`)
});
