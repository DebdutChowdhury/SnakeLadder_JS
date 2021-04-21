let diceRoll = require('./diceRoll')
let roll = new diceRoll.DiceRoll();

let playerPos = 0;
let player = "Player";
let dice = 0, count = 0;
let option = 0;
let player1Pos = 0,player2Pos = 0,count1 = 0,count2 = 0;

class PlayerInsert{
    constructor(start){
        this.start = start;
    }

    players(){
        console.log("Game Starts!\nYou are at position :" + this.start);
       
        while ((player1Pos >= 0 && player1Pos < 20) || (player2Pos >= 0 && player2Pos < 20)) {
           
                console.log("\nPlayer1's Turn:");
                dice = roll.diceRoll();
                option = roll.checkOption();
                console.log("Dice Rolled : " +dice);
                player1Pos = this.play(option,dice,player1Pos);
                count1++;
           
            if(player1Pos == 20 ){
                break;
            }
           
                console.log("\nPlayer2's Turn:");
                dice = roll.diceRoll();
                option = roll.checkOption()
                console.log("Dice Rolled : " +dice);
                player2Pos = this.play(option,dice,player2Pos);
                count2++;
            
            if(player2Pos == 20 ){
                break;
            }
        }
        return [player1Pos,player2Pos,count1,count2];
      
    }
    
    play(option,dice,playerPos){
        switch(option){
            case 1: 
                playerPos += dice; 
                console.log(`Yeah! You got a Ladder`);
                if(playerPos > 20){
                    playerPos -= dice;
                }
                break;
            case 2:
                playerPos -= dice;
                console.log(`Snake bits you`);
                if (playerPos < 0){
                    playerPos = 0;                 
                    console.log(`Player position 0`);
                }
                break;
            case 3:               
                console.log(`Pass the chance`);
                break;
        }
        console.log(`Your position is : ${playerPos}`);
        return playerPos;
    }

    plrResult(){
        console.log(`Player1 Dice Rolled ${count1} times \nPlayer2 Dice Rolled ${count2} times`);
        if(player1Pos == 20){
            console.log('Congrats!!, Player1 Won');
        }
        if(player2Pos == 20){
            console.log('Congrats!!, Player2 Won');
        }
        return [player1Pos,player2Pos]
    }

}

module.exports = {PlayerInsert};