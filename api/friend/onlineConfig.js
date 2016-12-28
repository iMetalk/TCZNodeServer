
exports.friend = function (req, res) {
	// 判断参数是否合法
	var tabBatItemsJson = {
			data: [
			{
				title: "shop",
				commonUrl: "http://upload-images.jianshu.io/upload_images/1664496-fa10ebc7b227d9c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
				selectedUrl: "http://upload-images.jianshu.io/upload_images/1664496-111e997f67842bc2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
			},
			{
				title: "Collection",
				commonUrl: "http://upload-images.jianshu.io/upload_images/1664496-359761acc73123fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
				selectedUrl: "http://upload-images.jianshu.io/upload_images/1664496-111e997f67842bc2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
			},
			{
				title: "Cart",
				commonUrl: "http://upload-images.jianshu.io/upload_images/1664496-c1fd428e32c8bb73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
				selectedUrl: "http://upload-images.jianshu.io/upload_images/1664496-111e997f67842bc2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
			},
			{
				title: "Personal",
				commonUrl: "http://upload-images.jianshu.io/upload_images/1664496-2035e218c9b1d4c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
				selectedUrl: "http://upload-images.jianshu.io/upload_images/1664496-111e997f67842bc2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
			}
			]
	};

	var result = {
		code: 200,
		tabBatItems: JSON.stringify(tabBatItemsJson),
	}

	res.json(result);
}