// JavaScript Document

/*window.onscroll=function(){
	
   var oTitle=document.getElementById('scroll');
	var srollTop=document.documentElement.scrollTop||document.body.scrollTop;
	
	oTitle.innerHTML=srollTop;	
}
window.onscroll=function(){
	 var oDiv=document.getElementById('head');
	 
	 var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	 oDiv.style.top=scrollTop+'px';
	
	
}*/

window.onload=function(){
	
	var oUl= document.getElementById('ul1');
	var aLi=oUl.getElementsByTagName('li');
	var oRi=document.getElementById('ri');
	
	var oLine=document.getElementById('line');
	
	var timer = null;
	
	for(var i=0; i<aLi.length;i++){
		aLi[i].onclick=function(){
		oLine.style.left=this.offsetLeft+'px';
		}  
		
			aLi[1].onclick=function(){
				
			   window.scrollTo(0,300)
			   oLine.style.left=this.offsetLeft+'px';
			}
			aLi[2].onclick=function(){
				
			   window.scrollTo(0,1550)
			   oLine.style.left=this.offsetLeft+'px';
			}	
			aLi[3].onclick=function(){
				
			   window.scrollTo(0,2330)
			   oLine.style.left=this.offsetLeft+'px';
			}
			aLi[4].onclick=function(){
				
			   window.scrollTo(0,2780)
			   oLine.style.left=this.offsetLeft+'px';
			}	
	}
	/////////////////////////////////
	
	
	var oUl = document.getElementById('product');
	
	var aLi=oUl.getElementsByTagName('li');
	var oNew = document.getElementById('new')
	
	aLi[0].onclick=function(){
		window.open('ones/product_1.html','_blank')
	 }
	 aLi[1].onclick=function(){
		window.open('auto GPS/cloud2.html','_blank')
	 }
	 aLi[2].onclick=function(){
	  window.open('two/product_3.html','_blank')	 
	}
	var oUl2 = document.getElementById('product2');
	
	var aLi2=oUl2.getElementsByTagName('li');
	 aLi2[0].onclick=function(){
	  window.open('three/product_4.html','_blank')	 
	}
	 aLi2[1].onclick=function(){
	  window.open('four/product_5.html','_blank')	 
	}
	 aLi2[2].onclick=function(){
	  window.open('four/product_6.html','_blank')	 
	}
	var oUl3 = document.getElementById('product3');
	var aLi3=oUl3.getElementsByTagName('li');
	 aLi3[0].onclick=function(){
	  window.open('four/product_7.html','_blank')	 
	}
	 aLi3[1].onclick=function(){
	  window.open('four/product_8.html','_blank')	 
	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////////
	
	

	for(var i=0;i<aLi.length;i++){
			aLi[i].onmouseover=function(){
				//this.className = 'online';
				var oBox_1 = document.getElementById('box_l')
				
				//oBox_1.style.display='block';
				//oNew.className='online';
				
			}
			aLi[i].onmouseout=function(){
				//this.className = 'online';
				var oBox_1 = document.getElementById('box_l')
				
				//oBox_1.style.display='none';
				//oNew.className='downline';
				
			}
			
				
    }
	
////////////////////////////////////////////////////////flash滚动
var oUlPlay1=document.getElementById('play1');
var aLip=oUlPlay1.getElementsByTagName('li');

oUlPlay1.innerHTML += oUlPlay1.innerHTML;
oUlPlay1.style.width=aLip[0].offsetWidth*aLip.length+'px';


}


