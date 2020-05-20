var flag=1;
function hit() {
    flag=flag+1;
    if(flag%2==0){
        document.getElementsByClassName("menu-icon")[0].setAttribute("class","menu-icon-new");
        
        document.getElementsByClassName("menu")[0].setAttribute("class","menu-new");
    }
    else{
        document.getElementsByClassName("menu-icon-new")[0].setAttribute("class","menu-icon");
        document.getElementsByClassName("menu-new")[0].setAttribute("class","menu");
    }
}

   var focus_flag=0;
   function focus_hit() {
        focus_flag=1;
        document.getElementsByClassName("menu-icon")[0].setAttribute("class","menu-icon-focussed");
    
   if(focus_flag==1){
               setTimeout(revert,1000);
    }

    function revert() {
        document.getElementsByClassName("menu-icon-focussed")[0].setAttribute("class","menu-icon");
        focus_flag=0;
    }
   }

