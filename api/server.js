module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		data: {
            money: "http://192.168.199.147:300"
		}
	}
	res.json(result);
}