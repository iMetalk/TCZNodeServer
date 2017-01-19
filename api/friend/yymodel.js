module.exports = function (req, res) {
	// 判断参数是否合法
	var adJson = {
		code: 200,
		bookId: "123",
		auths: [{nickName: "lefe"}, {nickName: "lefe2"}],
	}

	res.json(adJson);
}
