function init() {
	var sprite = new Image();
	var background = new Image();
	sprite.addEventListener("load", function() {
  		// execute drawImage statements here
    	var canvas = document.getElementById("game_canvas");
		var ctx = canvas.getContext("2d");
		ctx.drawImage(background,0,0);
		// draw first cropped bird
        var sourceX = 0;
        var sourceY = 118;
        var sourceWidth = 38;
        var sourceHeight = 34;
        var destWidth = sourceWidth;
        var destHeight = sourceHeight;
        var destX = 80;
        var destY = 70;
        ctx.drawImage(sprite, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
        // draw second cropped bird
        var sourceX = 128;
        var sourceY = 118;
        var sourceWidth = 38;
        var sourceHeight = 34;
        var destWidth = sourceWidth;
        var destHeight = sourceHeight;
        var destX = 125;
        var destY = 40;
        ctx.drawImage(sprite, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
		}, false);
	background.src = "./duckhunt-background.gif";
	sprite.src = "./duckhunt_various_sheet.png"; // Set source path
}