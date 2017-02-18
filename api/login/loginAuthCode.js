

module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		data: {
			url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1486464669633&di=8374139a43b5cbc107fa1202489f59ee&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F3bf33a87e950352a344d78d55643fbf2b2118b3b.jpg"
		}
	}

	res.json(result);
}