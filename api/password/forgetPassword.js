
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		data: {
            cellphone : "13161319360",
            countryCode : "+86",
            safeQuestion : 1,
            securityCellphone : 1,
            userId : "25436",
            verifyEmail: 1
		}
	}
	res.json(result);
}