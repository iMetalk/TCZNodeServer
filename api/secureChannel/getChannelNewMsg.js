
module.exports = function (req, res) {
	// 判断参数是否合法
    var timestamp = new Date().getTime();
    var resutlts = Array();
   for (var index = 0; index < 10; index++) {
       var msg =  {
             id : "58f87116b8a34172b7f1a0ef" + index,
             title : "航行飞天",
             channelId : "12333",
             imageUrl : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496816757047&di=8e3ea92cece9cd78da115198185f3049&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F3bf33a87e950352a344d78d55643fbf2b2118b3b.jpg",
             description : "好好玩",
             content : "一：不是‘’，而是`` 页面之间进行传值时，我错误的写成了 这样的写法是错误的需要这样写，url不是使用的",
             messageType : "1",
             time: timestamp
        };
        resutlts.push(msg);
   }

	var result = {
		code: 200,
		data: resutlts
	}
	res.json(result);
}