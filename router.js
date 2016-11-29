
var getFriend = require('./api/friend/get.js')

exports.routed = function (req, res){
	
    getFriend.getFriendList(req, res);
};