
var mysql = require('mysql');
var configure = require('../configure.js');

exports.excuteMysql = function (sql, values, callback) {

  if (!sql || sql === undefined) {
    console.log('Excute sql error: ' + sql);
    callback();
    return;
  }
  console.log(sql);

  var pool = mysql.createPool(configure.mysql);

  pool.getConnection( function (err, connection) {
    if (err) {
      console.log('Get pool connection err:' + err);
      return;
    }
    console.log('connected as id ' + connection.threadId);

    var resultCB = function (err, result, fields) {
      if (err) {
        console.log('Excute sql error: ' + error);
      }
      console.log('select ' + result[0].userId);

      callback(err, result, fields);
    };
    if (values && values.length > 0) {
       connection.query(sql, values, resultCB);
    }
    else{
      connection.query(sql, resultCB);
    }

    connection.release();

  });

}