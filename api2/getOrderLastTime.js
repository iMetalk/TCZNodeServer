

module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		lastTime: 0,
	}

	res.json(result);
}