var canvas = document.createElement("canvas");
canvas.id = "gameScreen";




function gameloop() {

	requestAnimationFrame(gameloop);
}

//   https://editor.method.ac/
//https://thislittleduck.com/blog/svg-animation-using-snap-svg/


(function() {
 
	function Button(label) {
	    this.Container_constructor();
	    this.label = label;
	}
	var p = createjs.extend(Button, createjs.Container);
 
	p.draw = function(ctx, ignoreCache) {
	    this.Container_draw(ctx, ignoreCache);
	    // add custom logic here.
	}
 
window.Button = createjs.promote(Button, "Container");

}());