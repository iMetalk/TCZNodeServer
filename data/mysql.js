
var mysql = require('mysql');
var configure = require('../configure.js');

var pool = mysql.createPool(configure.mysql);

exports.excuteMysql = function (sql, values, callback) {

  if (!sql || sql === undefined) {
    console.log('Excute sql error: ' + sql);
    callback();
    return;
  }
  console.log(sql);

  pool.getConnection( function (err, connection) {
    if (err) throw err;

    console.log('connected as id ' + connection.threadId);

    var resultCB = function (err, result, fields) {
      connection.release();

      if (err) {
        console.log('Excute sql error: ' + error);
      }

      callback(err, result, fields);
    };

    if (values && values.length > 0) {
       connection.query(sql, values, resultCB);
    }
    else{
      connection.query(sql, resultCB);
    }

  });

}