import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {test:123};
//   };
//   doSomthing = () => {console.log("Something")};
//   render(props) {
//     return (
//       <h2>Hello ! {this.state.test}</h2>
//     );
//   }
// }

// ReactDOM.render(
//   <Test />,
//   document.getElementById('root')
// );

/*function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName : "Ron", 
  lastName : "Todosichuk"
};

const element = (
  <h1>
    Hello, {formatName(user)}
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);*/

//**************************************************
//Static deck of cards object from https://deckofcardsapi.cpm
// Postman calls:
// https://deckofcardsapi.com/api/deck/new/
// https://deckofcardsapi.com/api/deck/ztswbdiel414/draw/?count=52
//**************************************************
const cards = [  
    {
      "code": "AS",
      "image": "http://deckofcardsapi.com/static/img/AS.png",
      "suit": "SPADES",
      "value": "ACE",
      "cardValue": "1",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/AS.png",
        "svg": "http://deckofcardsapi.com/static/img/AS.svg"
      }
    },
    {
      "code": "2S",
      "image": "http://deckofcardsapi.com/static/img/2S.png",
      "suit": "SPADES",
      "value": "2",
      "cardValue": "2",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/2S.png",
        "svg": "http://deckofcardsapi.com/static/img/2S.svg"
      }
    },
    {
      "code": "3S",
      "image": "http://deckofcardsapi.com/static/img/3S.png",
      "suit": "SPADES",
      "value": "3",
      "cardValue": "3",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/3S.png",
        "svg": "http://deckofcardsapi.com/static/img/3S.svg"
      }
    },
    {
      "code": "4S",
      "image": "http://deckofcardsapi.com/static/img/4S.png",
      "suit": "SPADES",
      "value": "4",
      "cardValue": "4",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/4S.png",
        "svg": "http://deckofcardsapi.com/static/img/4S.svg"
      }
    },
    {
      "code": "5S",
      "image": "http://deckofcardsapi.com/static/img/5S.png",
      "suit": "SPADES",
      "value": "5",
      "cardValue": "5",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/5S.png",
        "svg": "http://deckofcardsapi.com/static/img/5S.svg"
      }
    },
    {
      "code": "6S",
      "image": "http://deckofcardsapi.com/static/img/6S.png",
      "suit": "SPADES",
      "value": "6",
      "cardValue": "6",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/6S.png",
        "svg": "http://deckofcardsapi.com/static/img/6S.svg"
      }
    },
    {
      "code": "7S",
      "image": "http://deckofcardsapi.com/static/img/7S.png",
      "suit": "SPADES",
      "value": "7",
      "cardValue": "7",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/7S.png",
        "svg": "http://deckofcardsapi.com/static/img/7S.svg"
      }
    },
    {
      "code": "8S",
      "image": "http://deckofcardsapi.com/static/img/8S.png",
      "suit": "SPADES",
      "value": "8",
      "cardValue": "8",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/8S.png",
        "svg": "http://deckofcardsapi.com/static/img/8S.svg"
      }
    },
    {
      "code": "9S",
      "image": "http://deckofcardsapi.com/static/img/9S.png",
      "suit": "SPADES",
      "value": "9",
      "cardValue": "9",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/9S.png",
        "svg": "http://deckofcardsapi.com/static/img/9S.svg"
      }
    },
    {
      "code": "0S",
      "image": "http://deckofcardsapi.com/static/img/0S.png",
      "suit": "SPADES",
      "value": "10",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/0S.png",
        "svg": "http://deckofcardsapi.com/static/img/0S.svg"
      }
    },
    {
      "code": "JS",
      "image": "http://deckofcardsapi.com/static/img/JS.png",
      "suit": "SPADES",
      "value": "JACK",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/JS.png",
        "svg": "http://deckofcardsapi.com/static/img/JS.svg"
      }
    },
    {
      "code": "QS",
      "image": "http://deckofcardsapi.com/static/img/QS.png",
      "suit": "SPADES",
      "value": "QUEEN",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/QS.png",
        "svg": "http://deckofcardsapi.com/static/img/QS.svg"
      }
    },
    {
      "code": "KS",
      "image": "http://deckofcardsapi.com/static/img/KS.png",
      "suit": "SPADES",
      "value": "KING",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/KS.png",
        "svg": "http://deckofcardsapi.com/static/img/KS.svg"
      }
    },
    {
      "code": "AD",
      "image": "http://deckofcardsapi.com/static/img/aceDiamonds.png",
      "suit": "DIAMONDS",
      "value": "ACE",
      "cardValue": "1",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/AD.png",
        "svg": "http://deckofcardsapi.com/static/img/AD.svg"
      }
    },
    {
      "code": "2D",
      "image": "http://deckofcardsapi.com/static/img/2D.png",
      "suit": "DIAMONDS",
      "value": "2",
      "cardValue": "2",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/2D.png",
        "svg": "http://deckofcardsapi.com/static/img/2D.svg"
      }
    },
    {
      "code": "3D",
      "image": "http://deckofcardsapi.com/static/img/3D.png",
      "suit": "DIAMONDS",
      "value": "3",
      "cardValue": "3",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/3D.png",
        "svg": "http://deckofcardsapi.com/static/img/3D.svg"
      }
    },
    {
      "code": "4D",
      "image": "http://deckofcardsapi.com/static/img/4D.png",
      "suit": "DIAMONDS",
      "value": "4",
      "cardValue": "4",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/4D.png",
        "svg": "http://deckofcardsapi.com/static/img/4D.svg"
      }
    },
    {
      "code": "5D",
      "image": "http://deckofcardsapi.com/static/img/5D.png",
      "suit": "DIAMONDS",
      "value": "5",
      "cardValue": "5",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/5D.png",
        "svg": "http://deckofcardsapi.com/static/img/5D.svg"
      }
    },
    {
      "code": "6D",
      "image": "http://deckofcardsapi.com/static/img/6D.png",
      "suit": "DIAMONDS",
      "value": "6",
      "cardValue": "6",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/6D.png",
        "svg": "http://deckofcardsapi.com/static/img/6D.svg"
      }
    },
    {
      "code": "7D",
      "image": "http://deckofcardsapi.com/static/img/7D.png",
      "suit": "DIAMONDS",
      "value": "7",
      "cardValue": "7",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/7D.png",
        "svg": "http://deckofcardsapi.com/static/img/7D.svg"
      }
    },
    {
      "code": "8D",
      "image": "http://deckofcardsapi.com/static/img/8D.png",
      "suit": "DIAMONDS",
      "value": "8",
      "cardValue": "8",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/8D.png",
        "svg": "http://deckofcardsapi.com/static/img/8D.svg"
      }
    },
    {
      "code": "9D",
      "image": "http://deckofcardsapi.com/static/img/9D.png",
      "suit": "DIAMONDS",
      "value": "9",
      "cardValue": "9",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/9D.png",
        "svg": "http://deckofcardsapi.com/static/img/9D.svg"
      }
    },
    {
      "code": "0D",
      "image": "http://deckofcardsapi.com/static/img/0D.png",
      "suit": "DIAMONDS",
      "value": "10",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/0D.png",
        "svg": "http://deckofcardsapi.com/static/img/0D.svg"
      }
    },
    {
      "code": "JD",
      "image": "http://deckofcardsapi.com/static/img/JD.png",
      "suit": "DIAMONDS",
      "value": "JACK",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/JD.png",
        "svg": "http://deckofcardsapi.com/static/img/JD.svg"
      }
    },
    {
      "code": "QD",
      "image": "http://deckofcardsapi.com/static/img/QD.png",
      "suit": "DIAMONDS",
      "value": "QUEEN",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/QD.png",
        "svg": "http://deckofcardsapi.com/static/img/QD.svg"
      }
    },
    {
      "code": "KD",
      "image": "http://deckofcardsapi.com/static/img/KD.png",
      "suit": "DIAMONDS",
      "value": "KING",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/KD.png",
        "svg": "http://deckofcardsapi.com/static/img/KD.svg"
      }
    },
    {
      "code": "AC",
      "image": "http://deckofcardsapi.com/static/img/AC.png",
      "suit": "CLUBS",
      "value": "ACE",
      "cardValue": "1",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/AC.png",
        "svg": "http://deckofcardsapi.com/static/img/AC.svg"
      }
    },
    {
      "code": "2C",
      "image": "http://deckofcardsapi.com/static/img/2C.png",
      "suit": "CLUBS",
      "value": "2",
      "cardValue": "2",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/2C.png",
        "svg": "http://deckofcardsapi.com/static/img/2C.svg"
      }
    },
    {
      "code": "3C",
      "image": "http://deckofcardsapi.com/static/img/3C.png",
      "suit": "CLUBS",
      "value": "3",
      "cardValue": "3",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/3C.png",
        "svg": "http://deckofcardsapi.com/static/img/3C.svg"
      }
    },
    {
      "code": "4C",
      "image": "http://deckofcardsapi.com/static/img/4C.png",
      "suit": "CLUBS",
      "value": "4",
      "cardValue": "4",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/4C.png",
        "svg": "http://deckofcardsapi.com/static/img/4C.svg"
      }
    },
    {
      "code": "5C",
      "image": "http://deckofcardsapi.com/static/img/5C.png",
      "suit": "CLUBS",
      "value": "5",
      "cardValue": "5",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/5C.png",
        "svg": "http://deckofcardsapi.com/static/img/5C.svg"
      }
    },
    {
      "code": "6C",
      "image": "http://deckofcardsapi.com/static/img/6C.png",
      "suit": "CLUBS",
      "value": "6",
      "cardValue": "6",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/6C.png",
        "svg": "http://deckofcardsapi.com/static/img/6C.svg"
      }
    },
    {
      "code": "7C",
      "image": "http://deckofcardsapi.com/static/img/7C.png",
      "suit": "CLUBS",
      "value": "7",
      "cardValue": "7",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/7C.png",
        "svg": "http://deckofcardsapi.com/static/img/7C.svg"
      }
    },
    {
      "code": "8C",
      "image": "http://deckofcardsapi.com/static/img/8C.png",
      "suit": "CLUBS",
      "value": "8",
      "cardValue": "8",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/8C.png",
        "svg": "http://deckofcardsapi.com/static/img/8C.svg"
      }
    },
    {
      "code": "9C",
      "image": "http://deckofcardsapi.com/static/img/9C.png",
      "suit": "CLUBS",
      "value": "9",
      "cardValue": "9",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/9C.png",
        "svg": "http://deckofcardsapi.com/static/img/9C.svg"
      }
    },
    {
      "code": "0C",
      "image": "http://deckofcardsapi.com/static/img/0C.png",
      "suit": "CLUBS",
      "value": "10",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/0C.png",
        "svg": "http://deckofcardsapi.com/static/img/0C.svg"
      }
    },
    {
      "code": "JC",
      "image": "http://deckofcardsapi.com/static/img/JC.png",
      "suit": "CLUBS",
      "value": "JACK",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/JC.png",
        "svg": "http://deckofcardsapi.com/static/img/JC.svg"
      }
    },
    {
      "code": "QC",
      "image": "http://deckofcardsapi.com/static/img/QC.png",
      "suit": "CLUBS",
      "value": "QUEEN",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/QC.png",
        "svg": "http://deckofcardsapi.com/static/img/QC.svg"
      }
    },
    {
      "code": "KC",
      "image": "http://deckofcardsapi.com/static/img/KC.png",
      "suit": "CLUBS",
      "value": "KING",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/KC.png",
        "svg": "http://deckofcardsapi.com/static/img/KC.svg"
      }
    },
    {
      "code": "AH",
      "image": "http://deckofcardsapi.com/static/img/AH.png",
      "suit": "HEARTS",
      "value": "ACE",
      "cardValue": "1",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/AH.png",
        "svg": "http://deckofcardsapi.com/static/img/AH.svg"
      }
    },
    {
      "code": "2H",
      "image": "http://deckofcardsapi.com/static/img/2H.png",
      "suit": "HEARTS",
      "value": "2",
      "cardValue": "2",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/2H.png",
        "svg": "http://deckofcardsapi.com/static/img/2H.svg"
      }
    },
    {
      "code": "3H",
      "image": "http://deckofcardsapi.com/static/img/3H.png",
      "suit": "HEARTS",
      "value": "3",
      "cardValue": "3",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/3H.png",
        "svg": "http://deckofcardsapi.com/static/img/3H.svg"
      }
    },
    {
      "code": "4H",
      "image": "http://deckofcardsapi.com/static/img/4H.png",
      "suit": "HEARTS",
      "value": "4",
      "cardValue": "4",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/4H.png",
        "svg": "http://deckofcardsapi.com/static/img/4H.svg"
      }
    },
    {
      "code": "5H",
      "image": "http://deckofcardsapi.com/static/img/5H.png",
      "suit": "HEARTS",
      "value": "5",
      "cardValue": "5",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/5H.png",
        "svg": "http://deckofcardsapi.com/static/img/5H.svg"
      }
    },
    {
      "code": "6H",
      "image": "http://deckofcardsapi.com/static/img/6H.png",
      "suit": "HEARTS",
      "value": "6",
      "cardValue": "6",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/6H.png",
        "svg": "http://deckofcardsapi.com/static/img/6H.svg"
      }
    },
    {
      "code": "7H",
      "image": "http://deckofcardsapi.com/static/img/7H.png",
      "suit": "HEARTS",
      "value": "7",
      "cardValue": "7",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/7H.png",
        "svg": "http://deckofcardsapi.com/static/img/7H.svg"
      }
    },
    {
      "code": "8H",
      "image": "http://deckofcardsapi.com/static/img/8H.png",
      "suit": "HEARTS",
      "value": "8",
      "cardValue": "8",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/8H.png",
        "svg": "http://deckofcardsapi.com/static/img/8H.svg"
      }
    },
    {
      "code": "9H",
      "image": "http://deckofcardsapi.com/static/img/9H.png",
      "suit": "HEARTS",
      "value": "9",
      "cardValue": "9",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/9H.png",
        "svg": "http://deckofcardsapi.com/static/img/9H.svg"
      }
    },
    {
      "code": "0H",
      "image": "http://deckofcardsapi.com/static/img/0H.png",
      "suit": "HEARTS",
      "value": "10",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/0H.png",
        "svg": "http://deckofcardsapi.com/static/img/0H.svg"
      }
    },
    {
      "code": "JH",
      "image": "http://deckofcardsapi.com/static/img/JH.png",
      "suit": "HEARTS",
      "value": "JACK",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/JH.png",
        "svg": "http://deckofcardsapi.com/static/img/JH.svg"
      }
    },
    {
      "code": "QH",
      "image": "http://deckofcardsapi.com/static/img/QH.png",
      "suit": "HEARTS",
      "cardValue": "10",
      "value": "QUEEN",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/QH.png",
        "svg": "http://deckofcardsapi.com/static/img/QH.svg"
      }
    },
    {
      "code": "KH",
      "image": "http://deckofcardsapi.com/static/img/KH.png",
      "suit": "HEARTS",
      "value": "KING",
      "cardValue": "10",
      "images": {
        "png": "http://deckofcardsapi.com/static/img/KH.png",
        "svg": "http://deckofcardsapi.com/static/img/KH.svg"
      }
    },
];

