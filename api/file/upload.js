var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

// 文件系统
var fs = require('fs');
// 上传模块
var multer = require('multer');
// 实例化上传模块(前端使用参数名为file)
var upload = multer({ dest: 'uploads/'}).single('file');

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

// 单文件上传
router.post("/",upload,function(req,res,next){
    //  请求路径
    var url = global.baseURL+req.url;

      var obj = req.file;
      console.log('obj====',obj);
      var tmp_path = obj.path;
      var new_path = "public/images";
      console.log("原路径：" + tmp_path);

      /*修改上传文件地址*/
      upload(req,res,function(err){
        if (err) {
            console.log('上传失败');
        }else{
            console.log('上传成功');
        }
    });

    // 反馈上传信息
     res.send({
          'states':'success'
     });
});


app.listen(3001);

// Mysql
// mysql.excuteMysql('DELETE FROM friend WHERE nickName = ?', ["2222"], function(){});

console.log('API server running at 3001');