

	var timeoutID;

	function HelloWorld(){
		console.log('Hello, World! From scripts.js') // warn info error clear dir assert log // Writing into an alert box, using (window.)alert() // Writing into the HTML output using document.write() // Writing into an HTML element, using innerHTML. // Writing into the browser console, using console.log().
	}

	function callback(){
		$("header").hide("slow", delayedSquare);
	}

	function square(point){
		return console.log(point * point);
	}

	function delayedSquare() {
	  	timeoutID = window.setTimeout(square, 3000, 4);
	}

	function clearAlert() {
	  	window.clearTimeout(timeoutID);
	}

	HelloWorld();
	square(9); // in console tried with f.e. square(15) = 225 / square(46) = 2116
	delayedSquare();