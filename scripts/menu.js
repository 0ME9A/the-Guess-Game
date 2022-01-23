

var phone_menu = document.getElementsByTagName('menu');
var phone_menu_btn = document.getElementById('phone-nav-btn');
var menu = document.getElementsByClassName('phone-nav')


phone_menu[0].onclick=function(){
    menu[0].style.transform="scale(1)";
    menu[0].style.opacity=1;
}
phone_menu_btn.onclick=function(){
    menu[0].style.transform="scale(0)";
    menu[0].style.opacity=0;
}
