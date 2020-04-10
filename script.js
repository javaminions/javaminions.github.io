$(document).ready(function(){

  $("#Orders").click(function(){
    $("#externalPlaceholder").load("Orders.html");
  });
  
  $("#WishList").click(function(){
    $("#externalPlaceholder").load("WishList.html");
  });
  
  $("#Profile").click(function(){
    $("#externalPlaceholder").load("Profile.html");
  });
  
  $("#Logout").click(function(){
    $("#externalPlaceholder").html("<h2>You have been logged out successfully. Thank you and enjoy your day</h2>");
  });

});
