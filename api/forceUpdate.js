
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		has_new_version: false,
		url: "",
		version: "1.0.0",
		force_update: false
	}

	res.json(result);
}