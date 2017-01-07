
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		id: 123,
		count: 10,
		type5: 0,
		type6: 0,
		type7: 0,
		type8: 0,
		type9: 0,
		type10: 0,
		type11: 0,
		type12: 0,
		type: 13,
	}

	res.json(result);
}