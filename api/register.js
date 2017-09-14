module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 200,
		data: {
            token : "1234444444",
            uniqueId : "12344",
            cellphone : "13161319360",
            nickName : "lefe",
            icon : "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1505190001&di=c7a7dd187c0c954f8549fc364bb5c92a&src=http://img4q.duitang.com/uploads/item/201502/15/20150215230510_FCHPA.jpeg",
            birthday : "1991-10-30",
            sex : 2,
            toPay : 3,
            toDeliver : 0,
            toReceive : 4,
            toAssess : 4,
            qqUnionId : "lefe",
            wxUnionId : "lefe",
            sinaUnionId : "lefe",
            isHavePayPassword : false,
            countryCode : "86"
		}
	}
	res.json(result);
}