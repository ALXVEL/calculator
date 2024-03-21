const inputField = document.querySelector('#resultField');

let calculation = [];
let ptr = 0;

// Adds functionality in the number buttons
const numberButtons = document.querySelectorAll('#btn');
for(let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', () => {
        let n = (numberButtons.length - i - 1);
        inputField.textContent += n;
        
        //working on this
        let calcLen = calculation.length;
        if (calcLen > 1){
            if (Number.isInteger(calculation[ptr])){
                calculation[ptr] += n;
            }
        }

    })
}

const operations = ['+', '-','/','*'];
//converts to Array
const operatorButtons = Array.from(document.querySelectorAll('#operations button'));
operatorButtons.pop(); // to remove the = button

// Adds functionality to the operator buttons
operatorButtons.forEach( (item, index) => {
    item.addEventListener('click', () => {
        inputField.textContent += operations[index];
    });
});

const operateButton = document.querySelector('.operate');
operateButton.addEventListener('click', () => {

});