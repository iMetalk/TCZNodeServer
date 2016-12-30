var sql = require('../../data/sql');
var mysql = require('../../data/mysql');
var configure = require('../../configure');

module.exports = function (req, res) {
	// 判断参数是否合法
	var userId = req.body.userId;

	if (!userId || userId === undefined) {
		res.json(configure.code9000);
		return;
	}

	// 插入数据库
	mysql.excuteMysql(sql.friend.delete, [userId], function (err, results) {
		if (err) {
			res.json(configure.code9100);
			return;
		}

		res.json({code: 200, msg: 'Success'});
	});
}