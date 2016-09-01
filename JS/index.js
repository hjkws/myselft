// JavaScript Document

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
	
	
	
	
   

}