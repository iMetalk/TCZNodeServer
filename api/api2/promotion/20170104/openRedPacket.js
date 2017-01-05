
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		money: 100,
	}

	res.json(result);
}