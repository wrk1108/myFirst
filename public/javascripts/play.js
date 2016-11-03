$(function(){
	setInterval(function(){
		var cHeight = $(window).height() - $("header").height() - $(".controller-box").height();
		$('.jspContainer').css('height',cHeight+'px');
		$('#box').css('height',$(window).height()-$(".controller-box").height());
	},200);

	// 开始暂停
	$audio = document.getElementsByTagName('audio')[0];
	$('.controller-play').toggle(function(){
		$audio.pause(); 
		$('.controller-play').css('backgroundPosition','-122px -219px');
	},function(){
		$audio.play();
		$('.controller-play').css('backgroundPosition','-389px -306px');
	});

	// 时间
	setTimeout(function(){
		var alltime =  $audio.duration;;
		setInterval(function(){
			alltime =  $audio.duration;
			timeChange(alltime,"duration");
			var nowTime = $audio.currentTime;
			timeChange(nowTime,"position");
			var timeLine = (nowTime/alltime)*100 + '%';
			$('.controller-box-position .rangeslider__handle').css('left',timeLine)
			$('.controller-box-position .rangeslider__fill').css('width',timeLine)
			
		},200);

		$('.controller-box-position .rangeslider').mousedown(function(e){
			var pWidth = $('.controller-box-position .rangeslider').width();
			$('.controller-box-position .rangeslider__fill').width(e.offsetX);
			$('.controller-box-position .rangeslider__handle').css('left',e.offsetX);
			var pct = e.offsetX/pWidth;
			// 用进度条百分比反乘总时长获取当前长度
			// console.log(pct*alltime);
			$audio.currentTime = pct*alltime;
		});


		function timeChange(time, timePlace) {//默认获取的时间是时间戳改成我们常见的时间格式
		    var timePlace = document.getElementById(timePlace);
		    //分钟
		    var minute = time / 60;
		    var minutes = parseInt(minute);
		    if (minutes < 10) {
		        minutes = "0" + minutes;
		    }
		    //秒
		    var second = time % 60;
		    seconds = parseInt(second);
		    if (seconds < 10) {
		        seconds = "0" + seconds;
		    }
		    var allTime = "" + minutes + "" + ":" + "" + seconds + ""
		    timePlace.innerHTML = allTime;
		}

	},50);
	
	// 音量
	var vol = $audio.volume+'00%'; 
	$('.controller-box-volume .rangeslider__fill').css('width',vol);
	
	$('.controller-box-volume .rangeslider').mousedown(function(e){
		var vWidth = $('.controller-box-volume .rangeslider').width();
		$('.controller-box-volume .rangeslider__fill').width(e.offsetX);
		$audio.volume = e.offsetX/vWidth;
	});

	// 重播
	$('#controller-repeater').click(function(){ $audio.load(); })

	setInterval(function(){
		if($(window).width()<767){
			$audio.remove();
			$audio.pause(); 
		}
	},200);

	// 上下首音乐
	// 播放列表
	var songList = [ 
		{src:'/media/伊藤サチコ - いつも何度でも.mp3'},
		{src:'/media/黒石ひとみ - Stories.mp3'},
		{src:'/media/茅野愛衣,戸松遥,早見沙織 - secret base ~君がくれたもの~ (10 years after Ver.).mp3'}
	];
	var indexs = 0;
	var counts = songList.length;
	
	function change(){
		$audio.src = songList[indexs].src;
	};
	change();
	// 下一首
	$('.controller-next').click(function(){ 
		indexs++;
		if(indexs > counts-1){ 
			indexs = 0;
		};
		change();
	});
	$('.controller-prev').click(function(){ 
		indexs--;
		if(indexs < 0){ 
			indexs = counts-1;
		};
		change();
	});

	$audio.addEventListener('ended',function(){  
		indexs++;
		if(indexs > counts-1){ 
			indexs = 0;
		};
		change();		
	});  
	// 点击播放
	$('.playlist-item').click(function(){
		indexs = this.childNodes[1].innerText-1;
		change();
	});
});