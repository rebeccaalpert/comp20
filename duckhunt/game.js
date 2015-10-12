function init() {
	var sprite = new Image();
	var background = new Image();
	sprite.addEventListener("load", function() {
  		// execute drawImage statements here
    	var canvas = document.getElementById("game_canvas");
		var ctx = canvas.getContext("2d");
		ctx.drawImage(background,0,0);
		ctx.drawImage(sprite,0,0);
		}, false);
	background.src = "./duckhunt-background.gif";
	sprite.src = "./duckhunt_various_sheet.png"; // Set source path
}