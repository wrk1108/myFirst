$(function(){
	var flag = [];
	// 账号验证
	$('#idNumber').blur(function(){
		var pattern = /^[a-z][a-zA-Z0-9]{5,9}$/;
		flag[0] = truth(pattern,this);
		// 验证用户名
		if(flag[0]){
			$.post('/register',{idNumber:$('#idNumber').attr('value')},function(data){
				if(data == 0){ 
					alert('该账号已存在');
					$('#idNumber').next().next().css('display','none');
					// console.log($(this).next());
				}
			});
		}
		
	});
	// 昵称验证
	$('#userName').blur(function(){
		if(this.value){
			$(this).next().next().css('display','block');
			$(this).next().css('display','none');	
			flag[1] = true;		
		}else{
			$(this).next().css('display','block');
			$(obj).next().next().css('display','none');	
			flag[1] = false;		
		}
	});
	// 密码验证
	$('#passWord').blur(function(){
		var pattern = /^[a-zA-Z0-9]{6,16}$/;
		truth(pattern,this);
		flag[2] = truth(pattern,this);
	});
	// 密码确认
	$('#confirm').blur(function(){
		var pattern = /^[a-zA-Z0-9]{6,16}$/;
		if(this.value===$('#passWord').attr('value') && pattern.exec(this.value)){
			$(this).next().next().css('display','block');
			$(this).next().css('display','none');	
			flag[3] = true;
		}else if(this.value!==$('#passWord').attr('value')){
			$(this).next().css('display','block');
			$(this).next().next().css('display','none');	
			flag[3] = false;	
		}else if(!pattern.exec(this.value)){
			$(this).next().css('display','none');
			$(this).next().next().css('display','none');
			flag[3] = false;
		}
	});

	function truth(pattern,obj){
		if(!pattern.exec(obj.value)){
			$(obj).next().css('display','block');
			$(obj).next().next().css('display','none');
			return false;
		}else if(pattern.exec(obj.value) && obj.value!=0){
			$(obj).next().next().css('display','block');
			$(obj).next().css('display','none');
			return true;
		}		
	}

	// 表单提交
	$('#submit').click(function(){
		// console.log(flag[0],flag[1],flag[2],flag[3]);
		if(flag[0]&&flag[1]&&flag[2]&&flag[3]){
			$.post('/register',{idNumber:$('#idNumber').attr('value'),userName:$('#userName').attr('value'),passWord:$('#confirm').attr('value')},function(data){
				if(data==1){
					alert('注册成功，返回登录');
					window.location.href='/login'; 
				}else if(data==0){
					alert('账号已存在，请重新填写');
				}
				
			});
		}else{
			alert('您有注册项尚未填写或不符合规则，请重新填写确认！');
		}
	})
});