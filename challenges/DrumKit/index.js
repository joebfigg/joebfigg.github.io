
function playSound(keyPressed){
	
	switch (keyPressed){
		
		case "w":
		var crash = new Audio("sounds/crash.mp3");
		crash.play();
		console.log(keyPressed);
		break;
		
		case "a":
		var crash = new Audio("sounds/kick-bass.mp3");
		crash.play();
		console.log(keyPressed);
		break;
		
		case "s":
		var crash = new Audio("sounds/snare.mp3");
		crash.play();
		console.log(keyPressed);
		break;
		
		case "d":
		var crash = new Audio("sounds/tom-1.mp3");
		crash.play();
		console.log(keyPressed);
		break;
		
		case "j":
		var crash = new Audio("sounds/tom-2.mp3");
		crash.play();
		console.log(keyPressed);
		break;
		
		case "k":
		var crash = new Audio("sounds/tom-3.mp3");
		crash.play();
		console.log(keyPressed);
		break;
		
		case "l":
		var crash = new Audio("sounds/tom-4.mp3");
		crash.play();
		console.log(keyPressed);
		break;
		
	}
}

document.addEventListener("keypress", function(event){
		var keyPressed = event.key;
		playSound(keyPressed);
		buttonAnimation(keyPressed);
});

for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
	
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		var keyPressed = this.innerHTML;
		playSound(keyPressed);
		buttonAnimation(keyPressed)
	});
}

function buttonAnimation(buttonPress){
	
	buttonObject = document.querySelector("." + buttonPress);
		document.querySelector("." + buttonPress).classList.add("pressed");
		setTimeout(function(){document.querySelector("." + buttonPress).classList.remove("pressed")}, 100) 
		
	///if (buttonObject.classList.contains("pressed")){
	///	document.querySelector("." + buttonPress).classList.remove("pressed");
	///} else {
	////	document.querySelector("." + buttonPress).classList.add("pressed");
	
	
}