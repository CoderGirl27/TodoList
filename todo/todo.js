$("ul").on("click","li",function(){
	$(this).toggleClass("list")
   
})
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(function(){
    $(this).remove()	
    })
    event.stopPropagation();
})
$("input").on("keypress",function(e){
	if(event.which===13){
		var value=$(this).val()
		$(this).val("")
	    $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+value+"</li>")
	}
})
$("#plus").click(function(){
	$("input").fadeToggle()
})