exports.friend = function (req, res) {
	// 判断参数是否合法
	var adJson = {
		code: 200,
		url: "http://img05.tooopen.com/images/20140827/sy_69622938384.jpg"
	}

	res.json(adJson);
}
