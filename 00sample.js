function loadImage(src, parent, callback) {
	var img = document.createElement('img');
	img.src = src;
	img.onload = callback;
	parent.appendChild(img);
}

loadImage('src1.jpg', imgContainer1, function (){
	loadImage('src2.jpg', imgContainer2, function (){
		loadImage('src3.jpg', imgContainer3, function (){
			loadImage('src4.jpg', imgContainer4, function (){
				// DONE!!
			});
		});
	});
});
// CALLBACK HEll
// Pyramid of Doom


var sequence = asyncPromiseCode('example.json').
				then(doSomething).
				then(doSomethingElse);
