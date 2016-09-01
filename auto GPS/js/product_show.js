// JavaScript Document

// JavaScript Document
$(document).ready(function(e) {
    var len=$('.ul_5 li').length; //得到所有li
	var w=len*580;//计算ul宽度 
	//将ul_1复制到ul_2
	var nav_len=$('.nav label').length;//导航长度
	var i=0; //记录索引值
	var uls5=0;//ul1位置
	var uls6=0;//ul2位置
	
	$('.ul_5').attr('value',true);//自定义属性
	$('.ul_6').attr('value',false);//自定义属性
				
	$('.next').click(function(){
		uls5=parseInt($('.ul_5').css('left'));//得到ul1的左边位置
		uls6=parseInt($('.ul_6').css('left'));//得到ul2的左边位置
		
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
 
		if($('.ul_5,.ul_6').is(':animated')){//判断是否是动画元素
			$('.ul_5,.ul_6').stop(true,true);//停止动画
		}
		 
		if(uls5<=0 && uls5>w*-1){  
			$('.ul_6').css({left:'580px'});//将ul2的位置移动到ul1后面
			$('.ul_5').animate({left:uls5-580+'px'},'slow');//ul1左边距离移动1000 
			if(uls5=='-2900'){ 
				
				$('.ul_6').animate({left:'0px'},'slow'); 
				$('.ul_5').attr('value',false);
				$('.ul_6').attr('value',true);
			}  
		}else{
		 
			$('.ul_5').css({left:'580px'});//将ul1的位置移动到ul2后面
			$('.ul_6').animate({left:uls6-580+'px'},'slow');//ul1左边距离移动1000
			if(uls6=='-2900'){ 
				$('.ul_5').animate({left:'0px'},'slow'); 
				$('.ul_5').attr('value',true);
				$('.ul_6').attr('value',false);
			}  
		}
		
	}
	
	$('.prev').click(function(){
		 uls5=parseInt($('.ul_5').css('left'));//得到ul1的左边位置
		 uls6=parseInt($('.ul_6').css('left'));//得到ul2的左边位置 
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
	
		if($('.ul_5,.ul_6').is(':animated')){//判断是否是动画元素
			$('.ul_5,.ul_6').stop(true,true);//停止动画
		} 
		 
		
		if(uls5<=0 && uls5>w*-1){ //ul1左边距离小于0与，左边距离大于最大移动距离
			 
			$('.ul_6').css({left:'-3480px'});//将ul2的位置移动到ul1前面
			$('.ul_5').animate({left:uls5+580+'px'},'slow');//ul1左边距离移动1000
			 
			if(uls5=='0'){  //判断是否是ul1的最后一页
				$('.ul_6').animate({left:(w-580)*-1+'px'},'slow'); //计算ul2移动的距离
				$('.ul_5').attr('value',false);//自定义属性
				$('.ul_6').attr('value',true);//自定义属性
			}  
		}else{ 
			 
			$('.ul_5').css({left:'-3480px'});//将ul1的位置移动到ul2前面
			$('.ul_6').animate({left:uls6+580+'px'},'slow');//uls6左边距离移动1000
			 
			if(uls6=='0'){ //判断是否是ul2的最后一页
				$('.ul_5').animate({left:(w-580)*-1+'px'},'slow'); //计算ul1移动的距离
				$('.ul_5').attr('value',true);//自定义属性
				$('.ul_6').attr('value',false);//自定义属性
			} 
		}
	}
	
	//自动
  var  time=setInterval(function(){
		uls5=parseInt($('.ul_5').css('left'));//得到ul1的左边位置
		uls6=parseInt($('.ul_6').css('left'));//得到ul2的左边位置
		
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
	/* $('.prev,.next,.ul_5,.ul_6,.nav label').hover(
		function(){ 
			 clearInterval(time); 
		},
		function(){
			  time=setInterval(function(){
			  uls5=parseInt($('.ul_5').css('left'));
			  uls6=parseInt($('.ul_6').css('left'));
			  
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
				var val1=$('.ul_5').attr('value');
				 
				$('.nav label').removeClass();
				$('.nav label').eq(index).addClass('current'); 
			
				if(index>i){  
					if(val1==true){
						uls5='-'+(index-1)*580; 
					}else{
						uls5=1;
						uls6='-'+(index-1)*580; 
						 
					}
					 
					next_move(); 
				}else{ 
					 
					if(index==0){ 
						if(val1==true){ 
							 uls5=parseInt('-'+580); 
						}else{
							 uls6=parseInt('-'+580);
						} 
					}else{
						if(val1==true){
							 uls5=parseInt('-'+(index+1)*580);
						}else{
							 uls5=1;
							 uls6=parseInt('-'+(index+1)*580);
							 
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