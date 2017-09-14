module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		data: {
            userId: "123456"
		}
	}
	res.json(result);
}