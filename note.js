/*
记得2015年开始学习Node的时候，刚开始没有人教，凭借着自己在iOS方面的经验学期了Node，给我的感触就是服务器与iOS开发虽然该
有很多相同的地方，但是它的思想是iOS所没有的，所以我要开始学习Node，将来希望可以在服务器方面也能够有所成长。

================ HTTP服务器 ======================

今天学习如何搭建一个Http服务器

至于写Node我使用的是Sublime，当然也可以使用其他的开发工具，比如 WebStorm。使用Sublime的时候，发现写Node不好使，咋么办呢？经过查资料法相sublime有一个packageManager，顺着这个方向往下摸索，

学习Node之前，你必须配置Node的环境，当然网上有很多教程，这里不再赘述


================ NPM ======================
NPM安装
生成 package.json文件 ： npm init



============= mySql使用 ===================
安装mySql
这篇文章一般
1.http://www.cnblogs.com/macro-cheng/archive/2011/10/25/mysql-001.html
有了这篇文章才搞定了，不容易啊
http://www.jianshu.com/p/fd3aae701db9
下载一个客户端：官方的 MYSQLWorkBench
mysql的使用，不错
http://itbilu.com/nodejs/npm/NyPG8LhlW.html

链接方法一：
   //  var connection = mysql.createConnection(configure.mysql);

   //  connection.connect( function(err) {
   //    if (err) {
   //    console.error('error connecting: ' + err.stack);
   //    return;
   //    }
   //    console.log('connected as id ' + connection.threadId);
   // });

      var queryFriend = function (err, results, fields){
      console.log('query friend results:' + results[0].userId + ' ' + results[0].nickName);
      if (err) {
          console.log('query friend error:' + err);
      }
      };

       // Close connnetion
    // connection.end();
    
    // Query friend


    // Add friend
    // var insrtFriend = function(err){
    //   if (err) {
    //       console.log('query friend error:' + err);
    //   }
    // };
    // connection.query('INSERT INTO friend(userId, nickName) VALUES (?, ?)', ['34786', 'wsy'], insrtFriend);

.query(sqlString, callback)

sqlString－要执行的SQL语句
callback－回调函数，其形式为function (error, results, fields) {}

.query(sqlString, values, callback)

sqlString－要执行的SQL语句
values－{Array}，要应用到查询占位符的值
callback－回调函数，其形式为function (error, results, fields) {}


connection.query({
  sql: 'SELECT * FROM `books` WHERE `author` = ?',
  timeout: 40000, // 40s
  values: ['David']
}, function (error, results, fields) {
  // error 是一个错误对象，在查询发生错误时存在
  // results 为查询结果
  // fields 包含查询结果的字段信息
});

多语句查询
connection.query('SELECT 1; SELECT 2', function(err, results) {
  if (err) throw err;

  // `results`是一个包含多个语句查询结果的数组
  console.log(results[0]); // [{1: 1}]
  console.log(results[1]); // [{2: 2}]
});

============= 文件上传 ===================
最近由于项目需求，而服务端最近比较忙，自己需要写一个文件上传的框架，没办法让服务端的
兄弟配合一下，只能自己研究一下Node的文件上传，我想应该很简单。经过查资料发现一个库 Multer，
知道这个库后，我一般第一时间就会到 github上看它的 star ，然后看 README


*/
