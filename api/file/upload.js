
var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express()

app.post('/api/upload/*', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
    console.log(req.method + '/' + req.hostname + req.originalUrl);
    console.log('body:' + JSON.stringify(req.body));

    res.json({code:200});
})

app.listen(3001);

console.log('Upload server running at 3001');
