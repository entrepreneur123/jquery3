$(document).keydown(function(e){
	let code = e.which
	console.log(code)
	if(code==40){
		alert("down");
	}
	if(code==38){
		alert("up")
	}
	if(code==37){
		moveLeft()
	}
	if(code==39){
		moveRight()
	}
	
	
})

function moveLeft()
{
	let boardposition = $(".board").position()
	if(boardposition.left>0){
	let position = $(".board").position()
	$(".board").css("left", position.left-20)
}
}
function moveRight()
{
	let position = $(".board").position()
	$(".board").css("left", position.left+20)
}