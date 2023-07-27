const langerr=document.getElementById("langer");
langerr.addEventListener("click",function(e){
   if(e.target.style.background==="red"){
    e.target.style.background="transparent";
   }
   else{
    e.target.style.background="red";
   }
},false);
