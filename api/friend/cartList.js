

module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
    	code: 200,
    	data : [
    	  {
        	ware_id : "12345",
        	title : "再爆猛料！汉丽轩将顾客吃剩口水肉重新端上餐桌",
        	defaultIcon : "http://d.hiphotos.baidu.com/zhidao/pic/item/0e2442a7d933c895623a9a8fd11373f0830200f9.jpg",
        	type: [
        	    {
                 price : "200",
                 market_price : "400",
                 join_count : "4",
                 icon : "http://img3.fengniao.com/forum/attachpics/765/112/30582220_600.jpg",
           		   norms : [
            	      {
             		       id : "122",
               		     name : "颜色",
              		     size : "红色",
              	    }
              	 ],
              },
              {
                 price : "430",
                 market_price : "500",
                 join_count : "4",
                 icon : "http://img0.imgtn.bdimg.com/it/u=3665481911,3724911335&fm=21&gp=0.jpg",
                 norms : [
                    {
                       id : "123",
                       name : "尺寸",
                       size : "122",
                    }
                 ],
              },
        	],

        },

        {
          ware_id : "12346",
          title : "品(Commodity / Goods)在马克思主义政治经济学中,商品的定义是“用于交换的劳动产品”,随着经济的发展,许多自然资源以及非劳动产品也进入交换领域",
          defaultIcon : "http://img5.imgtn.bdimg.com/it/u=4149863188,614245067&fm=21&gp=0.jpg",
          type: [
              {
                 price : "4000000",
                 market_price : "1333400",
                 join_count : "4",
                 icon : "http://imgsrc.baidu.com/baike/pic/item/3bf33a87e950352a344d78d55643fbf2b2118b3b.jpg",
                 norms : [
                    {
                       id : "122",
                       name : "尺寸123",
                       size : "122",
                    },
                 ],
              },
          ],

        },
          
      ]
    }

	res.json(result);
}