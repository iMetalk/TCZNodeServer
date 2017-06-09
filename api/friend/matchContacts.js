

module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		data:[
		{friendId : "75181",status:0, nickName:"武卓", duty:"iOS开发工程师", iconUrl:"http://tupian.qqjay.com/tou2/2017/0103/5e7be46b38ec437011f1808b39112944.jpg"},
		{friendId : "25436",status:2, nickName:"田向阳", duty:"Android开发工程师", iconUrl:"http://img17.3lian.com/d/file/201702/13/8e7b045808139074a133548eff01bb08.jpg"},
		{friendId : "55746",status:2, nickName:"薛好霞", duty:"美工",iconUrl:"http://img17.3lian.com/d/file/201702/13/39fe9fc66f090b74257150e6b8981567.jpg"},
		{friendId : "85875",status:3, nickName:"王素燕", duty:"iOS开发工程师",iconUrl:"http://v1.qzone.cc/avatar/201407/14/10/21/53c33e91cfbe1777.jpg%21200x200.jpg"},
		{friendId : "76257",status:4, nickName:"美丽", duty:"我是美工",iconUrl:"http://v1.qzone.cc/avatar/201508/03/15/03/55bf125268297129.jpg%21200x200.jpg"},
		{friendId : "76287",status:0, nickName:"嘉华", duty:"技术负责人",iconUrl:"http://www.qqtouxiang.com/d/file/qinglv/20170212/99ae44565188db6c54e1d034de2e19c9.jpg"},
		{friendId : "18",status:0, nickName:"Lefe", duty:"数学老师",iconUrl:"http://img2.touxiang.cn/file/20160329/b874db65ad1bd0891f73a8eaa57aa846.jpg"},
		{friendId : "66363",status:2, nickName:"Make", duty:"数据库工程师",iconUrl:"http://tx.haiqq.com/uploads/allimg/150322/02220a440-1.jpg"},
		{friendId : "16461",status:3, nickName:"小明", duty:"面包师",iconUrl:"http://img2.touxiang.cn/file/20160325/ee312f6ec7689276a25f533d76a6cda3.jpg"},
		{friendId : "16563",status:4, nickName:"￥￥￥", duty:"物业管理",iconUrl:"http://img17.3lian.com/d/file/201702/13/1fa5a3ccf6c17f5c1bd2c56352dd65d1.jpg"},
		{friendId : "46656",status:3, nickName:"Lyn", duty:"菲律宾",iconUrl:"http://www.qqtouxiang.com/d/file/qinglv/20170212/480fdf6104f2eca4bea85d6cbd60148a.jpg"}
		]
	}

	res.json(result);
}