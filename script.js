var card= document.querySelector(".card");
var imgBox= document.querySelector(".imgBox");
var bark= document.querySelector(".bark");


var background_music= document.querySelector(".background_music");

background_music.volume=0.4;

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



// $(document).ready(function() {
//    $("#my_audio").get(0).play();
// });



  

var container=document.querySelector(".container");

var active=0;

 
// var colors = ['linear-gradient(to right bottom, #291b4c, #6a2160, #a92661, #dd404f, #fc712d)'
// , 'linear-gradient(to right bottom, #0a1d2c, #0c2d46, #0e3e62, #134f7f, #1c619d)'
// , 'linear-gradient(to left top, #b5bc08, #ec8519, #f9485d, #cf359f, #5953c9)']; 

//       setInterval(function(){
//          document.querySelector('body').style.backgroundImage = colors[active];
//          active++;
//          if (active == colors.length) active = 0;
//       },2000);
     
      
 
 
 
  