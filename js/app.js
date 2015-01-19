
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*-- Initialize Global Variables --*/

  	var clicks = 0;
  	var random_number = 0;

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	 /*-- Start or Restart Game --*/

  	function start_game() 
  	{
 		clicks = 0;
 		$(".guessBox").empty();
 		random_number = Math.floor(Math.random()*101);
 		document.getElementById("count").innerHTML = clicks;
 		document.getElementById("feedback").innerHTML = 'Make your Guess!';
 		document.getElementById("myForm").reset();
 		return clicks, random_number;
 	};


	//*-- Counter --*//

  	function counter() 
  	{
		clicks += 1;
		document.getElementById("count").innerHTML = clicks;
	};


	/*-- Compare two numbers --*/

	function compare_number(num1, num2) 
	{
		if (num1 === num2) {
			document.getElementById("feedback").innerHTML = 'You have found the secret number';
		}
		else if (num1 > num2) {
			document.getElementById("feedback").innerHTML = 'Secret Number is Higher';
		}
		else {
			document.getElementById("feedback").innerHTML = 'Secret Number is Lower';
		}
 	};


  	/*-- Capture number at click ---*/

  	$("form").on("click", "#guessButton", function()
  	{
  		event.preventDefault();
  		var value_string = document.getElementById("userGuess").value;
		var value_number = parseFloat(value_string);

		// check if enter number
		if (isNaN(value_number)) 
		{
			alert ("Please enter a number");
		}
		else if (value_number % 1 != 0) {
			alert ("Please enter integer");
		}
		else if ((value_number > 100) || (value_number < 0)) {
			alert ("Please enter number between 0 and 100")
		}
		else 
		{
			$(".guessBox").append('<li>' + value_number + '</li>');
			//?????HOW TO CLEAR SEARCHBOX?????
			compare_number(random_number, value_number);
			counter();
		}
		document.getElementById("myForm").reset();
	});

  	/*-- Restart game if click on +New Game --*/

	$("nav").on("click", ".new", function()
  	{
  		start_game();
	});

	/*-- Starter --*/

	start_game();

});


