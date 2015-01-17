
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*-- Create Random Number --*/
  	var random_number = Math.floor(Math.random()*101);


	//*-- Counter --*//

  	var clicks = 0;
  	function counter() {
		clicks += 1;
		document.getElementById("count").innerHTML = clicks;
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
		else 
		{
			//$(".numberlist").empty();
			//$("ul.guessBox").append('<li>' + value_number + '</li>');
			$(".guessBox").append('<li>' + value_number + '</li>');
			
			var comparison = compare_number(random_number, value_number);
			alert(comparison);
			//?????HOW TO CLEAR SEARCHBOX?????
			counter();

		}
	}

	function compare_number(num1, num2) 
	{
		if (num1 === num2) {
			return 'You have found the secret number';
		}
		else if (num1 > num2) {
			return 'Secret Number is Higher';
		}
		else {
			return 'Secret Number is Lower';
		}
 	});
});


