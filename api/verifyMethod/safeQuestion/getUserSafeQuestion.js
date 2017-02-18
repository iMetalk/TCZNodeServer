

module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		data:[
		{id : 1, subject: "Hello question1"},
		{id : 2, subject: "Hello question2"},
		{id : 3, subject: "Hello question3"}
		]
	}

	res.json(result);
}