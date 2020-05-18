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

