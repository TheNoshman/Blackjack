// Sets command hit/ stick/ new game/ score col buttons to jS variable

let hitButton = document.getElementById('hit-button');
let standButton = document.getElementById('stand-button');
let newGameButton = document.getElementById('new-game-button');
let playerScoreText = document.getElementById('player-score');
let dealerScoreText = document.getElementById('dealer-score');

// Hides the Hit and Stand buttons until New Game is clicked

hitButton.style.display = 'none';
standButton.style.display = 'none';
playerScoreText.style.display = 'none';
dealerScoreText.style.display = 'none';

// Sets card images from HTML to jS variables
let cardImage1 = document.getElementById('player-card1');
let cardImage2 = document.getElementById('player-card2');
let cardImage3 = document.getElementById('player-card3');
let cardImage4 = document.getElementById('player-card4');
let cardImage5 = document.getElementById('player-card5');

// Arrays for suits, values

let cardSuits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
let cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Deck to be populated with array of card objects from which a card will be pulled from

let deck = [];

// Function to create card objects to create a new deck

const newCardDeck = () => {

    for (let i = 0 ; i < cardValues.length; i++) 
    {
    	for (let x = 0; x < cardSuits.length; x++)  
    	{
            //Turns string value into number
            let cardValue = parseInt(cardValues[i]);
            
            // Allocates face card value to 10
            switch (cardValues[i]) {
            	case('J'):
            	case('Q'):
            	case('K'): 
            		cardValue = 10;
            		break;

            	// Allocates Ace to be low, 1
            	case('A'): 
            		cardValue = 1;
            		break;
            };

            // Creates card object with face value, suit and points
            let newCard = { 'Face value': cardValues[i], 'Card suit': cardSuits[x], 'Card points': cardValue };

            // Adds object to deck array
            deck.push(newCard);
        }
    }
};

// Empty deck array to have the deck shuffled and pushed too.

let shuffledDeck = [];

// Function to shuffle the deck

let deckShuffle = deck => {
	// For loop cycles through every card object
	for ( let i = 0; i < 52; i++) {
		// Creates random number to use as index based on the number of cards in unshuffled deck
		let randomIndex = Math.floor(Math.random() * deck.length);
		// Adds card object at random index to the back of a new array
		shuffledDeck.push(deck[randomIndex]);
		// Removes the card from the unshuffled deck
		deck.splice(randomIndex, 1);
  }
};


// Player object with array for card objects and running total.

let player = {
	cards : [],
	total: 0
}

// Dealer object

let dealer = {
    cards : [],
    total: 0
};

let gameOver = false;

// Pulls out card from end of shuffled deck

function dealCardFromDeck() {
  return shuffledDeck.shift();
};


function checkIfBust() {
	if (player.total > 21) {
		console.log('You went bust! Dealer wins!');
    	gameOver = true;
    	
	};
};

// Hits card to add to player/ dealer object

let hit = (playerObject) => {
	if (!gameOver) {

		// Pulls card
		let pulledCard = dealCardFromDeck();

	  	// Adds card object to players cards array
	  	playerObject.cards.push(pulledCard);

	  	// Updates players total score
	  	playerObject.total = playerObject.total += pulledCard['Card points'];
      	

	  	// Prints player score 
	  	playerScoreText.innerHTML = 'Your score : ' + player.total;
  		dealerScoreText.innerHTML = 'Dealers score : ' + dealer.total;

	  	// Checks if player has gone bust
      checkIfBust()
	  };
};

function checkWinner() {
	if (player.total === 21) {
		console.log('You win with a Blackjack!');
		gameOver = true;
	}
	else if (player.total > 21) {
		console.log('You went bust!');
		gameOver = true;
	}
	else if (player.total <= 21 && player.cards.length === 5) {
		console.log('YOU WIN WITH A FIVE CARD TRICK!')
	}
	else if (dealer.total === 21) {
		console.log('Dealer wins with a Blackjack');
		gameOver = true;
	}
	else if (dealer.total > 21) {
		console.log('Dealer went bust, you win!');
		gameOver = true;
	}
  	else if (dealer.total >= player.total) {
    	console.log('Dealer has a higher score, you lose');
    	gameOver = true;
  	}
  	else if (dealer.total < player.total) {
    	console.log('You beat the dealer with a higher score!');
    	gameOver = true;
    }
    newGameButton.style.display = 'block';
};


function stand() {
	if (!gameOver) {
	    while (dealer.total < 17) {
	        hit(dealer);
	    }
	    checkWinner();
	};
    
};






newGameButton.addEventListener('click', function() {

  hitButton.style.display = 'inline';
  standButton.style.display = 'inline';
  newGameButton.style.display = 'none';

  newCardDeck();
  deckShuffle(deck);

  hit(player);
  hit(player);

  playerScoreText.style.display = 'block';
  dealerScoreText.style.display = 'block';

});

hitButton.addEventListener('click', hit(player));




standButton.addEventListener('click', stand());





































































































