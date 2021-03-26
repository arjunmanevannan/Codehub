const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Codehub', {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(8000))
.catch((err) => console.log(err));

app.set('view engine', 'ejs');

const route = require('./router.js')
app.use('/', route);