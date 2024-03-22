function operate (n, n1, n2){
    if (n == '+'){
        return n1 + n2;
    }else if(n == '-'){
        return n1 - n2;
    }else if(n == '*'){
        return n1 * n2;
    }else{
        return n1 / n2;
    }
}

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    if (calculation.length > 0){
        calculation.pop();
        ptr-=1;
        inputField.textContent = inputField.textContent.substring(0,inputField.textContent.length-1);
    }
})

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    if (calculation.length > 0){
        calculation = [];
        ptr = 0;
        inputField.textContent = "Calculation: ";
        final.textContent = "Result: ";
    }
})

const inputField = document.querySelector('#resultField');

let calculation = [];
let ptr = 0;

// Adds functionality in the number buttons
const numberButtons = document.querySelectorAll('#btn');
for(let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', () => {
        let n = (numberButtons.length - i - 1);
        inputField.textContent += n;
        
        calculation[ptr] = n;
        ptr+=1;

        console.log(calculation);
        console.log("Current ptr: " + ptr);

    })
}

const operations = ['+', '-','/','*'];
//converts to Array
const operatorButtons = Array.from(document.querySelectorAll('#operations button'));
operatorButtons.pop(); // to remove the = button

// Adds functionality to the operator buttons
operatorButtons.forEach( (item, index) => {
    item.addEventListener('click', () => {
        let calcLen = calculation.length;
        if (calcLen >= 1){
            if (Number.isInteger(calculation[ptr-1])){
                inputField.textContent += operations[index];
                calculation[ptr] = operations[index];
                ptr+=1;
            }
        }else{
            console.log('Invalid');
        }

        console.log(calculation);
        console.log("Current ptr: " + ptr);

    });
});
console.log(calculation);
const final = document.querySelector('#final');



const operateButton = document.querySelector('.operate');
operateButton.addEventListener('click', () => {
    let temp1 = '';
    let temp2 = '';
    let op = '';
    calcLen = calculation.length;
    let ptr1 = 0;
    if (Number.isInteger(calculation[calcLen - 1]) && calculation.some( (element) => operations.includes(element))){ //valid
        console.log(calculation[ptr1]);
        while (true){
            temp1 += String(calculation[ptr1]);
            ptr1+=1;
            console.log('Added: ' + String(calculation[ptr1]) + ' to ' + temp1);

            if (operations.includes(calculation[ptr1])){
                op = calculation[ptr1];
                break;
            }
        }
        
        temp1 = parseInt(temp1);
        ptr1+=1;
        while (ptr1 <= calcLen - 1){
            temp2 += String(calculation[ptr1]);
            ptr1+=1;
        }
        
        temp2 = parseInt(temp2);
        final.textContent = operate(op, temp1, temp2);
        
    }else{
        console.log('invalid.');
    }
});

