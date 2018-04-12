
var initialArray = ["A","A","B","B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L"];
var randomArray = [];
var rand = function() {
  return Math.random();
};
for(var j=0;j<initialArray.length;j++) {
  if (rand() > .5) {
  randomArray.push(initialArray[j]);

  } else {
  randomArray.unshift(initialArray[j]);
  }
};

function match(num1, num2){
  if (num1 === num2){
    return true
  } else {
    return false
    }
};

var chosenCards =[];
var matched = [];

//ACCEPTS strings from card values
//will return TRUE for cards being kept visible (1 or a match) or FALSE for a mismatch found, return cards to face-down
function flipCard(cardValue){
  chosenCards.push(cardValue);
  if (chosenCards.length > 1) {
    var checkResult = match(chosenCards[0], chosenCards[1]);
    if(checkResult === true) {
      chosenCards.forEach(function(thisCardValue){matched.push(thisCardValue)});
    }
    chosenCards = [];
    return checkResult;
  }
  return true;
}


//UI
$(document).ready(function() {

  $("form#nameInput").submit(function(event) {
    event.preventDefault();
    $(".card").show();
    $("#nameInput").hide();
  });
  // $("#refreshButton").click(function() {
  //   $("#nameInput").show();
  //   $(".card").show();
  //
  // })
//writes letters to cards
for(var i = 0; i<initialArray.length; i++) {
  $("span#indexval" + (i+1)).text(randomArray[i]);

};

  $(".card").click(function() {
    $(this).find("span").css("display", "block");
    // var cellValue = $(this).attr("p");
    var cardValue = ($(this).find("p").text());



    // $(this).find("span").removeClass(".showCard");
    // var showValue = ($(this).show());

    if (flipCard(cardValue) == true) {
      console.log(chosenCards)
    } else {
      $(this).find("span").css("display", "none");
    }
  });
})
