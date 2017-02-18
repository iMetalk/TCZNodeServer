

module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		data: {
			authCodeUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1486463089768&di=e5b26a7bf1f5331bb534d77191c351e4&imgtype=0&src=http%3A%2F%2Fimages2015.cnblogs.com%2Fblog%2F822721%2F201607%2F822721-20160720230416701-1768858575.png",
			countryCode: "+86",
			cellphone: "13161319360",
			userId: "527554",
			vipCode: "123456"
		}
	}

	res.json(result);
}