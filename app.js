var express = require('express');
var bodyparser = require('body-parser');
var router = require('./router.js');

var app = express();
app.use(bodyparser({extended: false}))

var routeCB = function routeCallBack(req, res, next){

    console.log(req.method + '/' + req.host + req.originalUrl);
    console.log(req.body);

    next()
}

var dealCB = function  dealCallBack(req, res){
    // 解析post参数
    router.routed(req, res)
}

app.post('/api/*', [routeCB, dealCB]);

app.listen(3000);

console.log('Server running at 3000');



