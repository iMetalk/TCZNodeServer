
module.exports = function (req, res) {
	// 判断参数是否合法
	var package1 = {
		emojis: [
	          {emojiId: "1", description:"噩梦",  url: "http://img2.imgtn.bdimg.com/it/u=3362762505,2381532441&fm=23&gp=0.jpg"},
	          {emojiId: "2", description:"梦想",  url: "http://qq.111cn.net/uploads/allimg/140811/224124I05-70.gif"},
	          {emojiId: "3", description:"撒娇",  url: "http://2a.zol-img.com.cn/product/106_500x2000/256/ceNxzxk6yD5pE.gif"},
	          {emojiId: "4", description:"娇羞可爱",  url: "http://pic76.nipic.com/file/20150827/18671724_222921114787_2.jpg"}
	          ]
	}

	res.json(package1);
}

