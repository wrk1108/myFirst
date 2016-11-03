'use strict';

//包含express主模块 
const express = require('express');
const router = express.Router();

//包含multer文件上传处理模块
const multer = require('multer');

//========使用multer自定义文件处理==================
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public\\uploads')//指定上传文件保存路径
  },
  filename: function (req, file, cb) {
  	//将文件处理对象中的originalname属性使用"."分割成数组
  	var fileExt = (file.originalname).split('.');
  	//拼接上传文件后缀
    cb(null, file.fieldname + '_' + Date.now() + '.' + fileExt[fileExt.length-1])
  }
})
var upload = multer({ storage: storage });

//========使用multer自定义文件处理结束==================

router.use(upload.single('upfile'));

//创建路由 
router.post('/', function(req,res){ 

	//接收post过来的信息
  var url = req.file.path;
	
  var urls = url.substring(url.indexOf("\\")+1);
  console.log(urls);//多文件上传
  res.render('register', { src : urls });
  
});




module.exports = router;


