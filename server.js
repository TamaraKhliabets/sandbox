'use strict';

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let Product = require('./model/products');

let app = express();
let router = express.Router();

let port = process.env.API_PORT || 3001;
mongoose.connect('mongodb://toma:mlab123qwe@ds111754.mlab.com:11754/wheels');

app.use(bodyParser.urlencoded({ extends: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'api works' });null
});

app.use('/api', router);

router.route('/wheels')
    .get(function (req, res) {
        Product.find(function (err, products) {
            if(err) res.send(err);
            res.json(products);
        })
    });

app.listen(port, function () {
    console.log(`api run on port ${port}`);
});