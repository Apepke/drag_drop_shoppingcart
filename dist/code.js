//Name: Alex Pepke 
//App Descriotion: A web-based application that allows users to purchase coffee shop items
$(function() {
  var total = 0;
   $("#startButton").click(function(){
     window.location.href='coffeeMenu.html';
   });
  $("#welcome").html("Welcome to the Coffee Shop!");
  // initialization code when DOM is ready
  $("#drink li, #food li").draggable({
    helper: "clone"
  }).css("cursor", "pointer");

  $("#cart").droppable({
    tolerance: "fit",
    drop: function(evt, ui) {
      console.log("Drop event!");
      console.log(evt);
      console.log(ui);
      // droppedUI = ui;
      // alert("Dropping: " + ui.draggable.html());
      if(ui.draggable.html().includes("Hot Coffee")){
         total = total + 2.00;
      }
      else if(ui.draggable.html().includes("Iced Coffee")){
         total = total + 3.00;
      }
      else if(ui.draggable.html().includes("Hot Latte")){
         total = total + 2.00;
      }
      else if(ui.draggable.html().includes("Iced Latte")){
         total = total + 3.00;
      }
      else if(ui.draggable.html().includes("Orange Juice")){
         total = total + 1.00;
      }
      else if(ui.draggable.html().includes("Hot Chocolate")){
         total = total + 1.00;
      }
      else if(ui.draggable.html().includes("Breakfast Sandwich")){
         total = total + 5.00;
      }
      else if(ui.draggable.html().includes("Doughnut")){
        total = total + 2.00;
      }
      else if(ui.draggable.html().includes("Bannana")){
         total = total + 1.00;
      }
      else if(ui.draggable.html().includes("Cinnamon Roll")){
        total = total + 2.00;
      }
      $("#total").html("Order total: $" + total)
      $("#cart").append("<li>" + ui.draggable.html() + 
                        " (<a href='dummy.html' class='remove'>" + "Remove</a>)" +
                       "</li>"
                       )
        .css("height", "auto");;
    }
  });
  $("#cart").on("click", "a.remove", function() {
    console.log("About to remove an element");
    if($(this).parent().html().includes("Hot Coffee")){
         total = total - 2.00;
      }
      else if($(this).parent().html().includes("Iced Coffee")){
         total = total - 3.00;
      }
      else if($(this).parent().html().includes("Hot Latte")){
         total = total - 2.00;
      }
      else if($(this).parent().html().includes("Iced Latte")){
         total = total - 3.00;
      }
      else if($(this).parent().html().includes("Orange Juice")){
         total = total - 1.00;
      }
      else if($(this).parent().html().includes("Hot Chocolate")){
         total = total - 1.00;
      }
      else if($(this).parent().html().includes("Breakfast Sandwich")){
         total = total - 5.00;
      }
      else if($(this).parent().html().includes("Doughnut")){
        total = total - 2.00;
      }
      else if($(this).parent().html().includes("Bannana")){
         total = total - 1.00;
      }
      else if($(this).parent().html().includes("Cinnamon Roll")){
        total = total - 2.00;
      }
      $("#total").html("Order total: $" + total);
    $(this).parent().remove();
    return false;
  });
  
  getCart = function() {
    /* returns all of the items in the cart
     this version just returns the whole string with html
    elements --- we want a version that returns an array of
    just the items  */
    return $("#cart").html();
    
  }
  $('#submitButton').click(function(){
   window.location.href='confirmationPage.html';
})
  $('#clearButton').click(function(){
   window.location.href='coffeeMenu.html';
})
});
