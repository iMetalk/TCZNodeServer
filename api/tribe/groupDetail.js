
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
			groupName: grouppName,
			groupRemark: 'Lefe remark',
			haveName: 1,
			isSave: 0,
			receiveMsg: 1,
			creater: '527557',
			groupMembers: [
			{friendId : "12", receiveMsg:1, nickName:"武卓觉得附近的李开复的减肥的浪费房价大幅度放到", duty:"iOS开发工程师", iconUrl:"http://tupian.qqjay.com/tou2/2017/0103/5e7be46b38ec437011f1808b39112944.jpg"},
		{friendId : "13", signName:'会飞的鸟', nickName:"田向阳", duty:"Android开发工程师", iconUrl:"http://img17.3lian.com/d/file/201702/13/8e7b045808139074a133548eff01bb08.jpg"},
		{friendId : "19", signName:'会飞的鸟', nickName:"Make", duty:"数据库工程师",iconUrl:"http://tx.haiqq.com/uploads/allimg/150322/02220a440-1.jpg"}
			]
		}
	}

	res.json(result);
}