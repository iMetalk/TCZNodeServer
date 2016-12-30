
module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
	  code: 200,
      data : {
        addressInfo : {  
        	isDefault : "1",
        	addressId : "12344",
        	consignee : "大花",
        	mobile : "13161319360",
        	country : "中国",
        	province : "北京",
        	city : "北京",
        	district : "北京",
        	address : "天元港中心B座2001",
        },
     	balance_rmb : "200",
        balance_snf_coin : "20",
        balance_voucher : "40",
        commodityInfo : [
          {
              commodityId : "333333",
        	  freight : "0",
        	  voucherLimit : "20",
        	  activityInfo : [
                {
                	activityType : "春节活动",
            	    activityName : "买一赠一",
            	    activityRule : "春节活动规则" ,
           	   	    presentNumber : "2",
                    giftList : [
                      { 
                       giftId : "22222",  //赠品ID
                       giftName : "送你的礼物",  //赠品名称
                      },
                    ]
                },
        	  ]  
            }
        ],
      }
	}

	res.json(result);
}
