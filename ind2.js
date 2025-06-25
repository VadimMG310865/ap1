

function calcVir(str) {
    let result = 0;
    let currentNum = 0;
    let lastNum = 0;
    let op = '+';
    let i = 0;

    while (i < str.length) {
        let ch = str[i];

        if (ch >= '0' && ch <= '9') {
            currentNum = 0;
            // ================ если число многозначное собираем его ==============
            while (i < str.length && str[i] >= '0' && str[i] <= '9') {
                currentNum = currentNum * 10 + Number(str[i]);
                i++;
            }
            // =============== применяем предыдущий оператор ====================
            if (op === '+') {
                result += lastNum;
                lastNum = currentNum;
            } else if (op === '-') {
                result += lastNum;
                lastNum = -currentNum;
            } else if (op === '*') {
                lastNum = lastNum * currentNum;
            }
            continue; // ============ чтобы не пропустить символ после числа ==================
        } else if (ch === '+' || ch === '-' || ch === '*') {
            op = ch;
        }
        i++;
    }
    result += lastNum;
    return result;
}

//======================================================
//=== обеспечиваем ввод с клавиатуры ===================
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let  vir = "";
function inpVir() {
  rl.question(`Введите выражение не более чем c девятью целыми числами: `, (input1) => {
        vir = input1;
        console.log(`Вы ввели выражение: `, vir);
        console.log(`Результат выражения расен: ` + calcVir(vir));
        rl.close();
      }

  );
}
//======================================================
//======== запускаем процедуру =========================
inpVir();
