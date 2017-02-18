

module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 225,
		data: {
			token: "h3bjfd739939fff98329",
			loginName: "13161319360",
			userId: "527557",
			vipCode: "123456",
			nickName : "Lefe",
			icon : "http://img2.imgtn.bdimg.com/it/u=1023427778,1418782476&fm=23&gp=0.jpg",
			signName : "路在何方，路在脚下",
			sex : 0,
			birthday : "1991.10.30",
			location : "内蒙古包头市",
			email : "iMetalk@163.com",
			duty : "我的职责",
			fromWhere : "BeiJing",
			countryCode : "+86",
			verifyEmail : 1,
			securityCellphone : 1,
			safeQuestion : 1,
			vipInfo : {
				vipLevel : "11",
				vipStartDate : "2016.1.1",
				vipEndDate : "2017.1.1"
			},
			setting : {
              deviceLock : 0,
              addFriendsVerification : 0,
              recommendationFriendCard : 0,
              cellphoneSearch : 1,
              userIdSearch : 1,
              showMyContact : 0,
              showStrangerInEvent : 1,
              allowAddEventGroup : 0,
              receiveMsgNotice : 0,
              showMsgNoticeInformation : 0,
              bellReminderInApplication : 0,
             shakeReminderInApplication : 0,
             isRememberPassword: 1
         },


		}
	}

	res.json(result);
}