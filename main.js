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
      this.playerPosition = {
          posX: 0, posY: 0
      };
  }
  print(){
      for(let i = 0; i < this.field.length; i++){
        console.log(this.field[i].join(''));
      }
  }

  start(){
        this.print();
        this.nextMove = prompt("Which Move?");
        this.validateMove(this.nextMove);
        if (this.isValidMove.isValid){
        
        }else{
            console.log(this.isValidMove.message)
            this.start()
        }
    
    }
  validateMove(char){
    
        switch (char) {
            case 'w':
                if (this.playerPosition.posY != 0) {
                    this.isValidMove.isValid = true;
                }
                this.isValidMove.message = 'You cant go UP'  
                break;
            case 'a':
                if (this.playerPosition.posX != 0) {
                    this.isValidMove.isValid = true;
                }
                this.isValidMove.message = 'You cant go LEFT'  
                break;
            case 'd':
                if (this.playerPosition.posX != this.field.length) {
                    this.isValidMove.isValid = true;
                }
                this.isValidMove.message = 'You cant go RIGHT'  
                break;
            case 's':
                if (this.playerPosition.posX != this.field[0].length) {
                    this.isValidMove.isValid = true;
                }
                this.isValidMove.message = 'You cant go DOWN'  
                break;
                
            default:
                this.isValidMove.isValid = false;
                break;
        }
        
    
  }

}

const myField = new Field([
    [pathCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter],
    [fieldCharacter, hole, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter, fieldCharacter],
]);

myField.start()
console.log(myField.field[myField.playerPosition.posX][myField.playerPosition.posY])
