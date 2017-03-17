
module.exports = function (req, res) {
	// 判断参数是否合法
	var timestamp = new Date().getTime();
	var members = req.body.members;
	var grouppName = '同创技术团队' + timestamp;
	console.log('members: ' + members);
	var result = {
		code: 200,
		data:{
			groupId: timestamp,
			time: timestamp,
			groupName: grouppName
		}
	}

	res.json(result);
}