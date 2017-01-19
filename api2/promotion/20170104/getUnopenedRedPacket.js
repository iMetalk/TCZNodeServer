
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		recordId: 123,
		count: 10,
		type5: 0,
		type6: 1,
		type7: 1,
		type8: 1,
		type9: 1,
		type10: 1,
		type11: 1,
		type12: 1,
		type: 5,
	}

	res.json(result);
}