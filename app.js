const game = () => {


    //declare score variables
    let pscore = 0;
    let cscore = 0;

    // start the game

    const startgame = () => {
        let intro = document.querySelector('.intro');
        //get playbtn
        let playbtn = document.querySelector('.intro .btn');
        // get arena section
        let playarena = document.querySelector('.play-arena');

        // console.log(intro,playbtn,playarena);

        playbtn.addEventListener('click', () => {
            // Fadeout Intro section and fadeIn  playarena section
            intro.classList.add('fadeout');
            playarena.classList.add('fadeIn');

        });
    };


    // Make choice 
    const play = () => {
        let choicebtn = document.querySelectorAll('.choose-options button');
        let playermove = document.querySelector('#player-icon');
        let computermove = document.querySelector('#computer-icon');
        // Get all images as hands to end animation
        let hands = document.querySelectorAll('.icons img');

        // End Animation
        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });

        });
        // define computers options
        const computeroptions = ['rock', 'paper', 'scissors'];

        // Listen to clicked btn

        choicebtn.forEach(choice => {
            // console.log(choice);
            // If any button is clicked
            choice.addEventListener('click', function () {

                //Gnerates Random choice for Computer
                const computernumber = Math.floor(Math.random() * 3);
                const computerChoice = computeroptions[computernumber];
                console.log(computerChoice);

                // Do the calculation in 2 seconds
                setTimeout(() => {
                    // Compare the moves
                    comparehands(this.textContent, computerChoice);

                    //Update images
                    playermove.src = `images/${this.textContent}.png`;
                    computermove.src = `images/${computerChoice}.png`;


                }, 1000);

                // Add animations
                playermove.style.animation = 'Shakeimages 1s ease';
                computermove.style.animation = 'Shakeimages 1s ease';
            });
        });

    };



        //update scores
        const updatescores = () => {
            let playerscore = document.querySelector('.player-score p');
            let computerscore = document.querySelector('.computer-score p');

            // console.log(playerscore.textContent,computerscore.textContent)

            playerscore.textContent = pscore;
            computerscore.textContent = cscore;

        };

        // Compare moves
        const comparehands = (playerChoice, computerChoice) => {
            // Get the Result div 
            let winner = document.querySelector('.result');

            //check for same options
            if (playerChoice === computerChoice) {
                winner.textContent = 'It is a Tie!';
                return;
            }

            //check for rock
            if (playerChoice === 'rock') {
                if (computerChoice === 'scissors') {
                    winner.textContent = 'You Won!';
                    pscore++;
                    updatescores();
                    return;
                } else {
                    winner.textContent = 'Computer Won!';
                    cscore++;
                    updatescores();
                    return;
                }
            }

            //check for paper
            if (playerChoice === 'paper') {
                if (computerChoice === 'rock') {
                    winner.textContent = 'You Won!';
                    pscore++;
                    updatescores();
                    return;
                } else {
                    winner.textContent = 'Computer Won!'
                    cscore++;
                    updatescores();
                    return;
                }
            }

            //check for scrissors

            if (playerChoice === 'scissors') {
                if (computerChoice === 'paper') {
                    winner.textContent = 'You Won!';
                    pscore++;
                    updatescores();
                    return;
                } else {
                    winner.textContent = 'Computer Won!'
                    cscore++;
                    updatescores();
                    return;
                }
            }
        };

        // console.log(playermove,computermove);

    startgame();
    play();

};

// Call Game functions

game();

