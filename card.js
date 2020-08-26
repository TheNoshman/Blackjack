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
let playerCardImage1 = document.getElementById('player-card1');
let playerCardImage2 = document.getElementById('player-card2');
let playerCardImage3 = document.getElementById('player-card3');
let playerCardImage4 = document.getElementById('player-card4');
let playerCardImage5 = document.getElementById('player-card5');

let dealerCardImage1 = document.getElementById('dealer-card1');
let dealerCardImage2 = document.getElementById('dealer-card2');
let dealerCardImage3 = document.getElementById('dealer-card3');
let dealerCardImage4 = document.getElementById('dealer-card4');
let dealerCardImage5 = document.getElementById('dealer-card5');

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
	total: 0,
	hitCounter: 0,
	name: 'player'
}

// Dealer object

let dealer = {
    cards : [],
    total: 0,
    hitCounter: 0,
    name: 'dealer'
};

let gameOver = false;

// Pulls out card from end of shuffled deck

function dealCardFromDeck() {
  return shuffledDeck.shift();
};

let hit = (playerObject) => {
  if (!gameOver) {

    playerObject.hitCounter++;
    // Pulls card
    let pulledCard = dealCardFromDeck();

      // Adds card object to players cards array
      playerObject.cards.push(pulledCard);

      // Empty variable to assign DOM card element to
      let cardToFlip;

      // Works out which DOM card image needs to be flipped
      if (playerObject.name === 'player') {
        switch (playerObject.hitCounter) {
        case 1:
          cardToFlip = playerCardImage1;
          break;
        case 2:
          cardToFlip = playerCardImage2;
          break;
        case 3:
          cardToFlip = playerCardImage3;
          break;
        case 4:
          cardToFlip = playerCardImage4;
          break;
        case 5:
          cardToFlip = playerCardImage5;
          break;
        };
      };

      if (playerObject.name === 'dealer') {
        switch (playerObject.hitCounter) {
        case 1:
          cardToFlip = dealerCardImage1;
          break;
        case 2:
          cardToFlip = dealerCardImage2;
          break;
        case 3:
          cardToFlip = dealerCardImage3;
          break;
        case 4:
          cardToFlip = dealerCardImage4;
          break;
        case 5:
          cardToFlip = dealerCardImage5;
          break;
      };
     };

     // Empty variable to assign card image to
     let pictureToFlip;

     // Aces

     if (pulledCard['Face value'] === 'A' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/AS.jpg';
     }
     if (pulledCard['Face value'] === 'A' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/AH.jpg';
     }
     if (pulledCard['Face value'] === 'A' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/AD.jpg';
     }
     if (pulledCard['Face value'] === 'A' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/AC.jpg';
     }

     // 2's

     if (pulledCard['Face value'] === '2' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/2S.jpg';
     }
     if (pulledCard['Face value'] === '2' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/2H.jpg';
     }
     if (pulledCard['Face value'] === '2' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/2D.jpg';
     }
     if (pulledCard['Face value'] === '2' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/2C.jpg';
     }

     // 3's

     if (pulledCard['Face value'] === '3' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/3S.jpg';
     }
     if (pulledCard['Face value'] === '3' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/3H.jpg';
     }
     if (pulledCard['Face value'] === '3' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/3D.jpg';
     }
     if (pulledCard['Face value'] === '3' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/3C.jpg';
     }

     // 4's

     if (pulledCard['Face value'] === '4' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/4S.jpg';
     }
     if (pulledCard['Face value'] === '4' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/4H.jpg';
     }
     if (pulledCard['Face value'] === '4' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/4D.jpg';
     }
     if (pulledCard['Face value'] === '4' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/4C.jpg';
     }

     // 5's

     if (pulledCard['Face value'] === '5' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/5S.jpg';
     }
     if (pulledCard['Face value'] === '5' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/5H.jpg';
     }
     if (pulledCard['Face value'] === '5' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/5D.jpg';
     }
     if (pulledCard['Face value'] === '5' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/5C.jpg';
     }

     // 6's

     if (pulledCard['Face value'] === '6' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/6S.jpg';
     }
     if (pulledCard['Face value'] === '6' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/6H.jpg';
     }
     if (pulledCard['Face value'] === '6' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/6D.jpg';
     }
     if (pulledCard['Face value'] === '6' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/6C.jpg';
     }

     // 7's

     if (pulledCard['Face value'] === '7' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/7S.jpg';
     }
     if (pulledCard['Face value'] === '7' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/7H.jpg';
     }
     if (pulledCard['Face value'] === '7' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/7D.jpg';
     }
     if (pulledCard['Face value'] === '7' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/7C.jpg';
     }

     // 8's

     if (pulledCard['Face value'] === '8' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/8S.jpg';
     }
     if (pulledCard['Face value'] === '8' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/8H.jpg';
     }
     if (pulledCard['Face value'] === '8' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/8D.jpg';
     }
     if (pulledCard['Face value'] === '8' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/8C.jpg';
     }

     // 9's

     if (pulledCard['Face value'] === '9' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/9S.jpg';
     }
     if (pulledCard['Face value'] === '9' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/9H.jpg';
     }
     if (pulledCard['Face value'] === '9' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/9D.jpg';
     }
     if (pulledCard['Face value'] === '9' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/9C.jpg';
     }

     // 10's

     if (pulledCard['Face value'] === '10' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/10S.jpg';
     }
     if (pulledCard['Face value'] === '10' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/10H.jpg';
     }
     if (pulledCard['Face value'] === '10' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/10D.jpg';
     }
     if (pulledCard['Face value'] === '10' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/10C.jpg';
     }

     // Jacks

     if (pulledCard['Face value'] === 'J' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/JS.jpg';
     }
     if (pulledCard['Face value'] === 'J' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/JH.jpg';
     }
     if (pulledCard['Face value'] === 'J' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/JD.jpg';
     }
     if (pulledCard['Face value'] === 'J' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/JC.jpg';
     }

     // Queen's

     if (pulledCard['Face value'] === 'Q' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/QS.jpg';
     }
     if (pulledCard['Face value'] === 'Q' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/QH.jpg';
     }
     if (pulledCard['Face value'] === 'Q' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/QD.jpg';
     }
     if (pulledCard['Face value'] === 'Q' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/QC.jpg';
     }

     // Kings's

     if (pulledCard['Face value'] === 'K' && pulledCard['Card suit'] === 'Spades') {
      pictureToFlip = './card_images/KS.jpg';
     }
     if (pulledCard['Face value'] === 'K' && pulledCard['Card suit'] === 'Hearts') {
      pictureToFlip = './card_images/KH.jpg';
     }
     if (pulledCard['Face value'] === 'K' && pulledCard['Card suit'] === 'Diamonds') {
      pictureToFlip = './card_images/KD.jpg';
     }
     if (pulledCard['Face value'] === 'K' && pulledCard['Card suit'] === 'Clubs') {
      pictureToFlip = './card_images/KC.jpg';
     }


      // Takes DOM card element and replaces it with picture card
      cardToFlip.src = pictureToFlip;

      // Updates players total score
      playerObject.total = playerObject.total += pulledCard['Card points'];
        

      // Prints player score 
      playerScoreText.innerHTML = 'Your score : ' + player.total;
      dealerScoreText.innerHTML = 'Dealers score : ' + dealer.total;

      // Checks if player has gone bust
        checkIfBust()
    };
};



