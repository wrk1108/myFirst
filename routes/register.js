var express = require('express');
var router = express.Router();

var db = require('../db');

router.get('/', function(req, res, next) {
  res.render('register', { src: '/images/35fd817a146fb1b080c05e3e45d5042a-avatarbg.png' });
});
router.post('/', function(req, res, next) {
  	var data = db.list;
  	var flag = true;	
  	if(req.body.passWord){
  		for(var i=0;i<data.length;i++){
	  		if(req.body.idNumber===data[i].idNumber){
	  			res.send('0');
	  			flag = false;
	  			break;
	  		}
	  	}
	  	if(flag){
	  		db.add(req.body);
	  		res.send('1');
	  	}
	 }else{
	 	for(var i=0;i<data.length;i++){
	 		// 判断账号是否存在
	  		if(req.body.idNumber===data[i].idNumber){
	  			res.send('0');
	  			flag = false;
	  			break;
	  		}
	  	}
	  	if(flag){
	  		
	  		res.send('1');
	  	}
	 }

});


module.exports = router;