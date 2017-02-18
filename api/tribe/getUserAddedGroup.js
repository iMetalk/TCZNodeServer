
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		data:[
		{groupId : "12", groupName:"武卓", groupCount:20, groupIcon:"http://tupian.qqjay.com/tou2/2017/0103/5e7be46b38ec437011f1808b39112944.jpg"},
		{groupId : "13", groupName:"田向阳", groupCount:10, groupIcon:"http://img17.3lian.com/d/file/201702/13/8e7b045808139074a133548eff01bb08.jpg"},
		{groupId : "14", groupName:"薛好霞", groupCount:3,groupIcon:"http://img17.3lian.com/d/file/201702/13/39fe9fc66f090b74257150e6b8981567.jpg"},
		{groupId : "15", groupName:"王素燕", groupCount:4,groupIcon:"http://v1.qzone.cc/avatar/201407/14/10/21/53c33e91cfbe1777.jpg%21200x200.jpg"},
		{groupId : "16", groupName:"美丽", groupCount:5,groupIcon:"http://v1.qzone.cc/avatar/201508/03/15/03/55bf125268297129.jpg%21200x200.jpg"},
		{groupId : "17", groupName:"嘉华", groupCount:2,groupIcon:"http://www.qqtouxiang.com/d/file/qinglv/20170212/99ae44565188db6c54e1d034de2e19c9.jpg"},
		]
	}

	res.json(result);
}