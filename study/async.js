
var async = require('async');


/*
* concat
*/

var concatFun = function(aNum, callback){
	// The first parameter to the callback function is an error object
	// You must set not null if no error happen.
	// If one error happend. The concat will stop enum collection, and result will return ago enum results.
	if (aNum > 3) {
		callback("3 is not valid");
	}else{
		callback(null, aNum * 2);
	}

}

var concatDatas = []
for (var i = 0; i < 10; i++) {
	concatDatas.push(i);
}

// here is no guarantee that the results array will be returned in the original 
// order of coll passed to the iteratee function.
async.concat(concatDatas, concatFun, function(err, result) {
	// result:2,4,6
	// err:3 is not valid
	console.log("concat result:" + result);
	console.log("concat err:" + err);
});

// The same as concat but runs only a single async operation at a time.
async.concatSeries(concatDatas, concatFun,  function(err, result) {
	// result:2,4,6
	// err:3 is not valid
	console.log("concatSeries result:" + result);
	console.log("concatSeries err:" + err);
});


/*
* Detect 返回第一个合法的数据
* Returns the first value in coll that passes an async truth test.
*/
var detectFun = function(aNum, callback) {
	if (aNum == 6) {
		callback(null, true);
	}
};

async.detect(concatDatas, detectFun, function(err, result) {
	console.log("detect result:" + result);
	console.log("detect err:" + err);
});


/*
* Each
*/
var tasks = ["A", "B", "C", "D", "E"]

var eachFun = function(aNum, callback){
	doSomeThing(aNum, callback);
}

var eachOfFun = function(aNum, index, callback) {
	console.log("index: " + index);
	doSomeThing(aNum, callback);
}

function doSomeThing(name, callback) {
	console.log("Lefe is doing: " + name);
	if (name == "C") {
		callback("A error happen");
	}else{
		callback(null);
	}
}

// Excute tasks parallelly
async.each(tasks, eachFun, function(err) {
	console.log("each err:" + err);
});

// One task will happen when last task if finish
async.eachSeries(tasks, eachFun, function(err) {
	console.log("eachSeries err:" + err);
});

// Have index of collection
async.eachOf(tasks, eachOfFun, function(err) {
	console.log("eachSeries err:" + err);
});


/*
* Every
* Returns true if every element in coll satisfies an async test. If any iteratee 
* call returns false, the main callback is immediately called.
*/

var everyFun = function(aNum, callback){
	callback(null, true);
};

async.every(tasks, everyFun, function(err, result){
	console.log("Every result: " + result);
	console.log("Every err: " + err);
});


/*
* Filter 过滤掉不合法的数据
* Returns a new array of all the values in coll which pass an async truth test. 
* This operation is performed in parallel, but the results array will be in the same 
* order as the original.
*/
var filterFun = function(aNum, callback) {
	callback(null, true);
};

async.filter(tasks, filterFun, function(err, result){
	console.log("Filter result: " + result);
	console.log("Filter err: " + err);
});

/*
* Map
* Produces a new collection of values by mapping each value in coll through the iteratee function. 
* 遍历集合中的数据并产生一个新的集合，如果发生错误，将终止遍历
*/
var mapFun = function(aNum, callback){
	if (aNum > 8) {
		callback("Map error");
	}else{
		callback(null, aNum*2);
	}
}

async.map(concatDatas, mapFun, function(err, result){
	console.log("Map result: " + result);
	console.log("Map err: " + err);
});


/*
* Reduce
* Memo is last state
* aNum is the collection item
* 给定一个初始值，加上集合中每个元素
*/
var reduceData = [1, 2, 3];

var reduceFun = function(memo, aNum, callback){
	console.log("memo: " + memo + " aNum: " + aNum);
	callback(null, aNum + memo);
}
// 100 is init value
async.reduceRight(reduceData, 100, reduceFun, function(err, result){
	console.log("Reduce result: " + result);
	console.log("Reduce err: " + err);
});

/*
* Reject
* The opposite of filter. Removes values that pass an async truth test.
* 过滤掉不合法的数据
*/
var rejectData = [3, 9, 1];
var rejectFun = function(aNum, callback){
	callback(null, aNum == 9);
}

async.reject(rejectData, rejectFun, function(err, result){
	console.log("Reject result: " + result);
	console.log("Reject err: " + err);
});


/*
* Some
* Returns true if at least one element in the coll satisfies an async test. If any 
* iteratee call returns true, the main callback is immediately called.
* 查找是否有满足条件的数据，如果有则返回 true，否则返回 false
*/
var someData = [31, 8, 2];
var someFun = function(aNum, callback){
	callback(null, aNum == 5);
}

async.some(someData, someFun, function(err, result){
	console.log("Some result: " + result);
	console.log("Some err: " + err);
});


/*
* SortBy
* 逆序排列
*/
var sortData = [31, 1, 2, 10];
var sortLetter = ['a', 'c', 'b'];
var sortFun = function(aNum, callback){
	callback(null, aNum * -1);
}

async.sortBy(sortData, sortFun, function(err, result){
	console.log("SortBy result: " + result);
	console.log("SortBy err: " + err);
});



