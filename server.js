var express = require('express');
var logger = require('morgan');
var db = require('./services/db')
var debug = require('debug')('server')
require('dotenv').config()

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');

app.use(logger('dev'));
app.use('/', indexRouter);
app.use('/products', productsRouter);

let port = process.env.PORT || 3005
db.conn()
app.listen(port, () => debug(`LISTENING ON PORT ${port}`));
