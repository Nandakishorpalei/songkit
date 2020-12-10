var name=prompt("what's your Name ? ");
alert("Hey " + name +" !! Welcome to the Songkit")

var number=document.querySelectorAll(".drum").length;

for(i=0 ; i<number ; i++){
  switch (i){
    case 0:
    document.querySelectorAll(".drum")[i].addEventListener("click",handler0);
    function handler0(){
      var audio1=new Audio("WAJAH_TUM_HO_.mp3");
        audio1.play();
      }


    break;

    case 1:
    document.querySelectorAll(".drum")[i].addEventListener("click",handler1);
    function handler1(){
      var audio1=new Audio("Kabhi Aayine Pe.mp3");
      audio1.play();
    }
    break;

    case 2:
    document.querySelectorAll(".drum")[i].addEventListener("click",handler2);
    function handler2(){
      var audio2=new Audio("Chahun_Main_ Ya_Naa.mp3");
      audio2.play();
    }
    break;


    case 3:
    document.querySelectorAll(".drum")[i].addEventListener("click",handler3);
    function handler3(){
      var audio3=new Audio("Downtown.m4a");
      audio3.play();
    }
    break;


    case 4:
    document.querySelectorAll(".drum")[i].addEventListener("click",handler4);
    function handler4(){
      var audio4=new Audio("Hai_Dil_Ye_Mera.mp3")
      audio4.play();
    }
    break;

    case 5:
    document.querySelectorAll(".drum")[i].addEventListener("click",handler5);
    function handler5(){
      var audio5=new Audio("Jashn-E-Ishqa.mp3");
      audio5.play();
    }
    break;





    case 6:
    document.querySelectorAll(".drum")[i].addEventListener("click",handler6);
    function handler6(){
      var audio6=new Audio("Tum Hi Ho_.mp3");
      audio6.play();
    }
    break;

    default :
    document.write("wrong entry");
  }

}
