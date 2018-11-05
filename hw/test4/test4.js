 function initstate(){
	 document.getElementById("1").style.backgroundColor = "#ffffff";
	 document.getElementById("2").style.backgroundColor = "#ffffff";
	 document.getElementById("3").style.backgroundColor = "#ffffff";
	 
 } 
  function initstate2(){
	 document.getElementById("4").style.backgroundColor = "#ffffff";
	 document.getElementById("5").style.backgroundColor = "#ffffff";
	 document.getElementById("6").style.backgroundColor = "#ffffff";
	 
 } 
   function initstate3(){
	 document.getElementById("7").style.backgroundColor = "#ffffff";
	 document.getElementById("8").style.backgroundColor = "#ffffff";
	 document.getElementById("9").style.backgroundColor = "#ffffff";
	 
 } 
 
 
	var clicked=1;
	var flag="0";
	var t=1;
	var flagger=0;
	var misli=3;
	var u=1;
	var v=1;
	var result=1;
function colorChange(id)
{
	document.getElementById("total").innerHTML = misli; 
	if(id>=1 && id<4){
			  
	  t=document.getElementById(id).value;
	  if(t!=flagger || t==1){
		  
		  initstate();
		  document.getElementById(id).style.backgroundColor = "#eda600";
		   
		   flagger=t;
			
		  
	  }else{
			initstate();
			document.getElementById(id).style.backgroundColor = "#ffffff";
		  t=1;
		  
	  }
		
	}
	else if(id>=4 && id<7)
	{
		u=document.getElementById(id).value;
	  if(u!=flagger || u==1){
		  initstate2();
		  document.getElementById(id).style.backgroundColor = "#eda600";
		   
		   flagger=u;
			
		  
	  }else{
			initstate2();
			document.getElementById(id).style.backgroundColor = "#ffffff";
		  u=1;
		  
	  }
		
	}else if(id=>7 && id<10){
		v=document.getElementById(id).value;
		  if(v!=flagger || v==1){
			  initstate3();
			  document.getElementById(id).style.backgroundColor = "#eda600";
			   
			   flagger=v;
				
			  
		  }else{
				initstate3();
				document.getElementById(id).style.backgroundColor = "#ffffff";
				v=1;
			  
		  }
		
	}else{
	  
	  t=document.getElementById(id).value;
	  if(t!=flagger || t==1){
		  //alert(t);
		  initstate();
		  document.getElementById(id).style.backgroundColor = "#eda600";
		   
		   flagger=t;
			
		  
	  }else{
			initstate();
			document.getElementById(id).style.backgroundColor = "#ffffff";
		  t=1;
		 
	  }
	}
	
	
	  result=misli*t*u*v;
		
	 document.getElementById("total2").innerHTML = result.toFixed(2); 
	
}

 function misliFunction(val){
			
			misli=val;
			document.getElementById("total").innerHTML = misli; 
			result=misli*t*u*v;
			document.getElementById("total2").innerHTML = result.toFixed(2);
			return misli;
 } 

function resetMatches(){
	initstate();
	initstate2();
	initstate3();
	u=1;
	v=1;
	t=1;
	misli=3;
	document.getElementById("total").innerHTML = misli; 
	document.getElementById("total2").innerHTML = misli; 
}
	
document.addEventListener("DOMContentLoaded", () => {
    colorChange(id);
});
	
	
document.addEventListener("DOMContentLoaded", () => {
    misli= misliFunction(val);
},false);

