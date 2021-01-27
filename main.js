const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field){
      this.field = field;
  }
  print(){
      for(let i = 0; i < this.field.length; i++){
        console.log(this.field[i].join(''));
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

myField.print()