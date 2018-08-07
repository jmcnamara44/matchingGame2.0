
var initialArray = ["A","A","B","B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L"];
var randomArray = [];
function rand(){
    var i = initialArray.length
    var j;
    var temp;
    while(--i >= 0){
        j = Math.floor(Math.random() * (i+1));
        temp = initialArray[j];
        initialArray[j] = initialArray[i];
        initialArray[i] = temp;
        randomArray.push(temp);
    }
    return randomArray;
}

function match(num1, num2){
  if (num1 === num2){
    return true;
  } else {
    return false;
    }
};

var clickArray = [];
var chosenCards =[];
var matched = [];
var matchedId = [];

//ACCEPTS strings from card values
//will return TRUE for cards being kept visible (1 or a match) or FALSE for a mismatch found, return cards to face-down
function flipCard(cardValue){
  chosenCards.push(cardValue);

  if (chosenCards.length > 1) {

    var checkResult = match(chosenCards[0], chosenCards[1]);
    if(checkResult === true) {
      if (matchedId.indexOf(clickArray[0]) == -1){
        matchedId.push(clickArray[0]);
        matchedId.push(clickArray[1]);
        matched.push(chosenCards[0]);
        matched.push(chosenCards[1]);
      }
      console.log(matched);
      console.log(matchedId);
      for(var x = 0; x<matchedId.length;x++) {
        $("#indexval" + matchedId[x]).css("background-color", "#FFF542");
        $("#" + clickArray[x]).css("background-color", "black");
        $("#" + clickArray[x]).css("background-color", "black");
        $("#" + clickArray[x]).append("<p class=match>" + chosenCards[x] + "</p>");
      };
    } // end if statement true
    string = [];
    clickArray = [];
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
  var nameInput;
  $(".resetGame").hide();
  $("form#nameInput").submit(function(event) {
    event.preventDefault();
    $(".card").show();
    $("#nameInput").hide();
    $(".resetGame").show();
    nameInput = $("#inputName1").val();

    $("button.refreshButton").click(function(event) {
      event.preventDefault();
      refresh();
    });
  });

//writes letters to cards
rand();
for(var i = 0; i<initialArray.length; i++) {
  $("span#indexval" + (i+1)).text(randomArray[i]);
};



  $(".card").click(function() {
    if(clickArray[0] == ($(this).attr("id"))){
    } else {
      $(this).find("span").css("display", "block");
      var cardValue = ($(this).find("p").text());
      var idValue = ($(this).attr("id"));
      clickArray.push(idValue);
      if (flipCard(cardValue) == true) {
        if (matched.length === 24) {
          alert(nameInput + ", you've won! Restart game to play again.")
        }
      } else {
        $(".hide").fadeOut(2000);
      }
    }

  });
})
