
// 配置当前需要输出的用户 log 日志
/**
 * 王素燕 527554
 */

// 配置 log
// ================================================

var userId = '527554';     // 可以查看谁的日志，空的时候查看所有人的日志
var isOpenNetLog = true;  // 是否开启网络请求日志
var isOpenDBLog = false;   // 是否打开数据库日志
var isOpenMsgLog = false;   // 是否打开消息日志
var isOpenOtherLog = true  // 是否打开其他的日志

// ===============================================

var netlogFlag = '[TCZNetManager.m]';
var dbLogFlag = '[TCZPaeseSQL.m]';
var msgLogFlag = '[TCZMessageServer';

module.exports = function (req, res) {
	// 判断参数是否合法
	var result = {
		code: 0,
	};

    var logMsg = req.body.log;
    var aBodyUserId = req.body.userId;

    var logMsgFun = function(aLogMsg){
        if (aLogMsg.indexOf(netlogFlag) != -1) {
            if(isOpenNetLog){
                console.log('😊 ' + aLogMsg + ' 😊');
            }
        } 
        else if (aLogMsg.indexOf(dbLogFlag) != -1) {
            if(isOpenDBLog){
                console.log('😊 ' + aLogMsg + ' 😊');
            }
        }
        else if (aLogMsg.indexOf(msgLogFlag) != -1) {
            if(isOpenMsgLog){
                console.log('😊 ' + aLogMsg + ' 😊');
            }
        }
        else {
            if (isOpenOtherLog) {
               console.log('😊 ' + aLogMsg + ' 😊');
            }
        }
    };

    if (userId.length == 0) {
        logMsgFun(logMsg);
    } else if (aBodyUserId == userId) {
        logMsgFun(logMsg);
    }
    
	res.json(result);
}