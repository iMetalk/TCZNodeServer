
var configure = require('./configure');

exports.routed = function (req, res) {

	try{
        var api = require('.' + req.path);
		api(req, res);
	}
	catch(e){
        console.log('path: ' + req.path);
	    console.log('original path: ' + req.originalUrl);
	    res.json(configure.code9200);
	}
};