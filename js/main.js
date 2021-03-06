//variables

var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];

var cardsInPlay = [];

var deck = document.getElementById("game-board");


//functions

function checkForMatch() {
    if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
    };
};


function flipCard() {
    const cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();

    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
            } else {
                alert("Sorry, try again.");
            }
        };    
};

function createBoard () {
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement('img');
            cardElement.setAttribute('src', "images/back.png");
            cardElement.setAttribute('data-id', i);
            cardElement.addEventListener('click', flipCard);
            document.getElementById('game-board').appendChild(cardElement);
    }
};

function shuffle(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
      }
      return cards;
};


//calling functions
    createBoard();
    shuffle(cards);

