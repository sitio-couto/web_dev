$("ul").on("click", "li", function(){
  if(!$(this).hasClass("completed"))
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
  $(this).parent().slideUp(100, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("button").click( function(){
  $("input").slideToggle(200);
});

$("input").keypress(function(event){
  if(event.keyCode == 13) addItem();
});

function addItem(){
  var entry = $("input")[0].value;
  var image = "images/trashIcon.png"

  if(entry != ""){
    $("ul").append("<li><span><img src=" + image + "></span>" + entry + "</li>");
  }

   $("input")[0].value = "";
}
