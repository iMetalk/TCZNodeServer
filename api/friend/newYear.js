
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		awardType: 4,
		wordName: "如",
		results: [1, 2, 3],
		money: 23.2500,
		lastCount: 1,
		words: [{

		}],
	}

	res.json(result);
}