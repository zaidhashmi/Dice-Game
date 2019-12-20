
function roll(){
  var randomNumber1=Math.floor(Math.random()*6 +1); // generate random numbers 1-6
  var randomDiceImage= "dice"+ randomNumber1+ ".png"; //change image dice1.png - dice6.png
  var randomImageSource="images/"+randomDiceImage; //images/dice1.png - images/dice6.png

  var image1=document.querySelectorAll("img")[0];

  image1.setAttribute("src",randomImageSource);

  var ramdomNumber2=Math.floor(Math.random()*6+1);
  var ramdomDiceImages="dice"+ramdomNumber2+".png";
  var randomImageSource="images/"+ramdomDiceImages;

  var image2=document.querySelectorAll("img")[1];

  image2.setAttribute("src",randomImageSource);

  if(randomNumber1>ramdomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player1 Win";
  }
  else if(ramdomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Win 🚩";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!";
  }

}
