function diceImageGenerator() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  var randomeDiceImage = "dice" + randomNumber + ".png";

  var randomImageSource = "images/" + randomeDiceImage;

  var a=[];
  a.push(randomNumber);
  a.push(randomImageSource);
  return a;
}

var image1 = diceImageGenerator();
document.querySelectorAll("img")[0].setAttribute("src", image1[1]);

var image2 = diceImageGenerator();
document.querySelectorAll("img")[1].setAttribute("src", image2[1]);

image1[0] > image2[0] ? document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!" : image1[0] < image2[0]? document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩" : document.querySelector("h1").innerHTML = "🚩Draw!🚩";
