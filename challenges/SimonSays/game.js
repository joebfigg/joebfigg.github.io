var buttonColor = ["red","green","blue","yellow"];
var highlightColor = ["rgb(255,125,125)","rgb(125,255,125)","rgb(125,125,255)","rgb(255,255,125)"];
var playerPattern = [];
var gamePattern = [];

var gameStart = false;
var gameOverSound = new Audio("sounds/wrong.mp3");

var randomChosenColor;
var level = 0

for (var i = 0; i < $(".btn").length; i++){
	
	$(".btn")[i].addEventListener("click",function(event){
		playerPattern.push(event.target.id);
		
		console.log(playerPattern);
		
	var color = event.target.id;	
	var boxShadow = "0em 0em 5em " + highlightColor[buttonColor.indexOf(event.target.id)];	
	var buttonSound = new Audio("sounds/" + color + ".mp3");
	var highlight = highlightColor[buttonColor.indexOf(color)]


		
	$("#" + color).css({"border-color": highlight, "background": highlight,"box-shadow": boxShadow });
	
	setTimeout(function() {
			$("#" + color).css({"border-color": "black", "background": color,"box-shadow": "0em 0em 0em white" })
		}, 200);
	

	if (gameStart){	
		buttonSound.play();
		playTurn();	
	} else {
		

		gameOverSound.play();	
		$("h1").css({"color":"red", "font-size":"3.2rem"});
		setTimeout(function(){$("h1").css({"color":"white", "font-size":"3rem"})},200);
		
	};
	});
}


function nextSequence(){
	$("h1").text("Level " + level);
	
	var randomNumber = Math.floor(Math.random() * 4);
	randomChosenColor = buttonColor[randomNumber];
	gamePattern.push(randomChosenColor);
	
	level++
};

function highlightButton(color,highlight,boxshadow,i){	

	setTimeout(function() {
		var buttonSound = new Audio("sounds/" + color + ".mp3");

		buttonSound.play();	
		$("#" + color).css({"border-color": highlight, "background": highlight,"box-shadow": boxshadow })
		setTimeout(function() {
			$("#" + color).css({"border-color": "black", "background": color,"box-shadow": "0em 0em 0em white" })
		}, 200)
	}, 500 * i);
};


function playbackSequence(){
	for (i = 0; i < gamePattern.length ; i++){
	
	var highlightChosen = highlightColor[buttonColor.indexOf(gamePattern[i])];
	var boxShadow = "0em 0em 5em " + highlightColor[buttonColor.indexOf(gamePattern[i])];
		
	highlightButton(gamePattern[i],highlightChosen,boxShadow,i);

	
	};
};

function playTurn(){
	
	if (gamePattern.length > playerPattern.length){

		for (i = 0; i < playerPattern.length; i++){
			console.log(gamePattern[i]);
			console.log(playerPattern[i]);
			if(playerPattern[i] === gamePattern[i]){
				console.log("match");
			} else {
				gameOver();
			};
		};
		
	} else {
		
		if (gamePattern[gamePattern.length - 1] === playerPattern[playerPattern.length - 1]){
			nextSequence();
			setTimeout(function(){playbackSequence()},1500);
			playerPattern = [];
		} else {
			gameOver();
		}
	}
	
};

function gameOver(){
	$("body").css("background","darkred");
	$("h1").text("Game Over! Press Any Key To Play Again....");
	level = 0;
	gameOverSound.play();
	gameStart = false;
}

document.addEventListener("keypress", function(event){
	if(gameStart){
		
	} else {
		$("body").css("background","rgb(1,31,63)");
		gamePattern = []
		playerPattern = []
		nextSequence();
		playbackSequence();
		gameStart = true;
	};
});
