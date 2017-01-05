
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		type: 3,
		recordId: "",
		count: 10,
		msg: "Have no more times",
	}

	res.json(result);
}