let a =''; // first number
let b =''; // secont number
let sign = ''; // знак операции
let finish = false;

const digit =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action =['-', '+', 'X', '/'];

//экран
const out = document.querySelector('.calc-screen p')

function clearALL () {
    a = ''; //first number and result
    b = ''; // second number
    sign =''; // знак 
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearALL;

document.querySelector('.buttons').onclick = (event) => {
    //нажата не кнопка 
    if(!event.target.classList.contains('btn')) return;
    //нажата кнопка clearALL ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    //получаю нажатую кнопку 
    const key = event.target.textContent;
    // если нажата клавиша 0-9 или .  
    if (digit.includes(key)){
        if(b ==='' && sign === ''){
        a += key;
        console.log(a, b , sign);
        out.textContent = a;
        }

        else if (a!=='' && b!=='' && finish){

        }
        else{
            b += key;
            out.textContent = b;
        }
        console.log(a, b , sign);
        return;
    }
    if (action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log( a, b , sign);
        return;
    }
    if (key === '='){
        if (key === '=') b = a ;
    switch (sign){
        case "+":
            a = (+a) + (+b);
            break;

            case "-":
                a = a - b;
               break;
 
            case "X":
                a = a * b;
                break;

               case "/":
                if (b === '0'){
                    out.textContent = 'ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;

    }
    finish = true;
    out.textContent = a;
    console.log(a, b , sign);
    }
}