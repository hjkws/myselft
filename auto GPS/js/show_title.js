// JavaScript Document
$(document).ready(function(e) {
    var len=$('.ul_3 li').length; //得到所有li
	var w=len*620;//计算ul宽度 
	//将ul_1复制到ul_2
	var nav_len=$('.nav label').length;//导航长度
	var i=0; //记录索引值
	var uls3=0;//ul1位置
	var uls4=0;//ul2位置
	
	$('.ul_3').attr('value',true);//自定义属性
	$('.ul_4').attr('value',false);//自定义属性
				
	$('.next').click(function(){
		uls3=parseInt($('.ul_3').css('left'));//得到ul1的左边位置
		uls4=parseInt($('.ul_4').css('left'));//得到ul2的左边位置
		
		/*导航样式*/
		if(i==nav_len-1){
		 i=0;
		}else{
		 i++;
		}
		 
		$('.nav label').removeClass();
		$('.nav label').eq(i).addClass('current'); 
		
		next_move();
	})	 
	
	function next_move(){
 
		if($('.ul_3,.ul_4').is(':animated')){//判断是否是动画元素
			$('.ul_3,.ul_4').stop(true,true);//停止动画
		}
		 
		if(uls3<=0 && uls3>w*-1){  
			$('.ul_4').css({left:'620px'});//将ul2的位置移动到ul1后面
			$('.ul_3').animate({left:uls3-620+'px'},'slow');//ul1左边距离移动1000 
			if(uls3=='-3100'){ 
				
				$('.ul_4').animate({left:'0px'},'slow'); 
				$('.ul_3').attr('value',false);
				$('.ul_4').attr('value',true);
			}  
		}else{
		 
			$('.ul_3').css({left:'620px'});//将ul1的位置移动到ul2后面
			$('.ul_4').animate({left:uls4-620+'px'},'slow');//ul1左边距离移动1000
			if(uls4=='-3100'){ 
				$('.ul_3').animate({left:'0px'},'slow'); 
				$('.ul_3').attr('value',true);
				$('.ul_4').attr('value',false);
			}  
		}
		
	}
	
	$('.prev').click(function(){
		 uls3=parseInt($('.ul_3').css('left'));//得到ul1的左边位置
		 uls4=parseInt($('.ul_4').css('left'));//得到ul2的左边位置 
		/*导航样式*/ 
		if(i==0){
		 i=nav_len-1;
		}else{
			i--;
		} 
		
		$('.nav label').removeClass();
		$('.nav label').eq(i).addClass('current'); 
		
		prev_move();
	})	
	
	function prev_move(){
	
		if($('.ul_3,.ul_4').is(':animated')){//判断是否是动画元素
			$('.ul_3,.ul_4').stop(true,true);//停止动画
		} 
		 
		
		if(uls3<=0 && uls3>w*-1){ //ul1左边距离小于0与，左边距离大于最大移动距离
			 
			$('.ul_4').css({left:'-3720px'});//将ul2的位置移动到ul1前面
			$('.ul_3').animate({left:uls3+620+'px'},'slow');//ul1左边距离移动1000
			 
			if(uls3=='0'){  //判断是否是ul1的最后一页
				$('.ul_4').animate({left:(w-620)*-1+'px'},'slow'); //计算ul2移动的距离
				$('.ul_3').attr('value',false);//自定义属性
				$('.ul_4').attr('value',true);//自定义属性
			}  
		}else{ 
			 
			$('.ul_3').css({left:'-3720px'});//将ul1的位置移动到ul2前面
			$('.ul_4').animate({left:uls4+620+'px'},'slow');//uls4左边距离移动1000
			 
			if(uls4=='0'){ //判断是否是ul2的最后一页
				$('.ul_3').animate({left:(w-620)*-1+'px'},'slow'); //计算ul1移动的距离
				$('.ul_3').attr('value',true);//自定义属性
				$('.ul_4').attr('value',false);//自定义属性
			} 
		}
	}
	
	//自动
  var  time=setInterval(function(){
		uls3=parseInt($('.ul_3').css('left'));//得到ul1的左边位置
		uls4=parseInt($('.ul_4').css('left'));//得到ul2的左边位置
		
		/*导航样式*/
		 if(i==nav_len-1){
		 i=0;
		}else{
		 i++;
		}
		$('.nav label').removeClass();
		$('.nav label').eq(i).addClass('current'); 
		
		next_move();
		 },7000);  
	 
	 //鼠标停止切换
	/* $('.prev,.next,.ul_3,.ul_4,.nav label').hover(
		function(){ 
			 clearInterval(time); 
		},
		function(){
			  time=setInterval(function(){
			  uls3=parseInt($('.ul_3').css('left'));
			  uls4=parseInt($('.ul_4').css('left'));
			  
				if(i==nav_len-1){
					i=0;
				}else{
					i++;
				}
			$('.nav label').removeClass();
			$('.nav label').eq(i).addClass('current'); 
			
			  next_move()
		     },7000); 
		}
	
	) */
	
	//鼠标移动到导航切换
	/*$('.nav label').hover(
		function(){
			 
			index=$('.nav label').index(this); 
			 
			if(index!=i){
				var val1=$('.ul_3').attr('value');
				 
				$('.nav label').removeClass();
				$('.nav label').eq(index).addClass('current'); 
			
				if(index>i){ 
					if(val1==true){
						uls3='-'+(index-1)*620; 
					}else{
						uls3=1;
						uls4='-'+(index-1)*620; 
						 
					}
					 
					next_move(); 
				}else{ 
					 
					if(index==0){ 
						if(val1==true){
							 uls3=parseInt('-'+620); 
						}else{
							 uls4=parseInt('-'+620);
						} 
					}else{
						if(val1==true){
							 uls3=parseInt('-'+(index+1)*620);
						}else{
							 uls3=1;
							 uls4=parseInt('-'+(index+1)*620);
							 
						}
					  
					}
					prev_move();
				}
				i=index;
			}
			
		},
		function(){}
	)*/
});