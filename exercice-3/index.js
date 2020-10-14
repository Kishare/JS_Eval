'use strict';

var xWins = 0;
var oWins = 0;
var turnNumber = 0;

/**
 * Represents a morpion game.
 * @constructor
 */

var MyMorpionXO = function MyMorpionXO(){
}

/**
 * Creates board game and displays it.
 */

MyMorpionXO.prototype.game = function(){
    var body = document.querySelector('body');
    var board = document.createElement('table');
    board.style.border = '2px solid black'
    for(var i = 1; i <= 3; i++){
        var board_row = document.createElement('tr');
        for(var j = 1; j <= 3; j++){   
            var board_case = document.createElement('td');
            board_case.setAttribute('class', 'board-case');
            board_case.style.border = '2px solid red';
            board_case.style.width = '50px';
            board_case.style.height = '50px';
            board_case.style.textAlign = 'center';
            board_row.appendChild(board_case);
        }board.appendChild(board_row);
    }body.appendChild(board);

    var cases = document.querySelectorAll('.board-case');
    cases.forEach(el => el.addEventListener ('click', event =>{
        if(turnNumber % 2 == 0){
           if(!el.textContent) el.textContent = 'X';
        }else{
           if(!el.textContent) el.textContent = 'O';
        }
        turnNumber++;
        this.isWon();
    }));
   
}

/**
 * Check if a round is won.
 */

MyMorpionXO.prototype.isWon = function(){
    var cases = document.querySelectorAll('.board-case');

    if(cases[0].textContent !== '' && cases[0].textContent == cases[1].textContent && cases[1].textContent == cases[2].textContent){
        this.displayWinner(cases[0].textContent);
    }
    else if(cases[3].textContent !== '' && cases[3].textContent == cases[4].textContent && cases[4].textContent == cases[5].textContent){
        this.displayWinner(cases[3].textContent);
    }
    else if(cases[6].textContent !== '' && cases[6].textContent == cases[7].textContent && cases[7].textContent == cases[8].textContent){
        this.displayWinner(cases[6].textContent);
    }
    else if(cases[0].textContent !== '' && cases[0].textContent == cases[3].textContent && cases[3].textContent == cases[6].textContent){
        this.displayWinner(cases[0].textContent);
    }
    else if(cases[1].textContent !== '' && cases[1].textContent == cases[4].textContent && cases[4].textContent == cases[7].textContent){
        this.displayWinner(cases[1].textContent);
    }
    else if(cases[2].textContent !== '' && cases[2].textContent == cases[5].textContent && cases[5].textContent == cases[8].textContent){
        this.displayWinner(cases[2].textContent);
    }
    else if(cases[0].textContent !== '' && cases[0].textContent == cases[4].textContent && cases[4].textContent == cases[8].textContent){
        this.displayWinner(cases[0].textContent);
    }
    else if(cases[2].textContent !== '' && cases[2].textContent == cases[4].textContent && cases[4].textContent == cases[6].textContent){
        this.displayWinner(cases[2].textContent);
    }
    else if(cases[0].textContent !== '' && cases[1].textContent !== '' && cases[2].textContent !== '' && cases[3].textContent !== '' && cases[4].textContent !== '' && cases[5].textContent !== '' && cases[6].textContent !== '' && cases[7].textContent !== '' && cases[8].textContent !== ''){
        this.displayWinner();
    }

}

/**
 * Displays winner at the end of a round.
 */

MyMorpionXO.prototype.displayWinner = function(winner){

    if(winner === undefined){
        alert('Match nul! Nouveau round.');
    }
    if(winner === 'X'){
        alert('Bravo ' + winner +', tu as gagné ce round.');
        xWins++;
        if(xWins >= 3){
            alert('Bravo ' + winner +', tu as gagné trois rounds, tu remportes la partie!');
        xWins = 0;
        oWins = 0;
        }
    }
    if(winner === 'O'){
        alert('Bravo ' + winner +', tu as gagné ce round.');
        oWins++;
        if(oWins >= 3){
            alert('Bravo ' + winner +', tu as gagné trois rounds, tu remportes la partie!');
        xWins = 0;
        oWins = 0;
        }
    }

    var cases = document.querySelectorAll('.board-case');
    cases.forEach(el => el.textContent = '');
}

/**
 * Run
 */

MyMorpionXO.prototype.run = function(){
    if(!document.querySelector('table'))this.game();
}

var morpion = new MyMorpionXO();
morpion.run();