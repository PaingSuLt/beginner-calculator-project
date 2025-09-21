let temp1 = 0;
let temp2 = 0;
let operator = '';


///get the references///
const display = document.getElementById('display');
const funcButtons = document.getElementById('upperButtons');
const buttons = document.getElementById("buttons"); 
const dot = document.getElementById('dot');

///basic operation functions//
const add = function(a,b) {
    return a + b;
}

const subtract = function (a,b) {
    return a - b;
}

const multiply = function (a,b) {
    return a * b;
}

const divide = function (a,b) {
    return a / b;
}

const operate = function (a,b) {
    let result = 0;
    ///check what operator variable has (if + add numbers if - subtract and so on)///
        switch(operator) {

            case'+' : result = add(a,b); break;
            case'-' : result = subtract(a,b); break;
            case'×' : result = multiply(a,b); break;
            case'÷' : result = divide(a,b); break;

        }
    temp1 = result;

    display.textContent += temp1;

}

const notAnOperator = function () {

    const operators = '+-×÷';

    if (!operators.includes(display.textContent[0])) {
        return true;
    }else {
        return false;
    }
}



///CLick animation to feel like a button///
function animateButton(button) {
    button.style.transform = 'scale(0.95)';
    button.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
        
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
    }, 200);
    
}

dot.addEventListener('click', (e) => {
    animateButton(e.target);
})

///assign clear and backspace function///
funcButtons.addEventListener('click', (e) => {

    if(e.target.matches('#clear')) {
        display.textContent = '';
        animateButton(e.target);
        
    }
    if(e.target.matches('#delete')) {
        animateButton(e.target);
        let currentText = display.textContent;
        if(currentText.length > 0) {
            display.textContent = currentText.slice(0, -1);
        }
    }

})


buttons.addEventListener('click', e => {

    ///if typed number, keep adding the numbers on display.textContent///
    if (e.target.matches('.number') && display.textContent.length < 14) {
        display.textContent += e.target.textContent;
    }

    ///empty the display.textContent and add the operator to display.textContent[0]///
    if (e.target.matches('.operator') && display.textContent.length > 0) {
        
        if(notAnOperator()) {
            temp1 = +display.textContent; ///store the numbers into temp1
            display.textContent = ''; ///empty the display.textContent
            display.textContent += e.target.textContent; ///store the operator at display.textContent[0]
        }else {
            temp2 = +display.textContent.slice(1);
            operator = display.textContent[0];
            display.textContent = '';
        
            operate(temp1,temp2);
        }

        

    }

    ///add the floating point but prevent user from entering more than 1///
    if (e.target.matches('#dot') && display.textContent.length >= 1 && (!display.textContent.includes('.')) ) {
        display.textContent += e.target.textContent;
    }

    ///if typed equal///
    if (e.target.matches('#equal') && display.textContent.length > 0) {
        
        ///operator store the value at display.textContent[0](look codeline number 68 if not clear) and temp2 store starting from [1] to end///
        temp2 = +display.textContent.slice(1);
        operator = display.textContent[0];

        display.textContent = '';
        
        operate(temp1,temp2);

    }
    
})

///assign buttonAnimate() to each buttons in a btnEffect nodelist///
const btnEffect = document.querySelectorAll('.number');

btnEffect.forEach(buttons => {
    buttons.addEventListener('click', () => {
        
        animateButton(buttons);
    
    })
})





