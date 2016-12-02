
exports.routed = function (req, res) {

    console.log('path: ' + req.path);
	console.log('original path: ' + req.originalUrl);

	var friend = require('.' + req.path);
    friend.friend(req, res);
};