let temp = 0;


///get the reference to id = display///
const display = document.getElementById('display');
const funcButtons = document.getElementById('upperButtons');
const buttons = document.getElementById("buttons"); 

funcButtons.addEventListener('click', (e) => {

    if(e.target.matches('#clear')) {
        display.textContent = '';
    }
    if(e.target.matches('#delete')) {
        let currentText = display.textContent;
        if(currentText.length > 0) {
            display.textContent = currentText.slice(0, -1);
        }
    }

})

buttons.addEventListener('click', e => {

    if (e.target.matches('.operator') && display.textContent.length > 0) {
        let temp1 = display.textContent;
    }
    if (e.target.matches('.number') && display.textContent.length < 14) {
        display.textContent += e.target.textContent;
    }

    
})


const btnEffect = document.querySelectorAll('.number');

btnEffect.forEach(buttons => {
    buttons.addEventListener('click', () => {
        
        buttons.style.transform = 'scale(0.95)';
        buttons.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
        
        setTimeout(() => {
            buttons.style.transform = 'scale(1)';
            buttons.style.boxShadow = 'none';
        }, 200);
    
    })
})




