var sql = require('../../data/sql');
var mysql = require('../../data/mysql');
var configure = require('../../configure');

exports.friend = function (req, res) {
	// 判断参数是否合法
	var userId = req.body.userId;
	var nickName = req.body.nickName;

	if (!userId || userId === undefined) {
		res.json(configure.code9000);
		return;
	}

	if (!nickName || nickName === undefined) {
		res.json(configure.code9000);
		return;
	}
// conn.query('insert into nodejs_user(liuyan_username,liuyan_userpass) values ("'+req.body.name+'","'+req.body.pass+'")');

    var dbCB = function(err, results) {
    	if (err) {
			res.json(configure.code9100);
			return;
		};

		res.json({code: 200, msg: 'Success'});
    };

	// 插入数据库
	mysql.excuteMysql(sql.friend.insert, [userId, nickName], dbCB);
}