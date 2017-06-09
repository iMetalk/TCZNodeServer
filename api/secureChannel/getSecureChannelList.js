
module.exports = function (req, res) {
	// 判断参数是否合法
    var timestamp = new Date().getTime();

	var result = {
		code: 200,
        data: {
            secureChannel : [{
            channelId : "12333",
            channelName : "Test lefe",
            channelIcon : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496825351929&di=a603e81ac097eaaa89a73151d5314512&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff9dcd100baa1cd1179b7f73fb312c8fcc3ce2daf.jpg",
            channelInstruction : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496825351929&di=a603e81ac097eaaa89a73151d5314512&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff9dcd100baa1cd1179b7f73fb312c8fcc3ce2daf.jpg",
            isMsgNotification : 0,
            isVerify : 1
            }],
      advertList : [{
      channelId : "",
      channelName : "",
      channelIcon : "",
      channelInstruction : "",
      isMsgNotification : ""
    }],
    adType : [{
      id : "",
      sort : "",
      type : ""
    }],
    bannerUrl : ""
        }
	}
	res.json(result);
}