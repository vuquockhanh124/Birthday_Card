var card= document.querySelector(".card");
var imgBox= document.querySelector(".imgBox");
var bark= document.querySelector(".bark");

var Onclick= false;






card.addEventListener("click", function(){

   if(Onclick===false){
    card.classList.add("card_hover");
    imgBox.classList.add("card_hover_imgBox");
    bark.classList.add("card_hover_bark");
    Onclick=true;

   }

   else if(Onclick===true){
    card.classList.remove("card_hover");
    imgBox.classList.remove("card_hover_imgBox");
    bark.classList.remove("card_hover_bark");


    Onclick=false;
   }
  
});