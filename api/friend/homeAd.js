
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		icon: "http://img05.tooopen.com/images/20140827/sy_69622938384.jpg",
		content: "http://news.baidu.com/"
	}

	res.json(result);
}