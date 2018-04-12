
var initialArray = ["A","A","B","B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L"];
var randomArray = [];
// var rand = function() {
//   return Math.random();
// };
// for(var j=0;j<initialArray.length;j++) {
//   if (rand() > .5) {
//   randomArray.push(initialArray[j]);
//
//   } else {
//   randomArray.unshift(initialArray[j]);
//   }
// };
function rand(){
    var i = initialArray.length
    var j;
    var temp;
    while(--i >= 0){
        j = Math.floor(Math.random() * (initialArray.length));
        temp = initialArray[j];
        initialArray[j] = initialArray[i];
        initialArray[i] = temp;
        randomArray.push(temp);

        // console.log(randomArray);
    }
    console.log(randomArray.length)
    return randomArray

}


function match(num1, num2){
  if (num1 === num2){
    return true;
  } else {
    return false;
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
      chosenCards.forEach(function(thisCardValue) {
        matched.push(thisCardValue)
      });
    } //else {
      // return checkResult;
    // }
    chosenCards = [];
    return checkResult;
  }
  return true;
}
function refresh() {
  location.reload();
};


//UI
$(document).ready(function() {
$(".resetGame").hide();
  $("form#nameInput").submit(function(event) {
    event.preventDefault();
    $(".card").show();
    $("#nameInput").hide();
    $(".resetGame").show();
    var nameInput = $("#inputName1").val();

    $("button.refreshButton").click(function(event) {
      event.preventDefault();
      refresh();
    });
  });

  // $("#refreshButton").click(function() {
  //   $("#nameInput").show();
  //   $(".card").show();
  //
  // })
//writes letters to cards
rand();
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
      // console.log(chosenCards)
      console.log(matched.length);
      // console.log("randarr "+randomArray.length, "initArr "+ initialArray.length);
      if (matched.length === 12) {
        alert(nameInput + ", you've won! Restart game to play again.")
      }
    } else {
      $(".hide").fadeOut(2000);
      // alert("Try again, idiot!")
    }
  });
})