//**************************************************
//Game Functions 
//**************************************************
function shuffle(a) {
  var k, t, j, i=a.length, rand=Math.random;

  // For each element in the array, swap it with a random
  // element (which might be itself)
  while (i--) {
    k = rand()*(i+1)|0;
    t = a[k];
    a[k]=a[i];
    a[i]=t;
  }
  return a;
}

//**************************************************
//React CardList component 
// Holds the total can cards for the dealer and player
//**************************************************
const CardList = (props) => {
  
  const displayTotal = (total, totalAlt) => {
    return (total !== totalAlt && totalAlt <= 21) 
      ? total + "/" + totalAlt 
      : total.toString();
  }
  
  return (
    <div style={{height: 275}}>
      <div className="mid">
        <span className="numDisplay">
          {props.cardDisplay + " " + displayTotal(props.cardTotal, props.cardTotalAlt)}
        </span>  
      </div>
      <div className="mid">
        {props.cards.map(card => <img src={card.images.png} height="200px" />)}
      </div>
    </div>
  );
};

//**************************************************
//React GameMessage component 
// Displays the final messages like: 
//    Player Wins!!!
//    Push
//    Player Busts!!!
//**************************************************
const GameMessage = (props) => {
  return ( 
    <div className="backdrop">
      <p onClick={() => props.resetClicked()}>{props.msg}</p>
    </div>
  );          
};

