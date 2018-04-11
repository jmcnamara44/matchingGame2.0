function match(dummyVar1, dummyVar2){
  if (dummyVar1 === dummyVar2){
    return true
  } else {
    console.log("else")
    // flip2Default();
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
