
exports.routed = function (req, res){
    var userId = req.body.userId;
    var json = {
        name : 'wsy',
        sex : 'boy'
    }
    res.json(json);
};