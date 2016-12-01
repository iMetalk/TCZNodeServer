
var mysql = require('mysql');
var configure = require('../configure.js');

exports.configureMysql = function () {
    var mysqlConfigure = configure.configure.mysql;

    var connection = mysql.createConnection({
      host     : mysqlConfigure.host,
      user     : mysqlConfigure.user,
      password : mysqlConfigure.password,
      database: mysqlConfigure.database
      // password : ';gb<V3a-NsD9'
    });

    connection.connect(function(err) {
      if (err) {
      console.error('error connecting: ' + err.stack);
      return;
      }
      console.log('connected as id ' + connection.threadId);
   });

    // Close connnetion
    // connection.end();
    
    // Query friend
    var queryFriend = function (err, results, fields){
      console.log('query friend results:' + results[0].userId + ' ' + results[0].nickName);
      if (err) {
          console.log('query friend error:' + err);
      }
    };
    connection.query('SELECT *FROM friend', queryFriend);

    // Add friend
    var insrtFriend = function(err){
      if (err) {
          console.log('query friend error:' + err);
      }
    };
    connection.query('INSERT INTO friend(userId, nickName) VALUES (?, ?)', ['34786', 'wsy'], insrtFriend);

}