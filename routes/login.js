var express = require('express');
var router = express.Router();

var db = require('../db');

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	var data = db.list;
	var flag = false;
	// 验证账号
	for(var i=0;i<data.length;i++){
		if(req.body.idNumber===data[i].idNumber && req.body.passWord===data[i].passWord){
			res.send(data[i].userName);	
			flag = true;
			req.session.isLogin = true;
			req.session.userName = data[i].userName;
			console.log(req.session.userName);
			break;
		}
	}
  	if(!flag){
  		res.send('0');
  		req.session.isLogin = false;
  	}	
});


module.exports = router;