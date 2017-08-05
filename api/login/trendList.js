module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		data: [{
            trendId: "123456",
            title: "PromiseKit"
		}]
	}
	res.json(result);
}