function checkIfBust() {
	if (player.total <= 21 && player.cards.length === 5) {
		playerScoreText.innerHTML = 'You win with a five card trick!';
  		dealerScoreText.style.display = 'Dealers score : ' + dealer.total;
  		gameOver = true;
  		newGameButton.style.display = 'inline';
  		hitButton.style.display = 'none';
		standButton.style.display = 'none';
	}
	else if (player.total > 21) {
		playerScoreText.innerHTML = 'You went bust! Dealer wins';
  		dealerScoreText.style.display = 'Dealers score : ' + dealer.total;
  		newGameButton.style.display = 'inline';
  		hitButton.style.display = 'none';
		standButton.style.display = 'none';
    	gameOver = true;
    	
	};
};

// Hits card to add to player/ dealer object



function checkWinner() {
	if (player.total === 21) {
		playerScoreText.innerHTML = 'You win with a Blackjack!';
  		dealerScoreText.style.display = 'Dealers score : ' + dealer.total;
		gameOver = true;
	}
	else if (player.total > 21) {
		playerScoreText.innerHTML = 'You went bust!';
  		dealerScoreText.style.display = 'Dealers score : ' + dealer.total;
		gameOver = true;
	}
	else if (player.total <= 21 && player.cards.length === 5) {
		playerScoreText.innerHTML = 'You win with a five card trick!';
  		dealerScoreText.style.display = 'Dealers score : ' + dealer.total;
  		gameOver = true;
	}
	else if (dealer.total > 21) {
		playerScoreText.innerHTML = 'Dealer went bust, you win!';
  		dealerScoreText.style.display = 'Dealers score : ' + dealer.total;
		gameOver = true;
	}
  	else if (dealer.total >= player.total) {
    	playerScoreText.innerHTML = 'Dealer wins with a higher score!';
  		dealerScoreText.style.display = 'Dealers score : ' + dealer.total;
    	gameOver = true;
  	}
  	else if (dealer.total < player.total) {
    	playerScoreText.innerHTML = 'You beat the dealer with a higher score!';
  		dealerScoreText.style.display = 'Dealers score : ' + dealer.total;
    	gameOver = true;
    }
    hitButton.style.display = 'none';
	standButton.style.display = 'none';
    newGameButton.style.display = 'inline';
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

  gameOver = false;
  hitButton.style.display = 'inline';
  standButton.style.display = 'inline';
  newGameButton.style.display = 'none';

  player.hitCounter = 0;
  dealer.hitCounter = 0;
  player.cards = [];
  player.total = 0;
  dealer.cards = [];
  dealer.total = 0;

  playerCardImage1.src='./card_images/reverse.jpg'
  playerCardImage2.src='./card_images/reverse.jpg'
  playerCardImage3.src='./card_images/reverse.jpg'
  playerCardImage4.src='./card_images/reverse.jpg'
  playerCardImage5.src='./card_images/reverse.jpg'

  dealerCardImage1.src='./card_images/reverse.jpg'
  dealerCardImage2.src='./card_images/reverse.jpg'
  dealerCardImage3.src='./card_images/reverse.jpg'
  dealerCardImage4.src='./card_images/reverse.jpg'
  dealerCardImage5.src='./card_images/reverse.jpg'



  newCardDeck();
  deckShuffle(deck);

  hit(player);
  hit(player);

  playerScoreText.style.display = 'block';
  dealerScoreText.style.display = 'block';

});


hitButton.addEventListener('click', () => hit(player));
standButton.addEventListener('click', () => stand());



































































































