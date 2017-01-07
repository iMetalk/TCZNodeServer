
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		encryptStr: "1234",
	}

	res.json(result);
}