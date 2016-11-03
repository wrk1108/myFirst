// 轮播图设置
$(function(){
	$('#lbt-pager li').each(function(i){
		$(this).attr({num:i});
	});
	$('#lbtimg li').each(function(i){
		$(this).attr({num:i});
		$(this).css("zIndex",-i+10);
	});
	var n = 0,a = 0;
	var src = $('#lbtimg li[num="'+n+'"] img').attr('src');
	// 蒙版间距
	$('#total div').each(function(i){ 
		$(this).css({left:a+'rem',top:0,background:'url('+src+') no-repeat 0 0'});
		a+=4.075;
		$(this).css({'backgroundPositionX':-4.125*i+'rem',backgroundSize:'41.25rem 15.517rem'});
	});
	$('#lbtimg li').css('display','none').eq(n).css('display','block');
	$('#lbt-pager li').bind('click',fun1);
	$('#lbt-prev').bind('click',fun2);
	$('#lbt-next').bind('click',fun3);
	function fun1(){		
		var val;
		if(!$('#total div').is(":animated")){
			val = $(this).attr('num');
			if(val!=n){
				n = val;			
				move();
			}
		}
	};
	function fun2(){
		n--;
		if(n<0){ n=4; }
		move();
		return false;
	};
	function fun3(){
		n++;
		if(n>4){ n=0; }
		move();
		return false;
	};
	var timer = setInterval(time,3000);
	function time(){
		n++;
		if(n>4){
			n=0;			
		}
		move();
	}
	function move(){
		if(!$('#total div').is(":animated")){
			// $('#total div').css({opacity:1});
			src = $('#lbtimg li[num="'+n+'"] img').attr('src');

			$('#lbt-pager li').css('backgroundPosition','0 -140px').eq(n).css('backgroundPosition','-10px -140px');

			$('#lbtimg li').css('display','none').eq(n).css('display','block');

			$('#total div').eq(0).animate({top:'-15.5rem',opacity:0}).end()
			.delay(30)
			.eq(1).animate({top:'-15.5rem',opacity:0}).end()
			.delay(30)
			.eq(2).animate({top:'-15.5rem',opacity:0}).end()
			.delay(30)
			.eq(3).animate({top:'-15.5rem',opacity:0}).end()
			.delay(30)
			.eq(4).animate({top:'-15.5rem',opacity:0}).end()
			.delay(30)
			.eq(5).animate({top:'-15.5rem',opacity:0}).end().delay(30)
			.eq(6).animate({top:'-15.5rem',opacity:0}).end().delay(30)
			.eq(7).animate({top:'-15.5rem',opacity:0}).end().delay(30)
			.eq(8).animate({top:'-15.5rem',opacity:0}).end().delay(30)
			.eq(9).animate({top:'-15.5rem',opacity:0},function(){ 			
				$('#total div').css('backgroundImage','url('+src+')');
				// cc();
			}).end().css({top:0,opacity:1});
		};
	};
$('#toplbt').hover(function(){clearInterval(timer)},function(){clearInterval(timer);timer = setInterval(time,3000);});

// 左右轮图运动
$('.carouseTitle .crnext').click(function(){
	console.log($(this).parent().parent().next().children().css('left'));
	$oUl = $(this).parent().parent().next().children().css('left');
	if($oUl == '0px'){
		$(this).parent().parent().next().children().animate({left: '-105%'}, "slow");
		$(this).css('backgroundPosition','0 -1.875rem;');
	}
	return false;
})
$('.carouseTitle .crprev').click(function(){
	console.log($(this).parent().parent().next().children().css('left'));
	$oUl = $(this).parent().parent().next().children().css('left');
	if($oUl != '0px'){
		$(this).parent().parent().next().children().animate({left: '0px'}, "slow");
	}
	return false;
})

});