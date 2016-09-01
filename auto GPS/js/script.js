$(function(){	
	var len=$('.ul_1 li').length; //得到所有li
	var w=len*898;//计算ul宽度 
	$('.ul_2').html($('.ul_1').html());//将ul_1复制到ul_2
	var nav_len=$('.nav a').length;//导航长度
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
		 
		$('.nav a').removeClass();
		$('.nav a').eq(i).addClass('current'); 
		
		next_move();
	})	 
	
	function next_move(){
 
		if($('.ul_1,.ul_2').is(':animated')){//判断是否是动画元素
			$('.ul_1,.ul_2').stop(true,true);//停止动画
		}
		 
		if(ul1<=0 && ul1>w*-1){  
			$('.ul_2').css({left:'898px'});//将ul2的位置移动到ul1后面
			$('.ul_1').animate({left:ul1-898+'px'},'slow');//ul1左边距离移动1000 
			if(ul1=='-2694'){ 
				
				$('.ul_2').animate({left:'0px'},'slow'); 
				$('.ul_1').attr('value',false);
				$('.ul_2').attr('value',true);
			}  
		}else{
		 
			$('.ul_1').css({left:'898px'});//将ul1的位置移动到ul2后面
			$('.ul_2').animate({left:ul2-898+'px'},'slow');//ul1左边距离移动1000
			if(ul2=='-2694'){ 
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
		
		$('.nav a').removeClass();
		$('.nav a').eq(i).addClass('current'); 
		
		prev_move();
	})	
	
	function prev_move(){
	
		if($('.ul_1,.ul_2').is(':animated')){//判断是否是动画元素
			$('.ul_1,.ul_2').stop(true,true);//停止动画
		} 
		 
		
		if(ul1<=0 && ul1>w*-1){ //ul1左边距离小于0与，左边距离大于最大移动距离
			 
			$('.ul_2').css({left:'-3592px'});//将ul2的位置移动到ul1前面
			$('.ul_1').animate({left:ul1+898+'px'},'slow');//ul1左边距离移动1000
			 
			if(ul1=='0'){  //判断是否是ul1的最后一页
				$('.ul_2').animate({left:(w-898)*-1+'px'},'slow'); //计算ul2移动的距离
				$('.ul_1').attr('value',false);//自定义属性
				$('.ul_2').attr('value',true);//自定义属性
			}  
		}else{ 
			 
			$('.ul_1').css({left:'-3592px'});//将ul1的位置移动到ul2前面
			$('.ul_2').animate({left:ul2+898+'px'},'slow');//ul2左边距离移动1000
			 
			if(ul2=='0'){ //判断是否是ul2的最后一页
				$('.ul_1').animate({left:(w-898)*-1+'px'},'slow'); //计算ul1移动的距离
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
		$('.nav a').removeClass();
		$('.nav a').eq(i).addClass('current'); 
		
		next_move();
		 },3000); 
	 
	 //鼠标停止切换
	 $('.prev,.next,.ul_1,.ul_2,.nav a').hover(
		function(){ 
			 clearInterval(time); 
		},
		function(){
			  time=setInterval(function(){
			  ul1=parseInt($('.ul_1').css('left'));//得到ul1的左边位置
			  ul2=parseInt($('.ul_2').css('left'));//得到ul2的左边位置
			  /*导航样式*/
				if(i==nav_len-1){
					i=0;
				}else{
					i++;
				}
			$('.nav a').removeClass();
			$('.nav a').eq(i).addClass('current'); 
			
			  next_move()
		     },3000); 
		}
	
	) 
	
	//鼠标移动到导航切换
	$('.nav a').hover(
		function(){
			 
			index=$('.nav a').index(this);//获取当前操作的索引值 
			 
			if(index!=i){//当前索引不等于自己的时候
				var val1=$('.ul_1').attr('value');
				 
				$('.nav a').removeClass();
				$('.nav a').eq(index).addClass('current'); 
			
				if(index>i){ //index大于i说明是向右选择 
					if(val1==true){//不等于true说明当前现实的不是第一个ul
						ul1='-'+(index-1)*898;  //设置ul1移动的距离
					}else{
						ul1=1;//随便给ul1一个值，然if条件不成立
						ul2='-'+(index-1)*898; //设置ul2移动的距离
						 
					}
					 
					next_move(); 
				}else{ //小于i说明是向左选择
					 
					if(index==0){ 
						if(val1==true){//不等于true说明当前现实的不是第一个ul 
							 ul1=parseInt('-'+898); //设置ul1移动的距离
						}else{
							 ul2=parseInt('-'+898);//设置ul2移动的距离
						} 
					}else{
						if(val1==true){//不等于true说明当前现实的不是第一个ul
							 ul1=parseInt('-'+(index+1)*898);//设置ul1移动的距离
						}else{
							 ul1=1;//随便给ul1一个值，然if条件不成立
							 ul2=parseInt('-'+(index+1)*898);//设置ul2移动的距离
							 
						}
					  
					}
					prev_move();
				}
				i=index;//将索引赋值给i
			}
			
		},
		function(){}
	)
	
}) 
