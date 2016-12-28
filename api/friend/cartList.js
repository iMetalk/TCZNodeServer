

exports.friend = function (req, res) {
	// 判断参数是否合法
	var result = {
    	code: 200,
    	data : [
    	   {
        	ware_id : "12345",
        	title : "大熊猫",
        	defaultIcon : "http://d.hiphotos.baidu.com/zhidao/pic/item/0e2442a7d933c895623a9a8fd11373f0830200f9.jpg",
        	type: [
        	    {
           		   norms : [
            	     {
             		  id : "122",
               		  name : "尺寸123",
              		  size : "122",
              	     }
              	    ],
              	},
        	],
            price : "200",
            market_price : "400",
            join_count : "4",
            icon : "http://img3.fengniao.com/forum/attachpics/765/112/30582220_600.jpg"
          },
          
        ]
    }

	res.json(result);
}