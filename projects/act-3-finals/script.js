$("#btnChange").click(function(){
    $("#messprof").text("You click your profile!")
})

$("#btnChange").dblclick(function(){
    $("#messprof").text("You dobule click your profile!")
})

$("#btnChange").mouseenter(function(){
    $("#messChange").text("Your mouse left the button!")
})

$("#btnChange").mouseleave(function(){
    $("#messChange").text("Your mouse reach the button!")
})

$("#btnChange").click(function(){

    $("tr li:first").css("color", "green")
})







$(".option").change(function(){
    $("#course").text("Course: " + $(this).val())
     $("#messChange1").text("You change your course!")

    
    
})

$(".option").change(function(){
    $("#bscs").text((this).val())
     $("#messChange1").text("bscs")
   
     

    
    
})







$("#btnHide").click(function(){
    $(".card-main1").hide("slow")
})

$("#btnShow").click(function(){
    $(".card-main1").show("slow")
})

$("#btnHide1").click(function(){
    $("table").hide("slow")
})

$("#btnShow1").click(function(){
    $("table").show("slow")
})



$("#btnOdd").click(function(){
    $("tr:odd").css("background", "red")
})

$("#btnEven").click(function(){
    $("tr:even").css("background", "green")
    
})



$("#btnOdd").dblclick(function(){
    $("tr:odd").css("background", "aliceblue")
})

$("#btnEven").dblclick(function(){
    $("tr:even").css("background", "aliceblue")
})





