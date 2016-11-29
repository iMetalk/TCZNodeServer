
exports.getFriendList = function(req, res) {
	var token = req.get('token');

	if (token && typeof(token) == 'string') {
		var friendListJson = {
			code: 200,
			msg: 'Success',
			data: [
			{name: 'wsy', sex: '1', nickName: 'Hello', address: 'BeiJing'},
			{name: 'lefe', sex: '1', nickName: 'Hello', address: 'BeiJing'},
			{name: 'wz', sex: '1', nickName: 'XiaoZuoZi', address: 'ShangHai'},
			{name: 'xhx', sex: '1', nickName: 'DaHua', address: 'BeiJing'},
			{name: 'txy', sex: '1', nickName: 'XY', address: 'BeiJing'}
			]
		}
		res.json(friendListJson)
	}
	else{
		res.json({
			code: 9100,
			msg: 'Parameter is error'
		});
	}
}