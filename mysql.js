
var mysql = require('mysql');

exports.configureMysql = function () {

    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'qwe123',
      database: 'metalk'
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

    var queryFriend = function (err, results, fields){
      console.log('query friend results:' + results[0].userId + ' ' + results[0].nickName);
      if (err) {
          console.log('query friend error:' + err);
      }
    };
    connection.query('SELECT *FROM friend', queryFriend);

}