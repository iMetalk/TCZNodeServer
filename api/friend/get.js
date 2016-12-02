var sql = require('../../data/sql.js');
var mysql = require('../../data/mysql.js');

exports.getFriendList = function(req, res) {
	var token = req.get('token');

	if (token && typeof(token) == 'string') {
		mysql.excuteMysql(sql.friendSql.select, function(err, results){
    	  res.json({
			code: 200,
			data: JSON.stringify(results),
			msg: 'success'
		  });
       });
	}
	else{
		res.json({
			code: 9100,
			msg: 'Parameter is error'
		});
	}
}