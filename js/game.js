var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

    var winCount = 0;
    var lossCount = 0;
    var remainingGuesses = 20;
    var guesses = "";

    var computerGuess = letter[Math.floor(Math.random()*letter.length)];
    console.log(computerGuess)

    var guesses = document.getElementById("guesses");

    var winSpan = document.getElementById("wins");

    var lossSpan = document.getElementById("losses");

    var guessesLeft = document.getElementById("guesses-left");
        
    
    // Key CLick Events 
    document.onkeyup = function (event) {
       var userGuesses = event.key;
    //    document.getElementById("guesses").innerHTML = "Letters guessed:" + userGuesses;

        if (userGuesses === computerGuess) {
            
                winCount++;
                alert("Nice, Good Job!");
                reset();
        }

        else {
            remainingGuesses--;
            for (var i = 0; i < 1; i++) {
                guesses.textContent += userGuesses;
            }
        }

        if (remainingGuesses === 0){
            lossCount++;
            alert("Ouch, Try Again");
        }

        
        
        winSpan.textContent = winCount;
        guessesLeft.textContent = remainingGuesses;
        lossSpan.textContent = lossCount;


    }
