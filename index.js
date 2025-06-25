

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];
let count = 0;

function askNumber() {
  rl.question(`Введите целое число (${count + 1}/5): `, (input) => {
    const num = parseInt(input, 10);
    if (isNaN(num)) {
      console.log('Пожалуйста, введите целое число!');
      askNumber();
    } else {
      arr.push(num);
      count++;
      if (count < 5) {
        askNumber();
      } else {
        console.log('Введённый массив:', arr);
        rl.close();
      }
    }
  });
}

askNumber();