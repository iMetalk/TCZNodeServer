var testDict = [
{name: 'lefe_wsy', sex: 1, data: [{icon: "http://www.baidu.com"}]}, 
{name: 'lefe_wsy2', sex: 2, data: [{icon: "http://www.baidu.com"}]}
];

for(var index in testDict){
	console.log("index: " + index);
	console.log("testDict[index]: " + testDict[index]);
	console.log("testDict[index].name: " + testDict[index].name);

	var datas = testDict[index].data;
	for(var dataIndex in datas){
		console.log("data icon:" + datas[dataIndex].icon);
	}
}

for (var i = 0; i < testDict.length; i++){
    var dict = testDict[i];
    console.log("for i dict: " + dict.name);

    var viewWidth = 17*i + 20;
    var height = viewWidth * i + i*30;
    console.log(viewWidth);
    console.log(height);
}



    //             {
    //         attr = 141;
    //         code =             {
    //             code = BBB;
    //             msg = "\U8be5\U5546\U54c1\U5df2\U7ecf\U4e0b\U67b6";
    //         };
    //         id = 5832f6a57194a;
    //     }
    // );(


// for(var dict of testDict){
// 	console.log("dict" + dict);
// 	console.log(dict.name);
// }

 //  var jsResult = result.toJS();
 // for (var failedDic of jsResult) {
 //        var jsFailedDic = failedDic;
 //        var failStr = jsFailedDic["attr"];
 //        var attrArray = failStr.split(",");
 //        var attrSet = NSSet.alloc().initWithArray(attrArray);
 //        var jsCoGoodsArray = self.coGoodsArray().toJS();

 //        for (var goods of jsCoGoodsArray) 
 //        {
 //            if (failedDic["id"] == goods.commodityId()) {
 //                var formatSet = NSSet.alloc().initWithArray(goods.formatIds());
 //                if (attrSet.isEqualToSet(formatSet)) {
 //                    var dic = failedDic["code"];
 //                    if (dic["code"] == "AAA") {
 //                        goods.setCreateOrderFailedReason(4);
 //                    } else if (dic["code"] =="BBB") {
 //                        goods.setCreateOrderFailedReason(2);
 //                    } else if (dic["code"] == "CCC") {
 //                        goods.setCreateOrderFailedReason(3);
 //                    } else if (dic["code"] == "DDD") {
 //                        goods.setCreateOrderFailedReason(1);
 //                    }
 //                }
 //            }

 //        }
 //    }