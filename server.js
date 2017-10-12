// 模块引入
var express       = require('express');
var app           = new (express)();
var compression   = require('compression');
var config        = require("./src/utils/configs");
var bodyParse     = require("body-parser");
var port          = config.port;

// 压缩传输，也可以使用gzip模块
app.use(compression());

// 微信验证文件，一次性验证，上线时可删除。
app.get("/MP_verify_8NkWdD5pYfIZ0k0p.txt",(req,res)=>{
  var body = "8NkWdD5pYfIZ0k0p";
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(body);
  res.end();
});

// 微信重定向
app.get("/getOpenid",(req,res)=>{
  var code = req.query.code;
  var url = req.query.url;
  res.writeHead(301, {'Location': 'http://'+url+'?code='+code});
  res.end();
});

// 监听方法
app.listen(port,function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Server is listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
