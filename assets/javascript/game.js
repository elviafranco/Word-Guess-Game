

// VARIABLES
// var clicks = 0
var words = ["pacman", "donkeykong", "spaceinvaders", "galaga", "asteroids", "centipede", "mspacman", "digdug", "mariobros", "defender", "pong"];
var word = words[Math.floor(Math.random() * words.length)];
var remainingChances = 10
var wins = 0
var losses = 0
var guess = "";
var answerArray = [];
var remainingLetters = word.length;
var guessedLetters = [];

// STEP 1
// LOG CURRENT WORD
    for (var i = 0; i < word.length; i++) {
        answerArray.push("_");
    }
    // var remainingChances = word.length;

    answerArray.join(",");
    document.getElementById("underScores").innerHTML = answerArray
    console.log(answerArray)


    document.getElementById("remaining").innerHTML = remainingChances;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("guess").innerHTML = guess;
    document.getElementById("losses").innerHTML = losses;
    console.log(wins);
    console.log(guess);
    console.log(losses);
    console.log(word);
    


// CREATE A RELATIONSHIP BETWEEN VARIABLES IN JAVASCRIPT/HTML
document.onkeydown = function (event) {
    document.getElementById("remaining").innerHTML = remainingChances;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("guess").innerHTML = guess;
    // document.getElementById("guess").text = guess;

    guess = event.key
    console.log(answerArray);
    
    if (!guessedLetters.includes(guess)){
        guessedLetters.push(guess);
        remainingChances--;
    }


    
    if (remainingChances > 0) {
        for (let i = 0; i < word.length; i++) {
                if (word[i] == guess) {
                    answerArray[i] = guess;
                    document.getElementById("underScores").innerHTML = answerArray


                    // answerArray=[];
                    // remainingChances=10;
                    // document.getElementById("underScores").innerHTML = answerArray
                    console.log (answerArray)
                }
                else {
                    console.log("Guessed stuff", guessedLetters)

                    document.getElementById("guess").innerHTML = guessedLetters

                }

            



            if (!answerArray.includes("_")) {
                wins++;
                newGame();
            }

        }
    }
    else {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            // answerArray=[];
            remainingChances = 10;
            newGame();
            // if (remainingChances = 1)
            // alert("You lost! Try again!");
        }


    }
    

    function newGame() {
        word = words[Math.floor(Math.random() * words.length)];
        answerArray = [];
        for (let i = 0; i < word.length; i++) {
            answerArray.push("_");
        }
        // var remainingChances = word.length;
        guessedLetters = [];
        guess = ""
        answerArray.join(",");
        document.getElementById("underScores").innerHTML = answerArray
        remainingChances = 10;
        document.getElementById("remaining").innerHTML = remainingChances;
        document.getElementById("win").innerHTML = wins;
        document.getElementById("guess").innerHTML = guess;
        document.getElementById("losses").innerHTML = losses;
        console.log(wins);
        console.log(losses);
        console.log(word)
        console.log(answerArray);
        console.log(guessedLetters)
        console.log(word);
        
    }

