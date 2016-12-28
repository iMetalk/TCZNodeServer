

exports.friend = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		awardType: 3,
		wordName: "",
		money: 0.2500,
		lastCount: 1,
	}

	res.json(result);
}