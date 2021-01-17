const burgerMenu = document.querySelector(".header__burger-menu");
const popup = document.querySelector("b-popup");
burgerMenu.addEventListener("click", PopUpShow)


$(document).ready(function(){
  //Скрыть PopUp при загрузке страницы    
  PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
  $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
  $("#popup1").hide();
}

popup.addEventListener("click", ) 