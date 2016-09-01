// JavaScript Document
$(document).ready(function(e) {
  // var pay_w = $(document).width();
  var sceill_w = $(window).width();
   /*$('.content_three').width(sceill_w);
   $('.cent').width(sceill_w);*/
  
   
   
   $('.ul_1').width(sceill_w*6);
    $('.ul_2').width(sceill_w*6);
	
	$('.ul_2 li').width(sceill_w);
   var hsj = $('.ul_1 li').width(sceill_w);
   
   
   
   
   
   var len=$('.ul_1 li').length; //得到所有li
	var w=len*sceill_w;//计算ul宽度 
	
	$('.ul_2').html($('.ul_1').html());//将ul_1复制到ul_2
	var nav_len=$('.nav label').length;//导航长度
	var i=0; //记录索引值
	var ul1=0;//ul1位置
	var ul2=0;//ul2位置
	
	$('.ul_1').attr('value',true);//自定义属性
	$('.ul_2').attr('value',false);//自定义属性
				
	$('.next').click(function(){
		ul1=parseInt($('.ul_1').css('left'));//得到ul1的左边位置
		ul2=parseInt($('.ul_2').css('left'));//得到ul2的左边位置
		
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
 
		if($('.ul_1,.ul_2').is(':animated')){//判断是否是动画元素
			$('.ul_1,.ul_2').stop(true,true);//停止动画
		}
		 
		if(ul1<=0 && ul1>w*-1){  
			$('.ul_2').css({left:sceill_w+'px'});//将ul2的位置移动到ul1后面
			$('.ul_1').animate({left:ul1-sceill_w+'px'},'slow');//ul1左边距离移动1000 
			if(ul1==-sceill_w*5){ 
				
				$('.ul_2').animate({left:'0px'},'slow'); 
				$('.ul_1').attr('value',false);
				$('.ul_2').attr('value',true);
			}  
		}else{
		 
			$('.ul_1').css({left:sceill_w+'px'});//将ul1的位置移动到ul2后面
			$('.ul_2').animate({left:ul2-sceill_w+'px'},'slow');//ul1左边距离移动1000
			if(ul2==-sceill_w*5){ 
				$('.ul_1').animate({left:'0px'},'slow'); 
				$('.ul_1').attr('value',true);
				$('.ul_2').attr('value',false);
			}  
		}
		
	}
	
	$('.prev').click(function(){
		 ul1=parseInt($('.ul_1').css('left'));//得到ul1的左边位置
		 ul2=parseInt($('.ul_2').css('left'));//得到ul2的左边位置 
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
	
		if($('.ul_1,.ul_2').is(':animated')){//判断是否是动画元素
			$('.ul_1,.ul_2').stop(true,true);//停止动画
		} 
		 
		
		if(ul1<=0 && ul1>w*-1){ //ul1左边距离小于0与，左边距离大于最大移动距离
			 
			$('.ul_2').css({left:-sceill_w*6+'px'});//将ul2的位置移动到ul1前面
			$('.ul_1').animate({left:ul1+sceill_w+'px'},'slow');//ul1左边距离移动1000
			 
			if(ul1=='0'){  //判断是否是ul1的最后一页
				$('.ul_2').animate({left:(w-sceill_w)*-1+'px'},'slow'); //计算ul2移动的距离
				$('.ul_1').attr('value',false);//自定义属性
				$('.ul_2').attr('value',true);//自定义属性
			}  
		}else{ 
			 
			$('.ul_1').css({left:-sceill_w*6+'px'});//将ul1的位置移动到ul2前面
			$('.ul_2').animate({left:ul2+sceill_w+'px'},'slow');//ul2左边距离移动1000
			 
			if(ul2=='0'){ //判断是否是ul2的最后一页
				$('.ul_1').animate({left:(w-sceill_w)*-1+'px'},'slow'); //计算ul1移动的距离
				$('.ul_1').attr('value',true);//自定义属性
				$('.ul_2').attr('value',false);//自定义属性
			} 
		}
	}
	
	//自动
  var  time=setInterval(function(){
		ul1=parseInt($('.ul_1').css('left'));//得到ul1的左边位置
		ul2=parseInt($('.ul_2').css('left'));//得到ul2的左边位置
		
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
	/* $('.prev,.next,.ul_1,.ul_2,.nav label,ul_3,ul_4,ul_5,ul_6').hover(
		function(){ 
			 clearInterval(time); 
		},
		function(){
			  time=setInterval(function(){
			  ul1=parseInt($('.ul_1').css('left'));
			  ul2=parseInt($('.ul_2').css('left'));
			  
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
/*	$('.nav label').hover(
		function(){
			 
			index=$('.nav label').index(this); 
			 
			if(index!=i){
				var val1=$('.ul_1').attr('value');
				 
				$('.nav label').removeClass();
				$('.nav label').eq(index).addClass('current'); 
			
				if(index>i){  
					if(val1==true){
						ul1='-'+(index-1)*sceill_w; 
					}else{
						ul1=1;
						ul2='-'+(index-1)*sceill_w; 
						 
					}
					 
					next_move(); 
				}else{
					 
					if(index==0){ 
						if(val1==true){ 
							 ul1=parseInt('-'+sceill_w);
						}else{
							 ul2=parseInt('-'+sceill_w);
						} 
					}else{
						if(val1==true){
							 ul1=parseInt('-'+(index+1)*sceill_w);
						}else{
							 ul1=1;
							 ul2=parseInt('-'+(index+1)*sceill_w);
							 
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