//**************************************************
//React Controls component 
// Displays the main buttons used in the game 
//**************************************************       
const Controls = (props) => {       
  const buttonVisible = (checkVal) => {
    return (props.isPlaying === checkVal) ? "hide" : "";
  };
          
  const isDisabled = () => {
    return props.isPlaying ? "Disabled" : "";    
  };
  
  const isDealDisabled = () => {
    return props.bet === 0 ? "Disabled" : "";
  };

  return (
    <div>
      <div className="mid">
        <span className="numDisplay">Bet: {props.bet}</span>
      </div>
      <div className="mid">
        <span>
          <button onClick={() => props.makeBet(1)} 
            className={"bet" + isDisabled()} disabled={props.isPlaying}>1</button>
          <button onClick={() => props.makeBet(5)} 
            className={"bet" + isDisabled() + " bet5"} disabled={props.isPlaying}>5</button>
          <button onClick={() => props.makeBet(10)} 
            className={"bet" + isDisabled() + " bet10"} disabled={props.isPlaying}>10</button>
        </span>
         <span style={{paddingLeft: 40}}>
           <button className={"btn" + isDealDisabled() + " " + buttonVisible(true)} 
             onClick={() => props.dealClicked()}>Deal</button>
           <button className={"btn " + buttonVisible(false)} 
             onClick={() => props.hitClicked()}>Hit</button>
           <button className={"btn " + buttonVisible(false)}
             onClick={() => props.stayClicked()}>Stay</button>
           <button className={"btn " + buttonVisible(true)} 
             onClick={() => props.clearBet()}>Clear</button>
         </span>
        <div style={{marginTop: 30}}>
          <span className="totalDisplay">Chips:{props.chips}</span>
        </div>
      </div>
    </div>
  );
};

