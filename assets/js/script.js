$(document).ready(function(){
  //Mark what is done
  //It clicks AN LI inside of the UL, we need to do this cuz othervise it won`t mark New Lis
    $("ul").on("click", "li", function(){
        $(this).toggleClass("completed");
      });

  //Click to Delete
  // SAme thing with span here, works exactly same
  $("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
    event.stopPropagation();
  });

    //Create new To-dos
    $("input[type='text']").keypress(function(event){
        if(event.which === 13){
          //Take the text from input
         var todoText =  $(this).val();
         $(this).val("");
         $('ul').append("<li><span><i class='fa fa-trash-o'></i></span>" + todoText + "</li>")
        }
    });

    $(".fa-plus").click(function(){
        $("input[type='text']").slideToggle()
    });


});
