
var initialArray = ["1","2","3","4"];
var random = [];
var match = false;
var rand = function() {
  return Math.random();
};
for(var j=0;j<initialArray.length;j++) {
  if (rand() > .5) {
  random.push(initialArray[j]);

  } else {
  random.unshift(initialArray[j]);
  }
};

console.log(random);



$(document).ready(function() {

  $("form#nameInput").submit(function(event) {
    event.preventDefault();
  });

for(var i = 0; i<initialArray.length; i++) {
  $("span#indexval" + (i+1)).text(random[i]);

};

// console.log(initialArray.length);
  $(".card").click(function() {
    $(this).find("span").css("display", "block");

    // var cellValue = $(this).attr("p");
    var cardValue = ($(this).find("p").text());

    // $(this).find("span").removeClass(".showCard");
    // var showValue = ($(this).show());

    if (match == true) {
      alert("hi")
    } else {
      $(this).find("span").css("display", "none");
    }
  });
})
