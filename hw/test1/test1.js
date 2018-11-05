function removeElementsHandler() {
    // write your code here - START
	var remLength = document.getElementsByClassName("remove").length;
   
   
   for(var i = 0; i<remLength; i++)
   { 
		   document.getElementsByClassName("remove")[i].addEventListener("click",function(clickedNow)
			   {
				   clickedNow.srcElement.parentElement.remove();
			   });
   }


    // write your code here - END
}

document.addEventListener("DOMContentLoaded", () => {
    removeElementsHandler();
});


