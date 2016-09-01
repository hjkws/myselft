// JavaScript Document
// JavaScript Document
   $(document).ready(function(e) {
	 var hah = $(document).height();
	 var wah = $(document).width();
	 
	 $(".login_al").height(hah);
	  $(".login_al").width(wah);
	  
	   $("#alert_lo").hide();
	  $(".login_s").click(function(){
		  
		  $("#alert_lo").show();
		   $(".login").show();
		  $(".login").addClass("login_translate");
		   $(".register_sd").hide();
		  })
		$(".exit").click(function(){
			 $("#alert_lo").hide();
			
			})
			
			/*弹出了解以旧换新活动*/
	     $("#register").click(function(){
			 $(".login").hide();
			  $(".give").hide();
			  $(".good_zx").hide();
			  $("#alert_lo").show();
			   $(".register_sd").show();
			   $(".register_sd").addClass("register_translate");
			   
			 
		 })
		 
		 $(".close_a").click(function(){
			 $("#alert_lo").hide();
			
			})
			
			/*弹出了解以旧换新活动*/
	     $("#about_dive").click(function(){
			 $(".login").hide();
			 $(".register_sd").hide();
			  $("#alert_lo").show();
			  $(".good_zx").hide();
			   $(".give").show();
			   $(".give").addClass("register_translate");
			   
			 
		 })
		 
		 	
			/*购买咨询*/
	     $("#shoop_zx").click(function(){
			 $(".login").hide();
			 $(".register_sd").hide();
			  $("#alert_lo").show();
			  $(".give").hide();
			   $(".good_zx").show();
			   
			   $(".good_zx").addClass("register_translate");
			   
			 
		 })
			
	  
			
      
});