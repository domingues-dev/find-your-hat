const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field){
        this.field = field;
        this.moves = [];
        this.nextMove = '';
        this.isValidMove = {isValid: false, message: 'Invalid Move'};
        this.playerPosition = {posX: 0, posY: 0};
    }
    print(){
        for(let i = 0; i < this.field.length; i++){
          console.log(this.field[i].join(''));
        }
    }

    validateMove(char){
        switch (char) {
            case 'w':
                if (this.playerPosition.posY != 0) {
                    this.isValidMove.isValid = true;
                    this.playerPosition.posY -= 1;
                }
                this.isValidMove.message = 'You cant go UP'  
                break;
            case 'a':
                if (this.playerPosition.posX != 0) {
                    this.isValidMove.isValid = true;
                    this.playerPosition.posX -= 1;
                }
                this.isValidMove.message = 'You cant go LEFT'  
                break;
            case 'd':
                if (this.playerPosition.posX != this.field.length) {
                    this.isValidMove.isValid = true;
                    this.playerPosition.posX += 1;
                }
                this.isValidMove.message = 'You cant go RIGHT'  
                break;
            case 's':
                if (this.playerPosition.posY != this.field[0].length) {
                    this.isValidMove.isValid = true;
                    this.playerPosition.posY += 1;
                }
                this.isValidMove.message = 'You cant go DOWN'  
                break;

            default:
                this.isValidMove.isValid = false;
                break;
        }
    }

    generateNextField(){
        for(let i = 0; i < this.field.length; i++){
            for(let j = 0; j < this.field[0].length; j++){
                if (i === this.playerPosition.posY && j === this.playerPosition.posX) {
                    if (this.field[i][j] === fieldCharacter) {
                        this.field[i][j] = pathCharacter;
                    }
                }
            }
        }
    }

    start(){
        while(this.field[this.playerPosition.posY][this.playerPosition.posX] != hat && this.field[this.playerPosition.posY][this.playerPosition.posX] != hole){
            this.print();
            this.nextMove = prompt("Which Move?");
            this.validateMove(this.nextMove);
            if (this.isValidMove.isValid){
                this.generateNextField();
            }else{
                console.log(this.isValidMove.message)
                this.start()
            }
        }

        if (this.field[this.playerPosition.posY][this.playerPosition.posX] === hat) {
            console.log('Congratulations you win!')
        }
        if (this.field[this.playerPosition.posY][this.playerPosition.posX] === hole) {
            console.log('Ups you Lost')
        }
        
    
    }

}

const myField = new Field([
    [pathCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, hole, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, hole, fieldCharacter, fieldCharacter],
    [hole, hole, hole, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, hole, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, hole, hole, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
]);

myField.start()

console.log(myField.field.length)
console.log(myField.field[0].length)
