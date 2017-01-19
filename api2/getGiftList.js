

module.exports = function (req, res) {
	// 判断参数是否合法
	var giftAtt = [{
		id: "1",
		name: "Lefe",
		size: "10"
	},{
		id: "2",
		name: "Lefe1",
		size: "5"
	},{
		id: "3",
		name: "Lefe2",
		size: "4"
	},]

	var result = {
		code: 200,
		data: [
		{
			giftId: "123",
			gifTitle: "马来西亚海军官方消息称，中国海军一艘039A型潜艇和“长亚一位海军官方介绍，中国海军的潜艇于周二抵达亚庇港",
			giftType: [{
				giftCount: 10,
				giftStockId: "11",
				giftAttrJson: JSON.stringify(giftAtt),
				giftUrl: "http://img05.tooopen.com/images/20140827/sy_69622938384.jpg",}],
		},
		{
			giftId: "124",
			gifTitle: "马来西亚海军官方消息称，中国海军一艘039A型潜艇和“长亚一位海军官方介绍，中国海军的潜艇于周二抵达亚庇港",
			giftType: [{
				giftCount: 40,
				giftStockId: "11",
				giftAttrJson: JSON.stringify(giftAtt),
				giftUrl: "http://img05.tooopen.com/images/20140827/sy_69622938384.jpg",}],

		},]
	}

	res.json(result);
}