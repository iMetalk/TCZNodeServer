var express = require('express');
var bodyparser = require('body-parser');
var router = require('./router.js');
var mysql = require('./data/mysql.js');

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));

var routeCB = function routeCallBack(req, res, next){

    console.log(req.method + '/' + req.hostname + req.originalUrl);
    console.log('body:' + JSON.stringify(req.body));

    // Get header
    // console.log(JSON.stringify(req.headers));
    // console.log(req.get('deviceid'));

    next()
}

var dealCB = function  dealCallBack(req, res){
    // 解析post参数
    router.routed(req, res)
}

app.all('/api/*', [routeCB, dealCB]);

app.listen(3000);

// Mysql
// mysql.excuteMysql('DELETE FROM friend WHERE nickName = ?', ["2222"], function(){});

console.log('API server running at 3000');



