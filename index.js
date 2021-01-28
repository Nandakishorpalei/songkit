
// sounds
var audio=new Audio("wajah.mp3");
var audio1=new Audio("aayine.mp3");
var audio2=new Audio("cmyn.mp3");
var audio3=new Audio("ekdin.mp3");
var audio4=new Audio("haledil.mp3");
var audio5=new Audio("Butterfly.mp3");
var audio6=new Audio("tumhiho.mp3");
var audio14=new Audio("laapata.mp3");
var audio15=new Audio("burj.mp3");
var audio7=new Audio("wajah.mp3");
var audio8=new Audio("aayine.mp3");
var audio9=new Audio("cmyn.mp3");
var audio10=new Audio("ekdin.mp3");
var audio11=new Audio("haledil.mp3");
var audio12=new Audio("Butterfly.mp3");
var audio13=new Audio("tumhiho.mp3");
var audio16=new Audio("laapata.mp3");
var audio17=new Audio("burj.mp3");
var audio15=new Audio("burj.mp3");

var buttonw = document.querySelector(".wajah"),count = 1;
var buttonk = document.querySelector(".kabhi"),count = 1;
var buttonb = document.querySelector(".butterfly"),count = 1;
var buttonc = document.querySelector(".cmyn"),count = 1;
var buttone = document.querySelector(".ekdin"),count = 1;
var buttonh = document.querySelector(".haledil"),count = 1;
var buttonl = document.querySelector(".laapata"),count = 1;
var buttonbu = document.querySelector(".burj"),count = 1;
var buttont = document.querySelector(".tumhiho"),count = 1;

var number=document.querySelectorAll(".drum").length;


for(i=0 ; i<number ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
// detecting button press

 var buttonInnerHTML = this.innerHTML;

makesound(buttonInnerHTML);
recentbutton(buttonInnerHTML);
});

}


// detecting keyboard press

document.addEventListener("keypress", function(event) {
  makesound(event.key);
  recentbutton(event.key);
});


function makesound(key){
  switch (key){
    case "W":

    buttonw.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio.pause();
    }
    else{

    audio.play();
      }
    };
audio.play();
    break;

    case "K":
    buttonk.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio1.pause();
    }
    else{

    audio1.play();
      }
    };

      audio1.play();
      break;


    case "C":
    buttonc.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio2.pause();
    }
    else{

    audio2.play();
      }
    };

      audio2.play();

    break;


    case "E":
    buttone.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio3.pause();
    }
    else{

    audio3.play();
      }
    };

      audio3.play();
    break;


    case "H":
    buttonh.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio4.pause();
    }
    else{

    audio4.play();
      }
    };

      audio4.play();
    break;


    case "J":
    buttonb.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio5.pause();
    }
    else{

    audio5.play();
      }
    };

      audio5.play();
    break;


    case "T":
    buttont.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio6.pause();
    }
    else{

    audio6.play();
      }
    };

      audio6.play();

    break;


    case "L" :
    buttonl.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio14.pause();
    }
    else{

    audio14.play();
      }
    };
    audio14.play();
    break;

    case "B":
    buttonbu.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio15.pause();
    }
    else{

    audio15.play();
      }
    };
    audio15.play();
    break;



    case "w":


        audio7.play();
    break;

    case "k":


      audio8.play();
      break;


    case "c":


      audio9.play();

    break;


    case "e":


      audio10.play();
    break;


    case "h":


      audio11.play();
    break;

    case "j":


      audio12.play();
    break;

    case "t":


      audio13.play();

    break;

    case "l":

    audio16.play();
    break;

    case "b":

    audio17.play();
    break;

    case "N":

    audio15.pause();

    break;

    default : alert("wrong entry");
  }

}

function recentbutton(activekey){
   var activebutton=  document.querySelector("."+activekey);
   activebutton.classList.add("pressed");
   setTimeout(function() {
     activebutton.classList.remove("pressed");
   },100);
 }
