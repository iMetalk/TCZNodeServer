module.exports = function (req, res) {
    // 判断参数是否合法
    var result = {
        code: 200,
        data: {
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
           commodityInfo : [{
                commodityId : "583f7f992de9f",
                freight : 0,
                voucherLimit : 10,
                activityInfo: [{
                    activityId: "1234444",
                    defaultIcon: "http://img05.tooopen.com/images/20140827/sy_69622938384.jpg",
                    activityName: "买一送一",
                    activityRule: 1,
                    presentNumber: 100,
                    giftList: [{

                        ///////
                         ware_id : "12346",
                         ware_title : "入交换领域",
                         defaultIcon : "http://img5.imgtn.bdimg.com/it/u=4149863188,614245067&fm=21&gp=0.jpg",
                         type: [{
                              price : "4000000",
                               market_price : "1333400",
                               join_count : "4",
                               icon : "http://imgsrc.baidu.com/baike/pic/item/3bf33a87e950352a344d78d55643fbf2b2118b3b.jpg",
                               norms : [{
                                    id : "122",
                                    name : "尺寸123",
                                    size : "122",
                                },],
                         },],
                     },
                     ////////
                     {

                        ///////
                         ware_id : "12346",
                         ware_title : "是“用于交换的劳动产品”,随着经济的发展,许是“用于交换的劳动产品”,随着经济的发展,许是“用于交换的劳动产品”,随着经济的发展,许是“用于交换的劳动产品”,随着经济的发展,许多自然资源以及非劳动产品也进入交换领域",
                         defaultIcon : "http://img5.imgtn.bdimg.com/it/u=4149863188,614245067&fm=21&gp=0.jpg",
                         type: [{
                              price : "4000000",
                               market_price : "1333400",
                               join_count : "2",
                               icon : "http://imgsrc.baidu.com/baike/pic/item/3bf33a87e950352a344d78d55643fbf2b2118b3b.jpg",
                               norms : [{
                                    id : "122",
                                    name : "尺寸123",
                                    size : "122",
                                },],
                         },],
                     },

                     ////////

                     ]

                },]   
           }],

        }
    }

    res.json(result);
}