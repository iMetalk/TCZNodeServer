var sql = require('../../data/sql.js');
var mysql = require('../../data/mysql.js');
var configure = require('../../configure');

exports.friend = function(req, res) {
	var token = req.get('token');

	if (token && typeof(token) == 'string') {
		mysql.excuteMysql(sql.friend.select, function(err, results){
    	  res.json({
			code: 200,
			data: JSON.stringify(results),
			msg: 'success'
		  });
       });
	}
	else{
		res.json(configure.code9000);
	}
}