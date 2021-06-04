var express = require('express');
//var path = require('path');
var logger = require('morgan');
var db = require('./services/db')

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');

app.use(logger('dev'));
app.use('/', indexRouter);
app.use('/products', productsRouter);

let port = 4000
db.conn()
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
