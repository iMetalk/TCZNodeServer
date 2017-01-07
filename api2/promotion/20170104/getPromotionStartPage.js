
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		promotionId: 100,
		type: 2,
		url: "https://www.baidu.com/",
		pic: "http://imgsrc.baidu.com/baike/pic/item/3bf33a87e950352a344d78d55643fbf2b2118b3b.jpg",
		timeEnd: "1483719326"
	}

	res.json(result);
}