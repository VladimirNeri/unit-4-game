

var winCounter = 0;
var lossCounter = 0;
var computerChoice = Math.floor(Math.random() * 101) + 19;
    
        $("#computerChoice").text(computerChoice);

var blue = Math.floor(Math.random() * 11) + 1;
var red = Math.floor(Math.random() * 11) + 1;
var purple = Math.floor(Math.random() * 11) + 1;
var green = Math.floor(Math.random() * 11) + 1;


        $("#winCounter").html(winCounter);
        $("#lossCounter").html(lossCounter);

var counter = 0;
        $("#playersTotalScore").text(counter);

    function reset() {

        computerChoice = Math.floor(Math.random() * 101) + 19;
          
        $("#computerChoice").text(computerChoice);

        blue = Math.floor(Math.random() * 11) + 1;
        red = Math.floor(Math.random() * 11) + 1;
        purple = Math.floor(Math.random() * 11) + 1;
        green = Math.floor(Math.random() * 11) + 1;
        counter = 0;
    
        $("#playersTotalScore").text(counter);

    }

    function win() {

	      alert("You win!");
        winCounter ++;
	      $("#winCounter").text(winCounter);
        reset();
    }

    function lose() {

	      alert("You lose!");
	      lossCounter ++;
	      $("#lossCounter").text(lossCounter);
	      reset();
    }

    $('#blue').on ('click', function() {

        counter = counter + blue;
        $('#playersTotalScore').text(counter); 
        if (counter == computerChoice) {
        win();
        }
        else if (counter > computerChoice) {
          lose();
        }   
    });  

    $('#red').on ('click', function() {
    
        counter = counter + red;
        $('#playersTotalScore').text(counter); 
        if (counter == computerChoice) {
          win();
        }
        else if (counter > computerChoice) {
          lose();
        }   
    });  

    $('#purple').on ('click', function(){
        
        counter = counter + purple;
        $('#playersTotalScore').text(counter); 
        if (counter == computerChoice) {
          win();
        }
        else if (counter > computerChoice) {
          lose();
        }   
    });  

    $('#green').on ('click', function(){
        
        counter = counter + green;
        $('#playersTotalScore').text(counter); 
        if (counter == computerChoice) {
          win();
        }
        else if (counter > computerChoice) {
          lose();
        }   
    });  
