var flag = 1;

function displayMenu() {
    flag = flag + 1;
    if (flag % 2 == 0) {
        document.getElementById("l2").setAttribute("id", "l2-new");
        document.getElementById("l1").setAttribute("id", "l1-new");
        document.getElementById("l3").setAttribute("id", "l3-new");
        document.getElementsByClassName("menu")[0].setAttribute("class", "menu-displayed");
    } else {
        document.getElementById("l2-new").setAttribute("id", "l2");
        document.getElementById("l1-new").setAttribute("id", "l1");
        document.getElementById("l3-new").setAttribute("id", "l3");
        document.getElementsByClassName("menu-displayed")[0].setAttribute("class", "menu");
    }

}