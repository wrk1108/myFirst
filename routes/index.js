var express = require('express');
var router = express.Router();
 
const yrx = require('../database/yrx');
const hotclass = require('../database/hotclass');

const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index',{ 
      youxuan:yrx[0],
      rebang:yrx[1],
      xinjin:yrx[2],
      // 热门分类
      ggs_1:hotclass[0][0],
      ggs_2:hotclass[0][1],
      gbj_1:hotclass[1][0],
      gbj_2:hotclass[1][1],
      tkx_1:hotclass[2][0],
      tkx_2:hotclass[2][1],
      ox_1:hotclass[3][0],
      ox_2:hotclass[3][1],
      zy_1:hotclass[4][0],
      zy_2:hotclass[4][1]
    });

});


// 详情页
router.get('/play', function(req, res, next) {
  res.render('play', { title: 'Express' });
});
// 播放页
router.get('/content', function(req, res, next) {
  res.render('content', { title: 'Express' });
});


module.exports = router;