//**************************************************
//React Main Game Component 
// Displays the game 
//**************************************************       
class Game extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      dealerTotal: 0,
      dealerTotalAlt: 0,
      dealerCards: [],
      playerTotal: 0,
      playerTotalAlt: 0,
      playerCards: [],
      bet: 0,
      chips: 1000,
      isPlaying: false,
      gameMsg: null
    };
  }
  
  // if less then 10 cards left suffle a new deck
  checkDeck = (deck) => {
    return (this.state.deck.length < 10) ? deck.concat(shuffle(cards)) : deck;
  };
  
  calcCards = () => {
    this.setState({
       dealerTotal: this.calcCardTotal(this.state.dealerCards, false),
       dealerTotalAlt: this.calcCardTotal(this.state.dealerCards, true),
       playerTotal: this.calcCardTotal(this.state.playerCards, false),
       playerTotalAlt: this.calcCardTotal(this.state.playerCards, true),
    });
  };
                  
  calcCardTotal = (cards, eleven) => {
     let sum = Object.keys(cards).reduce(function(total, card) {
        let cardVal = Number(cards[card].cardValue);
        cardVal = (cardVal == 1 && eleven) ? 11 : cardVal;
        return Number(total) + cardVal;
    }, 0);
    return sum;
  };
  
  drawCards = (deck, playerCards, numberOfCards) => {
    var i;
    for (i = 1; i <= numberOfCards; i++) {
      let card = deck.pop();
      playerCards.push(card);
    }
    return playerCards;
  };
          
  //check if player bust
  checkForBust = () => {
   let t1, t2, min, status = "";
   t1 = this.calcCardTotal(this.state.playerCards, false);
   t2 = this.calcCardTotal(this.state.playerCards, true);
   min = Math.min(t1, t2);
   if (min > 21) {
     status = "Player Bust!!!";
   }
   
   this.setState({
     gameMsg: status
   });
 };

  makeBet = (betVal) => {
    this.setState(prevState => ({
      bet: prevState.bet + betVal,
      chips: prevState.chips - betVal
    }));
  };
        
  clearBet = () => {
    this.setState(prevState => ({
      bet: 0,
      chips: prevState.chips + prevState.bet
    }));
  };
          
  // Deal Cards         
  dealClicked = () => {
    let deck = this.checkDeck(this.state.deck);
    let dealerCards = this.state.dealerCards;
    let playerCards = this.state.playerCards;
    
    if (this.state.bet === 0) return;
    
    this.drawCards(deck, dealerCards, 2);
    this.drawCards(deck, playerCards, 2);
 
    this.setState(prevState => ({
      deck: deck,
      dealerCards: dealerCards,
      playerCards: playerCards,
      isPlaying: true  
    }), this.calcCards());
  };
       
  hitClicked = () => {
    let deck = this.checkDeck(this.state.deck);
    let playerCards = this.state.playerCards
    this.drawCards(deck, playerCards, 1);
    
    this.setState(prevState => ({
      playerCards: playerCards,
      deck: deck,
    }), this.calcCards(), this.checkForBust());
  };
  
  checkDealerStatus = (dealerCards, playerTotal) => {
    let t1, t2, status = "";
    
    t1 = this.calcCardTotal(dealerCards, false);
    t2 = this.calcCardTotal(dealerCards, true);    
    
    if (Math.min(t1, t2) > 21) {
      status = "Player Wins!!!";
    }
    else if ((t1 <= 21 && t1 == playerTotal) || (t2 <= 21 && t2 == playerTotal)) {
      status = "Push";
    }
    else if ((t1 <= 21 && t1 > playerTotal) || (t2 <= 21 && t2 > playerTotal)) {
      status = "Dealer wins!!!";
    }
     
    return status;
  };
          
  stayClicked = () => {
    //Draw dealer cards until value equals or is higher then user.
    let playerTotal = Math.max(this.state.playerTotal, this.state.playerTotalAlt);
    if (playerTotal > 21)
      playerTotal = Math.min(this.state.playerTotal, this.state.playerTotalAlt);    
    let deck = this.checkDeck(this.state.deck);
    let dealerCards = this.state.dealerCards;
    let status = this.checkDealerStatus(dealerCards, playerTotal);
    
    if (status == "") {
        do {
          this.drawCards(deck, dealerCards, 1);
          status = this.checkDealerStatus(dealerCards, playerTotal);  
        }
        while(status == "");
    }
    
    this.setState(prevState => ({
      deck: deck,
      dealerCards: dealerCards,
      gameMsg: status,
    }), this.calcCards());
  };
  
  resetGame = () => {
    let chips = this.state.chips;
    let bet = this.state.bet;
    
    //Calculate chips
    if (this.state.gameMsg === "Push") {
      chips = chips + bet;
    }
    else if (this.state.gameMsg === "Player Wins!!!") {
      chips = chips + (bet * 2);
    }
    
    this.setState({
      deck: [],
      dealerTotal: 0,
      dealerTotalAlt: 0,
      dealerCards: [],
      playerTotal: 0,
      playerTotalAlt: 0,
      playerCards: [],
      isPlaying: false,
      bet: 0,
      chips: chips,
      gameMsg: null
    });
  };
          
  render() {
    return (
      <div>
          <CardList cardDisplay="Dealer:"
            cardTotal={this.state.dealerTotal}
            cardTotalAlt={this.state.dealerTotalAlt}
            cards={this.state.dealerCards} />
          <CardList cardDisplay="Player:"
            cardTotal={this.state.playerTotal}
            cardTotalAlt={this.state.playerTotalAlt}
            cards={this.state.playerCards} />
          <Controls 
            bet={this.state.bet} 
            chips={this.state.chips}
            isPlaying={this.state.isPlaying}
            makeBet={this.makeBet}
            dealClicked={this.dealClicked}
            hitClicked={this.hitClicked}
            stayClicked={this.stayClicked}
            clearBet={this.clearBet} 
            />
           {this.state.gameMsg ? 
          <GameMessage msg={this.state.gameMsg} resetClicked={this.resetGame} />
          : false}
      </div>
    );
  };
}
        
ReactDOM.render(
  <Game />,
  document.getElementById("root")
);