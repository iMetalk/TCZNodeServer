module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 201,
		data: [{
            userId: "123456",
            nickName: "Lefe"
		}]
	}
	res.json(result);
}