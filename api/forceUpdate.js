
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 0,
        isForce: 0,
        title: '1.新加动态\n2.好友 \n3.好好的奋斗发挥到库发动机开发地方发'
	}

	res.json(result);
}