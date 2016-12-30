var sql = require('../../data/sql');
var mysql = require('../../data/mysql');
var configure = require('../../configure');

module.exports = function(req, res) {
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